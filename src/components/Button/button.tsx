import React from 'react'
import cls from 'classnames'
import { ButtonProps, ButtonType } from './interface'

/**
 * 页面中最常用的按钮元素，适合于完成特定的交互，支持HTML Button和a链接
 * ### 引用方法
 * ```js
 * import { Button } from 'wenger'
 * ```
 */
export const Button: React.FC<ButtonProps> = props => {
  const { btnType, className, disabled, size, children, href, ...restProps } =
    props

  // btn, btn-lg, btn-primary
  const classes = cls('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  })

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    )
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
}

export default Button
