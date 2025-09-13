import { twMerge } from 'tailwind-merge'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={twMerge('bg-gray-200 animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

export { Skeleton }
