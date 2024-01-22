import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  className: string;
}
export function Button({className, title, ...buttonProps}: ButtonProps) {
  return (
    <button
    {...buttonProps}
    className={className}
  >
    <h1 className="welcome brightness-200">{title}</h1>
  </button>
  )
}
