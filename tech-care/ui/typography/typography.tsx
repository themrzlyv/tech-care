import React from "react";

type Props = {
  children: React.ReactNode;
  variant:
    | "menu-title"
    | "secondary"
    | "secondary-bold"
    | "card-title"
    | "inner-title"
    | "inner-title-medium"
    | "card-title-large";
  className?: string;
};

export function Typography({ children, variant, className }: Props) {
  const variants = {
    "menu-title": "font-bold text-sm text-black-main",
    "card-title": "font-extrabold text-2xl text-black-main",
    "card-title-large": "font-extrabold text-3xl text-black-main",
    secondary: "font-normal text-sm text-black-light",
    "inner-title-medium": "font-medium text-sm text-black-main",
    "inner-title": "font-bold text-lg text-black-main",
    "secondary-bold": "font-bold text-sm text-black-main",
  };

  const classes = variants[variant];

  return (
    <div className={`${classes} ${className}`}>{children}</div>
  );
}
