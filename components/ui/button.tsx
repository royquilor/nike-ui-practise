import * as React from "react"
import Link from "next/link"
import { VariantProps, cva } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600",
        outline:
          "bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100",
        subtle:
          "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100",
        ghost:
          "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
        link: "bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent",
      },
      size: {
        default: "h-10 py-2 px-4 text-base",
        sm: "h-9 px-2 rounded-md text-sm",
        lg: "h-11 px-8 rounded-md text-lg",
      },
      fullWidth: {
        true: "w-full",
      },
      pill: {
        true: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
      pill: false,
    },
  }
)

// Define a more specific type for ButtonProps
type CommonProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement> & React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>;

interface ButtonProps extends CommonProps, VariantProps<typeof buttonVariants> {
  disabled?: boolean;
  href?: string;
}

const Button = React.forwardRef<HTMLButtonElement & HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, fullWidth, pill, disabled, href, ...props }, ref) => {
    // Check if href is provided, render as a Link
    if (href) {
      return (
        <Link href={href}>
          <a
            className={cn(buttonVariants({ variant, size, className, fullWidth, pill }))}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...props}
          >
            {props.children}
          </a>
        </Link>
      );
    }

    // Otherwise, render as a button
    return (
      <button
        type="button"
        className={cn(buttonVariants({ variant, size, className, fullWidth, pill }))}
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        {...props}
      >
        {props.children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
