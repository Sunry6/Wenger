import React, { useState } from 'react'
import cls from 'classnames'
import Button from '../../components/Button/button'
import { ButtonSize, ButtonType } from '../../components/Button/interface'
import Transition from '../../components/Transition/transition'

export const TransitionDisplay: React.FC = () => {
  const [show, setShow] = useState(false)

  return (
    <>
      <Button
        size={ButtonSize.Large}
        btnType={ButtonType.Primary}
        onClick={() => setShow(!show)}
      >
        Toggle
      </Button>

      <Transition in={show} timeout={300} animation="zoom-in-right" wrapper>
        <div>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Transition>
    </>
  )
}
