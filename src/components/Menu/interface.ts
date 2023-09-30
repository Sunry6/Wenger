type MenuMode = 'horizontal' | 'vertical'
type SelectCallBack = (selectedIndex: number) => void

export interface MenuProps {
  defaultIndex?: number
  className?: string
  mode: MenuMode
  style?: React.CSSProperties
  onSelect?: SelectCallBack
  children?: React.ReactNode
}

export interface MenuItemProps {
  index?: number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export interface IMenuContext {
  index: number
  onSelect?: SelectCallBack
}

export interface SubMenuProps {
  index?: number
  title: string
  className?: string
  children?: any
}
