import { tv } from "tailwind-variants";
import {
  Label as AriaLabel,
  type LabelProps as AriaLabelProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

/**
 * Label component that uses React Aria for accessibility.
 *
 * @component
 * @example
 * ```tsx
 * <Label htmlFor="email">Email</Label>
 * ```
 */
export interface LabelProps
  extends AriaLabelProps,
    React.RefAttributes<HTMLLabelElement> {
  /** The visual style variant of the label */
  variant?: "default" | "required";
  /** Additional CSS classes to apply to the label */
  className?: string;
}

const label = tv({
  base: "block text-sm font-medium text-gray-700 mb-1",
  variants: {
    variant: {
      default: "",
      required: "after:content-['*'] after:ml-0.5 after:text-red-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function Label({ variant, className, ...props }: LabelProps) {
  return (
    <AriaLabel {...props} className={twMerge(label({ variant }), className)} />
  );
}
