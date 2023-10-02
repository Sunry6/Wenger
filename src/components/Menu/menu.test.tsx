import React from 'react'
import {
  RenderResult,
  fireEvent,
  render,
  screen,
  cleanup,
} from '@testing-library/react'
import { MenuProps } from './interface'
import { Menu } from './menu'
import { MenuItem } from './components/menuItem'

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
  mode: 'vertical',
}

const testVerProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
  mode: 'vertical',
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu
      className={props.className}
      defaultIndex={0}
      mode={props.mode}
      onSelect={props.onSelect}
    >
      <MenuItem index={0}>active</MenuItem>
      <MenuItem index={1} disabled={true}>
        disabled
      </MenuItem>
      <MenuItem index={2}>test active</MenuItem>
    </Menu>
  )
}

let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement

describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps))
    menuElement = wrapper.getByTestId('test-menu')
    activeElement = wrapper.getByText('active')
    disabledElement = wrapper.getByText('disabled')
  })

  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('menu test')
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('menu-item')
  })

  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('test active')
    fireEvent.click(thirdItem)
    // expect(thirdItem).toHaveClass('is-active')
    expect(activeElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).toHaveBeenCalledWith(2)

    fireEvent.click(disabledElement)
    expect(disabledElement).not.toHaveClass('is-active')
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })

  it('should render vertical mode when mode is set to vertical', () => {
    // 清空wrapper
    cleanup()
    const wrapper = render(generateMenu(testVerProps))
    menuElement = wrapper.getByTestId('test-menu')
    expect(menuElement).toHaveClass('menu-vertical')
  })
})
