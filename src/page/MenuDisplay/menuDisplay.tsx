import React from 'react'
import { Menu } from '../../components/Menu/menu'
import { MenuItem } from '../../components/Menu/components/menuItem'
import { SubMenu } from '../../components/Menu/components/subMenu'

export const MenuDisplay: React.FC = () => {
  return (
    <>
      <Menu defaultIndex={0} mode="horizontal" onSelect={() => {}}>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
        <MenuItem>3</MenuItem>
      </Menu>

      <Menu defaultIndex={0} mode="vertical" onSelect={() => {}}>
        <MenuItem>1</MenuItem>
        <MenuItem>2</MenuItem>
        <MenuItem>3</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>dropdown 1</MenuItem>
          <MenuItem>dropdown 2</MenuItem>
          <MenuItem>dropdown 3</MenuItem>
        </SubMenu>
      </Menu>
    </>
  )
}
