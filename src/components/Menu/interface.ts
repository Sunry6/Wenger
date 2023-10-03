type MenuMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectedIndex: string) => void

export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallBack
  children?: React.ReactNode
  defaultOpenSubMenus?: string[]
}

export interface MenuItemProps {
  index?: string
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface IMenuContext {
  index: string
  onSelect?: SelectCallBack
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}

export interface SubMenuProps {
  index?: string
  title: string
  className?: string
  children?: any
}
