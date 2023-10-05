import React from 'react'
import Button from './button'

import { ComponentMeta, ComponentStory } from '@storybook/react'
import { ButtonSize, ButtonType } from './interface'

const buttonMeta: ComponentMeta<typeof Button> = {
  title: 'Button',
  component: Button,
}

export default buttonMeta

const Template: ComponentStory<typeof Button> = args => {
  return <Button {...args} />
}

export const Default = Template.bind({})
Default.args = {
  children: 'Default Button',
}

export const Large = Template.bind({})
Large.args = {
  size: ButtonSize.Large,
  children: 'Large Button',
}

export const Small = Template.bind({})
Small.args = {
  size: ButtonSize.Small,
  children: 'Small Button',
}

export const Primary = Template.bind({})
Primary.args = {
  btnType: ButtonType.Primary,
  children: 'Primary Button',
}

export const Danger = Template.bind({})
Danger.args = {
  btnType: ButtonType.Danger,
  children: 'Danger Button',
}

export const Link = Template.bind({})
Link.args = {
  btnType: ButtonType.Link,
  children: 'Link Button',
  href: 'https://www.baidu.com',
  target: '_blank',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: 'Disabled Button',
}
