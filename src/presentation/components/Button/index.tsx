import React, { ButtonHTMLAttributes } from "react";

import * as S from "./styles";

type ButtonTypes = ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: "smallest" | "small" | "medium" | "large";
  color?: "primary" | "purple" | "transparent";
  icon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  isLoading?: boolean;
} & ButtonTypes;

export default function Button({
  children,
  size = "small",
  color = "primary",
  fullWidth = false,
  icon,
  className = "",
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${S.button({ size, color, fullWidth })} ${className}`}
      {...props}
    >
      {!!children && <span>{children}</span>}
    </button>
  );
}
