import React, { useContext } from 'react'
import { MenuItemProps, SubMenuProps } from '../interface'
import { MenuContext } from '../menu'
import cls from 'classnames'

export const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, title, children, className } = props
  const context = useContext(MenuContext)

  const classes = cls('menu', className, {
    'is-active': context.index === index,
  })

  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>

      if (childElement.type.displayName === 'MenuItem') {
        return childElement
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component',
        )
      }
    })

    return <ul className="submenu">{childrenComponent}</ul>
  }

  return (
    <li key={index} className={classes}>
      <div className="submenu-title">{title}</div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
