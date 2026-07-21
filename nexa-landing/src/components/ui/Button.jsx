import * as React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-surface hover:opacity-90 hover:-translate-y-0.5 shadow-sm",
        outline: "border border-border bg-transparent text-primary hover:bg-muted-surface",
        ghost: "text-primary hover:bg-muted-surface hover:opacity-70",
        secondary: "bg-secondary text-surface hover:opacity-90",
      },
      size: {
        default: "h-12 px-8 text-base",
        sm: "h-10 px-6 text-sm",
        lg: "h-14 px-10 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(({ className, variant, size, ...props }, ref) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
