import Link, { LinkProps } from "next/link";
import React from "react";

interface ButtonProps extends LinkProps {
  title: string;
  className: string;
}
export function RedirectButton({ className, title, ...linkProps }: ButtonProps) {
  return (
    <Link
      {...linkProps}
    className={className}
    >
      <h1 className="welcome brightness-200">{title}</h1>
    </Link>
  );
}
