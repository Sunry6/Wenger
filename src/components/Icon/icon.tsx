import React from 'react'
import cls from 'classnames'
import { IconProps } from './interface'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon: React.FC<IconProps> = props => {
  // icon-primary
  const { className, theme, ...restProps } = props

  const classes = cls('icon', className, {
    [`icon-${theme}`]: theme,
  })

  return (
    <>
      <FontAwesomeIcon className={classes} {...restProps} />
    </>
  )
}

export default Icon
