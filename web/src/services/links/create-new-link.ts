import { api } from '../api'

interface CreateNewLinkParams {
  originalUrl: string
  shortUrl?: string
}

export function createNewLink(data: CreateNewLinkParams) {
  return api.post('/links', data)
}
