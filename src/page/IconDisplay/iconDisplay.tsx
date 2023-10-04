import React from 'react'
import Icon from '../../components/Icon/icon'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas)

export const IconDisplay: React.FC = () => {
  return (
    <>
      <Icon icon="coffee" theme="primary" size="10x" />
    </>
  )
}
