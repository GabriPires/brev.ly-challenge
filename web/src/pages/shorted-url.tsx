import Icon from '@/assets/icon.svg'

export function ShortedUrlPage() {
  return (
    <div className="min-h-svh flex items-center mx-auto w-full">
      <div className="bg-white rounded-lg px-5 h-[282px] flex flex-col items-center justify-center lg:w-[580px] lg:mx-auto">
        <img src={Icon} alt="Ícone do brev.ly" className="h-12" />
        <span className="font-bold text-gray-600 text-xl my-6">
          Redirecionando...
        </span>
        <span className="text-base text-gray-500 text-center mb-1">
          O link será aberto automaticamente em alguns instantes.
        </span>
        <span className="text-base text-gray-500 text-center">
          Não foi redirecionado?{' '}
          <a href="#" className="text-blue-base underline">
            Acesse aqui
          </a>
        </span>
      </div>
    </div>
  )
}
