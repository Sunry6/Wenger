import React from 'react'
import cls from 'classnames'
import { CSSTransition } from 'react-transition-group'
import { TransitionProps } from './interface'

const Transition: React.FC<TransitionProps> = props => {
  const { children, classNames, animation, wrapper, ...restProps } = props

  return (
    <>
      <CSSTransition
        classNames={classNames ? classNames : animation}
        {...restProps}
      >
        {wrapper ? <div>{children}</div> : children}
      </CSSTransition>
    </>
  )
}

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
}

export default Transition
