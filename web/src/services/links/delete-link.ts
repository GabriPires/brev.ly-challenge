import { api } from '../api'

interface DeleteLinkParams {
  id: string
}

export function deleteLink(data: DeleteLinkParams) {
  return api.delete('/links', { data })
}
