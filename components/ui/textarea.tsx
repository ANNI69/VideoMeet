import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[80px] w-full rounded-md border border-dark-4 bg-dark-1 px-3 py-2 text-sm ring-offset-dark-1 placeholder:text-dark-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-4 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-dark-4 dark:bg-dark-3 dark:ring-offset-dark-3 dark:placeholder:text-dark-1 dark:focus-visible:ring-dark-4",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
