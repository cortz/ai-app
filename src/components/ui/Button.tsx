import { tv } from "tailwind-variants";
import {
  Button as AriaButton,
  type ButtonProps as AriaButtonProps,
  composeRenderProps,
} from "react-aria-components";

/**
 * Button component that uses React Aria for accessibility and keyboard interactions.
 *
 * @component
 * @example
 * ```tsx
 * <Button onPress={() => console.log('Clicked!')}>
 *   Click me
 * </Button>
 * ```
 */
export interface ButtonProps
  extends AriaButtonProps,
    React.RefAttributes<HTMLButtonElement> {
  /** The visual style variant of the button */
  variant?: "primary" | "secondary";
  /** Additional CSS classes to apply to the button */
  className?: string;
}

const button = tv({
  base: "px-4 py-2 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  variants: {
    variant: {
      primary:
        "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
      secondary:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
    },
    isDisabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export function Button({ variant, className, ...props }: ButtonProps) {
  return (
    <AriaButton
      {...props}
      className={composeRenderProps(className, (className) =>
        button({
          variant,
          isDisabled: props.isDisabled,
          className,
        })
      )}
    />
  );
}
