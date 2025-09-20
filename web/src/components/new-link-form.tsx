import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createNewLink } from '@/services/links/create-new-link'
import { toast } from 'sonner'

const newLinkFormSchema = z.object({
  originalUrl: z.string().url('URL inválida'),
  shortUrl: z
    .string()
    .regex(
      /^[a-zA-Z0-9_-]+$/,
      'URL encurtada inválida. Use apenas letras, números, hifens e underscores',
    )
    .optional(),
})

type NewLinkFormData = z.infer<typeof newLinkFormSchema>

export function NewLinkForm() {
  const queryClient = useQueryClient()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewLinkFormData>({
    resolver: zodResolver(newLinkFormSchema),
    defaultValues: {
      originalUrl: '',
      shortUrl: '',
    },
  })

  const { mutateAsync: newLink, isPending } = useMutation({
    mutationFn: async (data: NewLinkFormData) => {
      const response = await createNewLink(data)
      return response.data
    },
    onSuccess: async () => {
      reset()
      await queryClient.invalidateQueries({ queryKey: ['my-links'] })
      toast.success('Link criado com sucesso!')
    },
  })

  async function onSubmit(data: NewLinkFormData) {
    await newLink(data)
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
          prefix="brev.ly/"
          errorMessage={errors.shortUrl?.message}
          {...register('shortUrl')}
        />
      </div>

      <Button type="submit" disabled={isPending}>
        Salvar link
      </Button>
    </form>
  )
}
