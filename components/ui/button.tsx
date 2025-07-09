import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-dark-1 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dark-4 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-dark-3 dark:focus-visible:ring-dark-4 text-white dark:text-white',
  {
    variants: {
      variant: {
        default:
          'bg-dark-1 text-white hover:bg-dark-2 dark:bg-dark-4 dark:text-white dark:hover:bg-dark-3',
        destructive:
          'bg-red-500 text-white hover:bg-red-500/90 dark:bg-red-900 dark:text-white dark:hover:bg-red-900/90',
        outline:
          'border border-dark-4 bg-dark-3 hover:bg-dark-2 hover:text-white dark:border-dark-4 dark:bg-dark-1 dark:hover:bg-dark-2 dark:hover:text-white',
        secondary:
          'bg-dark-2 text-white hover:bg-dark-2/80 dark:bg-dark-3 dark:text-white dark:hover:bg-dark-3/80',
        ghost:
          'hover:bg-dark-2 hover:text-white dark:hover:bg-dark-3 dark:hover:text-white',
        link: 'text-white underline-offset-4 hover:underline dark:text-white',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
