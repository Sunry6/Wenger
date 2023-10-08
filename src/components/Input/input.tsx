import React, { InputHTMLAttributes, ReactElement } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import cls from 'classnames'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'

type valueType = string | ReadonlyArray<string> | number | undefined

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'prefix' | 'suffix'
  > {
  disabled?: boolean
  size?: InputSize
  icon?: IconProp
  prefix?: string | ReactElement | undefined
  suffix?: string | ReactElement | undefined
}

/**
 * Input 输入框 通过鼠标或键盘输入内容，是最基础的表单域的包装。
 *
 * import { Input } from 'wenger'
 *
 * 支持 HTMLInput 的所有基本属性
 */
export const Input: React.FC<InputProps> = props => {
  const { disabled, size, icon, prefix, suffix, ...restProps } = props

  const classes = cls('input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prefix || suffix,
    'input-group-prefix': !!prefix,
    'input-group-suffix': !!suffix,
  })

  const fixControlledValue = (value: valueType) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }

  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value = fixControlledValue(props.value)
  }

  return (
    <div className={classes}>
      {prefix && <div className="input-group-prefix">{prefix}</div>}
      {icon && (
        <div className="icon-wrapper">
          <Icon icon={icon} title={`title-${icon}`} />
        </div>
      )}
      <input className="input-inner" disabled={disabled} {...restProps} />
      {suffix && <div className="input-group-suffix">{suffix}</div>}
    </div>
  )
}

export default Input
