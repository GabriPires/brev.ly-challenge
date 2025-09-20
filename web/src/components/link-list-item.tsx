import { ClipboardText, Copy, Trash } from '@phosphor-icons/react'
import { IconButton } from './ui/icon-button'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteLink } from '@/services/links/delete-link'
import { toast } from 'sonner'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'
import { useState } from 'react'

interface LinkListItemProps {
  link: {
    id: string
    originalUrl: string
    shortHash: string
    accessCount: number
  }
}

export function LinkListItem({ link }: LinkListItemProps) {
  const [hasCopied, setHasCopied] = useState(false)
  const queryClient = useQueryClient()

  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(`${window.location.origin}/${text}`)

    setHasCopied(true)

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  const { mutateAsync: deleteLinkFn, isPending } = useMutation({
    mutationFn: async (id: string) => {
      await deleteLink({ id })
    },
    onSuccess: () => {
      toast.success('Link excluído com sucesso!')
      queryClient.invalidateQueries({ queryKey: ['my-links'] })
    },
    onError: () => {
      toast.error(
        'Ops! Algo deu errado ao excluir o link. Tente novamente mais tarde.',
      )
    },
  })

  return (
    <div className="grid grid-cols-[1fr_auto_70px] items-center gap-4 overflow-hidden border-t border-t-gray-200 py-4">
      <div className="flex flex-col overflow-hidden">
        <span className="text-base font-semibold text-blue-base truncate">
          {link.shortHash}
        </span>
        <span className="text-sm text-gray-500 truncate">
          {link.originalUrl}
        </span>
      </div>
      <span className="text-gray-500 text-sm">{link.accessCount} acessos</span>
      <div className="flex items-center gap-1.5">
        <Tooltip open={hasCopied}>
          <TooltipTrigger asChild>
            <IconButton
              icon={Copy}
              onClick={() => copyToClipboard(link.shortHash)}
            />
          </TooltipTrigger>
          <TooltipContent className="flex items-center gap-1.5">
            <ClipboardText className="fill-blue-base size-3" />
            <span className="text-sm text-gray-500">Copiado!</span>
          </TooltipContent>
        </Tooltip>
        <IconButton
          icon={Trash}
          disabled={isPending}
          isLoading={isPending}
          onClick={() => deleteLinkFn(link.id)}
        />
      </div>
    </div>
  )
}
