import { api } from '../api'

interface GetOriginalUrlWithHashParams {
  shortHash: string
}

interface GetOriginalUrlWithHashResponse {
  originalUrl: string
}

export function getOriginalLinkWithHash(params: GetOriginalUrlWithHashParams) {
  return api.get<GetOriginalUrlWithHashResponse>(`/links/${params.shortHash}`)
}
