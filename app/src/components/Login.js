/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useField } from '../hooks/useField'
import { useErrorMessage } from '../hooks/useErrorMessage'
import Notification from './Notification'

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
    <form onSubmit={handleLogin}>
      <div>
        <Notification message={errorMessage} />
        <input {...usernameInput} name="username" placeholder="Username" />
      </div>
      <div>
        <input {...passwordInput} name="password" placeholder="Password" />
      </div>
      <button>Login</button>
    </form>
  )
}

export default Login
