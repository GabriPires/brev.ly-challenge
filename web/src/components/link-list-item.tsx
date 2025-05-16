import { Copy, Trash } from '@phosphor-icons/react'
import { IconButton } from './ui/icon-button'

export function LinkListItem() {
  return (
    <div className="grid grid-cols-[1fr_auto_70px] items-center gap-4 overflow-hidden border-t border-t-gray-200 py-4">
      <div className="flex flex-col overflow-hidden">
        <span className="text-base font-semibold text-blue-base truncate">
          https://brev.ly/LinkedIn-Profile
        </span>
        <span className="text-sm text-gray-500 truncate">
          https://linkedin.com/in/profile
        </span>
      </div>
      <span className="text-gray-500 text-sm">30 acessos</span>
      <div className="flex items-center gap-1.5">
        <IconButton icon={Copy} />
        <IconButton icon={Trash} />
      </div>
    </div>
  )
}
