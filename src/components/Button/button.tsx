import React from 'react'
import cls from 'classnames'
import { BaseButtonProps, ButtonType } from './interface'

export const Button: React.FC<BaseButtonProps> = props => {
  const { btnType, disabled, size, children, href } = props

  // btn, btn-lg, btn-primary
  const classes = cls('btn', {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}
