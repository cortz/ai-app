import { tv } from "tailwind-variants";
import {
  Checkbox as AriaCheckbox,
  type CheckboxProps as AriaCheckboxProps,
  composeRenderProps,
} from "react-aria-components";

/**
 * Checkbox component that uses React Aria for accessibility and keyboard interactions.
 *
 * @component
 * @example
 * ```tsx
 * <Checkbox
 *   isSelected={isSelected}
 *   onSelectionChange={setIsSelected}
 * >
 *   Accept terms
 * </Checkbox>
 * ```
 */
export interface CheckboxProps
  extends Omit<AriaCheckboxProps, "ref">,
    React.RefAttributes<HTMLLabelElement> {
  /** The visual style variant of the checkbox */
  variant?: "default" | "error";
  /** Additional CSS classes to apply to the checkbox */
  className?: string;
}

const checkbox = tv({
  base: "flex items-center gap-2 text-sm",
  variants: {
    variant: {
      default: "text-gray-700",
      error: "text-red-500",
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export function Checkbox({ variant, className, ...props }: CheckboxProps) {
  return (
    <AriaCheckbox
      {...props}
      className={composeRenderProps(className, (className) =>
        checkbox({
          variant,
          isDisabled: props.isDisabled,
          className,
        })
      )}
    />
  );
}
