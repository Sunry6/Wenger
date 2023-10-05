import React, { useContext, FunctionComponentElement, useState } from 'react'
import cls from 'classnames'
import { MenuContext } from '../menu'
import { MenuItemProps, SubMenuProps } from '../interface'
import Icon from '../../Icon/icon'
import { CSSTransition } from 'react-transition-group'
import Transition from '../../Transition/transition'

export const SubMenu: React.FC<SubMenuProps> = props => {
  const { index, title, children, className } = props
  const context = useContext(MenuContext)
  const openedSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpened =
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false
  const [menuOpen, setMenuOpen] = useState(isOpened)

  const classes = cls('menu-item submenu-item', className, {
    'is-active': context.index === index,
    'is-opened': menuOpen,
    'is-vertical': context.mode === 'vertical',
  })

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  let timer: unknown
  const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
    clearTimeout(timer as number)
    e.preventDefault()
    timer = setTimeout(() => {
      setMenuOpen(toggle)
    }, 300)
  }

  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {}

  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => {
            handleMouse(e, true)
          },
          onMouseLeave: (e: React.MouseEvent) => {
            handleMouse(e, false)
          },
        }
      : {}

  const renderChildren = () => {
    const subMenuClasses = cls('submenu', {
      'menu-opened': menuOpen,
    })

    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>

      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        })
      } else {
        console.error('Warning: Submenu has a child which is not a MenuItem')
      }
    })

    return (
      <>
        <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
          <ul className={subMenuClasses}>{childrenComponent}</ul>
        </Transition>
      </>
    )
  }

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div className="submenu-title" onClick={handleClick} {...clickEvents}>
        {title}
        <Icon icon="angle-down" className="arrow-icon" />
      </div>
      {renderChildren()}
    </li>
  )
}

SubMenu.displayName = 'SubMenu'
export default SubMenu
