import React from "react";

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  iconName: string;
}

export function Icon({ iconName = "info", ...props }: IconProps) {
  const { className, ...allProps } = props;
  return (
    <i className={`material-icons ${className}`} {...allProps}>
      {iconName}
    </i>
  );
}
