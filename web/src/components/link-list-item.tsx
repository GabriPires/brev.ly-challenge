import { Copy, Trash } from '@phosphor-icons/react'
import { IconButton } from './ui/icon-button'

interface LinkListItemProps {
  link: {
    id: string
    originalUrl: string
    shortHash: string
    accessCount: number
  }
}

export function LinkListItem({ link }: LinkListItemProps) {
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text)
  }

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
        <IconButton
          icon={Copy}
          onClick={() => copyToClipboard(link.shortHash)}
        />
        <IconButton icon={Trash} />
      </div>
    </div>
  )
}
