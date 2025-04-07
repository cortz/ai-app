import { tv } from "tailwind-variants";
import {
  Switch as AriaSwitch,
  type SwitchProps as AriaSwitchProps,
  composeRenderProps,
} from "react-aria-components";
import type { ReactNode } from "react";

/**
 * Switch component that uses React Aria for accessibility and keyboard interactions.
 *
 * @component
 * @example
 * ```tsx
 * <Switch
 *   isSelected={isEnabled}
 *   onChange={setIsEnabled}
 * >
 *   Enable notifications
 * </Switch>
 * ```
 */
export interface SwitchProps
  extends Omit<AriaSwitchProps, "children" | "ref">,
    React.RefAttributes<HTMLLabelElement> {
  /** The visual style variant of the switch */
  variant?: "default" | "error";
  /** Additional CSS classes to apply to the switch */
  className?: string;
  /** The label content */
  children?: ReactNode;
}

const switchStyles = tv({
  base: "group flex items-center gap-2 text-sm",
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

const toggleStyles = tv({
  base: [
    "w-10 h-6 rounded-full transition-colors relative flex items-center",
    "bg-gray-200 group-data-[selected]:bg-primary-600",
    "group-data-[focus-visible]:ring-2 group-data-[focus-visible]:ring-offset-2 group-data-[focus-visible]:ring-primary-500",
    "group-disabled:opacity-50",
  ],
});

const thumbStyles = tv({
  base: [
    "absolute w-4 h-4 rounded-full bg-white shadow transform transition-transform",
    "left-1 group-data-[selected]:translate-x-4",
  ],
});

export function Switch({
  variant,
  className,
  children,
  ...props
}: SwitchProps) {
  return (
    <AriaSwitch
      {...props}
      className={composeRenderProps(className, (className) =>
        switchStyles({
          variant,
          isDisabled: props.isDisabled,
          className,
        })
      )}
    >
      {() => (
        <>
          <div className={toggleStyles()}>
            <span className={thumbStyles()} />
          </div>
          {children}
        </>
      )}
    </AriaSwitch>
  );
}
