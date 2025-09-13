import { api } from '../api'

interface GetMyLinksResponse {
  links: {
    id: string
    originalUrl: string
    shortHash: string
    accessCount: number
  }[]
}

export function getMyLinks() {
  return api.get<GetMyLinksResponse>('/links')
}
