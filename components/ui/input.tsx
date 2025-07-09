import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-dark-4 bg-dark-1 px-3 py-2 text-sm ring-offset-dark-1 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-dark-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-4 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-4 dark:bg-dark-3 dark:ring-offset-dark-3 dark:placeholder:text-dark-1 dark:focus-visible:ring-dark-4",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
