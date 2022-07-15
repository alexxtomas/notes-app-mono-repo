/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React, { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'
import i18n from '../i18n/index'
import { Button } from '@material-ui/core'

const Togglable = forwardRef(({ children, buttonLabel = 'show' }, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <Button onClick={toggleVisibility}>{buttonLabel}</Button>
      </div>

      <div style={showWhenVisible}>
        {children}
        <Button onClick={toggleVisibility}>
          {i18n.TOGGABLE.CANCEL_BUTTON}
        </Button>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string
}

export default Togglable
