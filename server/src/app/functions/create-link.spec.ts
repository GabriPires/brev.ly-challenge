import { isLeft, isRight, unwrapEither } from '@/shared/either'
import { describe, expect, it } from 'vitest'
import { createLink } from './create-link'
import { InvalidUrl } from './errors/invalid-url'
import { ResourceAlreadyExists } from './errors/resource-already-exists'

describe('create link', () => {
  it('should be able to create a link', async () => {
    const sut = await createLink({
      originalUrl: 'https://example.com',
    })

    expect(isRight(sut)).toBe(true)
    expect(unwrapEither(sut)).toMatchObject({
      shortHash: expect.any(String),
    })
  })

  it('should not be able to crate a link with invalid url', async () => {
    const sut = await createLink({
      originalUrl: 'invalid-url',
    })

    expect(isLeft(sut)).toBe(true)
    expect(unwrapEither(sut)).toBeInstanceOf(InvalidUrl)
  })

  it('should be able to create a link with custom short url', async () => {
    const sut = await createLink({
      originalUrl: 'https://example.com',
      shortUrl: 'custom-short-url',
    })

    expect(isRight(sut)).toBe(true)
    expect(unwrapEither(sut)).toMatchObject({
      shortHash: 'custom-short-url',
    })
  })

  it('should not be able to create a link with existing custom short url', async () => {
    await createLink({
      originalUrl: 'https://example.com',
      shortUrl: 'custom-short-url',
    })

    const sut = await createLink({
      originalUrl: 'https://example.com',
      shortUrl: 'custom-short-url',
    })

    expect(isLeft(sut)).toBe(true)
    expect(unwrapEither(sut)).toBeInstanceOf(ResourceAlreadyExists)
  })

  it('should be able to create a link with valid short url containing letters, numbers, hyphens and underscores', async () => {
    const sut = await createLink({
      originalUrl: 'https://example.com',
      shortUrl: 'valid-short_url123',
    })

    expect(isRight(sut)).toBe(true)
    expect(unwrapEither(sut)).toMatchObject({
      shortHash: 'valid-short_url123',
    })
  })

  it('should not be able to create a link with invalid short url containing special characters', async () => {
    const invalidShortUrls = [
      'invalid@url',
      'invalid.url',
      'invalid url',
      'invalid#url',
      'invalid%url',
      'invalid&url',
      'invalid+url',
      'invalid=url',
      'invalid?url',
      'invalid/url',
    ]

    for (const shortUrl of invalidShortUrls) {
      const sut = await createLink({
        originalUrl: 'https://example.com',
        shortUrl,
      })

      expect(isLeft(sut)).toBe(true)
      expect(unwrapEither(sut)).toBeInstanceOf(InvalidUrl)
    }
  })
})
