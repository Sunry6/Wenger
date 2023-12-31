import React, { useContext } from 'react'
import cls from 'classnames'
import { MenuItemProps } from '../interface'
import { MenuContext } from '../menu'

export const MenuItem: React.FC<MenuItemProps> = props => {
  const { index, disabled, className, style, children } = props
  const context = useContext(MenuContext)

  const classes = cls('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  })

  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index)
    }
  }

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )
}

MenuItem.displayName = 'MenuItem'
export default MenuItem
