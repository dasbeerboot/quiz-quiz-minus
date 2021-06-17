import React from 'react'
import './Button.scss'
import clsx from 'clsx'

export interface ButtonIProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  disabled?: boolean
  onClick?: () => void
}

function Button({ children, className, disabled, onClick }: ButtonIProps): JSX.Element {
  return (
    <button className={clsx('btn', className)} onClick={onClick} type="button" disabled={disabled}>
      {children}
    </button>
  )
}

export default Button
