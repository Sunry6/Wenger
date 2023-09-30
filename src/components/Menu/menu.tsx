import React, { createContext, useState } from 'react'
import cls from 'classnames'
import { IMenuContext, MenuItemProps, MenuProps } from './interface'

export const MenuContext = createContext<IMenuContext>({ index: 0 })

export const Menu: React.FC<MenuProps> = props => {
  const { className, mode, style, children, defaultIndex, onSelect } = props
  const [currentActive, setCurrentActive] = useState(defaultIndex)

  const classes = cls('menu-item submenu-item', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  })

  const handleClick = (index: number) => {
    setCurrentActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }

  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement =
        child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component',
        )
      }
    })
  }

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal',
}
