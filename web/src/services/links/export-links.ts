import { api } from '../api'

interface ExportLinksResponse {
  reportUrl: string
}

export function exportLinks() {
  return api.post<ExportLinksResponse>('/links/exports')
}
