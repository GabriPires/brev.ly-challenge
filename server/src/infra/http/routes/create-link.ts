import { createLink } from '@/app/functions/create-link'
import { InvalidUrl } from '@/app/functions/errors/invalid-url'
import { ResourceAlreadyExists } from '@/app/functions/errors/resource-already-exists'
import { isLeft, unwrapEither } from '@/shared/either'
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'

export const createLinkRoute: FastifyPluginAsyncZod = async (server) => {
  server.post(
    '/links',
    {
      schema: {
        body: z.object({
          originalUrl: z.string().url(),
          shortUrl: z.string().optional(),
        }),
        response: {
          201: z.object({
            shortHash: z.string(),
          }),
          400: z.object({
            message: z.string(),
          }),
          409: z.object({
            message: z.string(),
          }),
          500: z.object({
            message: z.string(),
          }),
        },
      },
    },
    async (request, reply) => {
      const { originalUrl, shortUrl } = request.body

      const result = await createLink({
        originalUrl,
        shortUrl
      })

      if (isLeft(result)) {
        if (result.left instanceof InvalidUrl) {
          return reply.status(400).send({
            message: 'Invalid URL',
          })
        }

        if (result.left instanceof ResourceAlreadyExists) {
          return reply.status(409).send({
            message: 'Short URL already exists',
          })
        }

        return reply.status(500).send({
          message: 'Internal server error',
        })
      }

      const { shortHash } = unwrapEither(result)

      return reply.status(201).send({
        shortHash,
      })
    }
  )
}
