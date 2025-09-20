import { db } from '@/infra/db'
import { schema } from '@/infra/db/schemas'
import { type Either, makeLeft, makeRight } from '@/shared/either'
import { nanoid } from 'nanoid'
import { z } from 'zod'
import { InvalidUrl } from './errors/invalid-url'
import { eq } from 'drizzle-orm'
import  { ResourceAlreadyExists } from './errors/resource-already-exists'

const createLinkInput = z.object({
  originalUrl: z.string().url(),
  shortUrl: z.string().optional(),
})

type CreateLinkInput = z.input<typeof createLinkInput>

export async function createLink(
  input: CreateLinkInput
): Promise<Either<InvalidUrl | ResourceAlreadyExists, { shortHash: string }>> {
  const { success, data } = createLinkInput.safeParse(input)

  if (!success) {
    return makeLeft(new InvalidUrl())
  }

  const { originalUrl, shortUrl } = data

  if (shortUrl) {
    const existingLink = await db
      .select()
      .from(schema.link)
      .where(
        eq(schema.link.shortHash, shortUrl)
      )

    if (existingLink.length > 0) {
      return makeLeft(new ResourceAlreadyExists())
    }

    await db.insert(schema.link).values({
      originalUrl,
      shortHash: shortUrl,
    })

    return makeRight({
      shortHash: shortUrl,
    })
  }

  const shortHash = nanoid(8)

  await db.insert(schema.link).values({
    originalUrl,
    shortHash,
  })

  return makeRight({
    shortHash,
  })
}
