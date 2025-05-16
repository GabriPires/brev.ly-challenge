import { type Icon } from '@phosphor-icons/react'
import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const iconButton = tv({
  base: 'flex items-center justify-center rounded-sm h-8 w-8 cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary:
        'bg-gray-200 text-gray-500 border border-transparent hover:border-blue-base',
    },
  },
})

type IconButtonProps = Omit<ComponentProps<'button'>, 'children'> &
  VariantProps<typeof iconButton> & {
    icon: Icon
  }

export function IconButton({
  className,
  variant = 'primary',
  icon: Icon,
  ...props
}: IconButtonProps) {
  return (
    <button className={iconButton({ variant, className })} {...props}>
      {<Icon size={16} />}
    </button>
  )
}
