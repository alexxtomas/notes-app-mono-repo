/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks/useField'
import { useErrorMessage } from '../hooks/useErrorMessage'
import Notification from './Notification'
import { Button, Form } from 'react-bootstrap'

const Login = ({ login }) => {
  const navigate = useNavigate()
  const { errorMessage, setErrorMessage } = useErrorMessage()
  const handleLogin = async (event) => {
    event.preventDefault()
    const { target } = event
    const credentails = {
      username: target.username.value,
      password: target.password.value
    }
    login(credentails)
      .then(() => {
        navigate('/notes', { replace: true })
      })
      .catch(() => {
        setErrorMessage('Wrong Credentials')
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
  }

  const usernameInput = useField({ type: 'text' })
  const passwordInput = useField({ type: 'password' })
  return (
    <Form onSubmit={handleLogin}>
      <Form.Group id="username">
        <Notification message={errorMessage} />
        <Form.Control
          {...usernameInput}
          name="username"
          placeholder="Username"
        />
      </Form.Group>
      <Form.Group id="password">
        <Form.Control
          {...passwordInput}
          name="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button type="submit">Login</Button>
    </Form>
  )
}

export default Login
