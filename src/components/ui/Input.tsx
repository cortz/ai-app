import { tv } from "tailwind-variants";
import {
  Input as AriaInput,
  type InputProps as AriaInputProps,
  composeRenderProps,
} from "react-aria-components";

/**
 * Input component that uses React Aria for accessibility and keyboard interactions.
 *
 * @component
 * @example
 * ```tsx
 * <Input
 *   name="email"
 *   type="email"
 *   placeholder="Enter your email"
 *   required
 * />
 * ```
 */
export interface InputProps
  extends AriaInputProps,
    React.RefAttributes<HTMLInputElement> {
  /** The visual style variant of the input */
  variant?: "default" | "error";
  /** Additional CSS classes to apply to the input */
  className?: string;
}

const input = tv({
  base: "w-full px-3 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2",
  variants: {
    variant: {
      default: "focus:border-primary-500 focus:ring-primary-500",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function Input({ variant, className, ...props }: InputProps) {
  return (
    <AriaInput
      {...props}
      className={composeRenderProps(className, (className) =>
        input({
          variant,
          disabled: props.disabled,
          className,
        })
      )}
    />
  );
}
