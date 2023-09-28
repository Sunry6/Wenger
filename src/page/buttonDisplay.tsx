import React from 'react'
import { Button } from '../components/Button/button'
import { ButtonSize, ButtonType } from '../components/Button/interface'

export const ButtonDisplay: React.FC = () => {
  return (
    <>
      <Button className='custom'>Default</Button>
      <Button btnType={ButtonType.Primary}>Primary</Button>
      <Button btnType={ButtonType.Danger}>Danger</Button>
      <Button btnType={ButtonType.Link} target='_blank' href='https://www.google.com'>
        Link
      </Button>

      <Button size={ButtonSize.Large}>Large</Button>
      <Button size={ButtonSize.Small}>Small</Button>

      <Button disabled={true}>Button Disabled</Button>
      <Button disabled={true} btnType={ButtonType.Link} href='https://www.google.com'>
        Link Disabled
      </Button>
    </>
  )
}
