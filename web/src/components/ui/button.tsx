import type { ComponentProps } from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center rounded-lg font-semibold text-base cursor-pointer p-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
  variants: {
    variant: {
      primary: 'h-12 bg-blue-base text-white hover:bg-blue-dark',
      secondary:
        'h-8 bg-gray-200 text-sm text-gray-500 border rounded-sm border-transparent hover:border-blue-base',
    },
  },
})

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof button>

export function Button({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return <button className={button({ variant, className })} {...props} />
}
