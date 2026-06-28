import type { LucideIcon } from "lucide-react";

type FeatureIconProps = {
  icon: LucideIcon;
  size?: number;
  className?: string;
};

export function FeatureIcon({
  icon: Icon,
  size = 22,
  className = "",
}: FeatureIconProps) {
  return (
    <span className={`feature-icon ${className}`.trim()} aria-hidden="true">
      <Icon size={size} strokeWidth={1.75} />
    </span>
  );
}
