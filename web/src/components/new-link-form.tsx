import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'

const newLinkFormSchema = z.object({
  originalUrl: z.string().url('URL inválida'),
  shortUrl: z.string().url('URL inválida'),
})

type NewLinkFormData = z.infer<typeof newLinkFormSchema>

export function NewLinkForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewLinkFormData>({
    resolver: zodResolver(newLinkFormSchema),
    defaultValues: {
      originalUrl: '',
      shortUrl: '',
    },
  })

  function onSubmit(data: NewLinkFormData) {
    console.log(data)
  }

  return (
    <form
      className="flex flex-col bg-white p-6 w-full rounded-lg gap-5 lg:col-span-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-lg font-bold">Novo link</h2>

      <div className="space-y-4">
        <Input
          label="Link original"
          placeholder="www.exemplo.com"
          errorMessage={errors.originalUrl?.message}
          {...register('originalUrl')}
        />
        <Input
          label="Link encurtado"
          placeholder="brev.ly/"
          errorMessage={errors.shortUrl?.message}
          {...register('shortUrl')}
        />
      </div>

      <Button>Salvar link</Button>
    </form>
  )
}
