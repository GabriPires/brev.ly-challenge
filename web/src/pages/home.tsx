import Logo from '@/assets/logo.svg'
import { MyLinks } from '@/components/my-links'
import { NewLinkForm } from '@/components/new-link-form'

export function HomePage() {
  return (
    <div className="flex flex-col w-full max-w-[980px] mx-auto lg:min-h-svh lg:justify-center lg:-mt-[120px]">
      <img
        src={Logo}
        alt="Logo do brev.ly"
        className="w-[96px] mt-8 mx-auto mb-6 lg:mx-0 lg:mt-0"
      />

      <div className="flex flex-col lg:grid lg:items-start lg:grid-cols-5 lg:gap-5">
        <NewLinkForm />
        <MyLinks />
      </div>
    </div>
  )
}
