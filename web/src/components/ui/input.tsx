import { Warning } from '@phosphor-icons/react'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'> & {
  label?: string
  errorMessage?: string
}

export function Input({
  label,
  placeholder,
  className,
  errorMessage,
  id,
  ...props
}: InputProps) {
  return (
    <div className="group flex flex-col gap-2" data-error={!!errorMessage}>
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-bold text-gray-500 uppercase group-focus-within:text-blue-base group-data-[error=true]:text-danger"
        >
          {label}
        </label>
      )}
      <div className="flex w-full h-12 ring-[1.5px] ring-gray-300 rounded-md px-4 group-focus-within:ring-blue-base group-data-[error=true]:ring-danger">
        <input
          id={id}
          placeholder={placeholder}
          className={twMerge(
            'w-full outline-none text text-gray-600 placeholder:text-gray-400',
            className,
          )}
          {...props}
        />
      </div>
      {errorMessage && (
        <div className="flex items-center gap-1">
          <Warning size={14} className="text-danger" />
          <span className="text-sm text-red-500">{errorMessage}</span>
        </div>
      )}
    </div>
  )
}
