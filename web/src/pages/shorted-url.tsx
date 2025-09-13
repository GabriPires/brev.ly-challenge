import Icon from '@/assets/icon.svg'
import { getOriginalLinkWithHash } from '@/services/links/get-original-url-with-hash'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export function ShortedUrlPage() {
  const params = useParams<{ shortHash: string }>()

  console.log(params)

  const { data: originalUrl } = useQuery({
    queryKey: ['get-original-url'],
    queryFn: async () => {
      const response = await getOriginalLinkWithHash({
        shortHash: params.shortHash!,
      })

      const originalUrl = response.data.originalUrl

      window.location.replace(originalUrl)

      return originalUrl
    },
    enabled: !!params.shortHash,
  })

  return (
    <div className="min-h-svh flex items-center mx-auto w-full">
      <div className="bg-white rounded-lg px-5 h-[282px] flex flex-col items-center justify-center lg:w-[580px] mx-auto">
        <img src={Icon} alt="Ícone do brev.ly" className="h-12" />
        <span className="font-bold text-gray-600 text-xl my-6">
          Redirecionando...
        </span>
        <span className="text-base text-gray-500 text-center mb-1">
          O link será aberto automaticamente em alguns instantes.
        </span>
        <span className="text-base text-gray-500 text-center">
          Não foi redirecionado?{' '}
          <a href={originalUrl} className="text-blue-base underline">
            Acesse aqui
          </a>
        </span>
      </div>
    </div>
  )
}
