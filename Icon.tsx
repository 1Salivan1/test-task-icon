import * as LucideIcons from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

export const iconVariants = tv({
  base: "shrink-0 transition-colors",
  variants: {
    size: {
      xs: "size-3.5", // 14px
      sm: "size-4", // 16px
      md: "size-5", // 20px
      lg: "size-6", // 24px
      xl: "size-8", // 32px
    },
    color: {
      primary: "text-blue-600",
      error: "text-red-600",
      success: "text-green-600",
      muted: "text-gray-400",
      current: "text-current",
    },
  },
  defaultVariants: {
    color: "current",
  },
});

export type IconName = keyof typeof LucideIcons;

type IconVariantProps = VariantProps<typeof iconVariants>;

type IconSizeProps =
  | { size?: IconVariantProps["size"]; customSize?: never }
  | { size?: never; customSize: number };

export type IconProps = Omit<IconVariantProps, "size"> &
  IconSizeProps & {
    name: IconName;
    className?: string;
    strokeWidth?: number;
  };

export const Icon = ({
  name,
  size,
  color,
  className,
  strokeWidth = 2,
  customSize,
}: IconProps) => {
  // Lucide types their exports as LucideIcon
  const IconComponent = LucideIcons[name] as LucideIcons.LucideIcon;

  return (
    <IconComponent
      size={customSize}
      className={iconVariants({
        size: customSize !== undefined ? undefined : (size ?? "sm"),
        color,
        className,
      })}
      strokeWidth={strokeWidth}
    />
  );
};
