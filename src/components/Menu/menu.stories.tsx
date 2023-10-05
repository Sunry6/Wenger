import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Menu from './menu'
import { MenuItem } from './components/menuItem'
import { SubMenu } from './components/subMenu'

const menuMeta: ComponentMeta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  subcomponents: { SubMenu: SubMenu, Item: MenuItem },
  args: {
    defaultIndex: '1',
  },
}
export default menuMeta

const Template: ComponentStory<typeof Menu> = args => {
  return (
    <Menu {...args}>
      <MenuItem>menu item 1</MenuItem>
      <MenuItem>menu item 2</MenuItem>
      <MenuItem>menu item 3</MenuItem>
      <SubMenu title="submenu">
        <MenuItem>submenu item 1</MenuItem>
        <MenuItem>submenu item 2</MenuItem>
        <MenuItem>submenu item 3</MenuItem>
      </SubMenu>
    </Menu>
  )
}

export const Default = Template.bind({})
Default.storyName = '默认Menu'

export const Vertical = Template.bind({})
Vertical.args = {
  defaultIndex: '1',
  mode: 'vertical',
}
Vertical.argTypes = {
  defaultIndex: {
    control: 'color',
    description: 'normal test',
  },
}
Vertical.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '0f0' },
    ],
  },
}
Vertical.storyName = '纵向menu'

export const Horizontal = Template.bind({})
Horizontal.args = {
  defaultIndex: '1',
  mode: 'horizontal',
}
Horizontal.storyName = '横向menu'
