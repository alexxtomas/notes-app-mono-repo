import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import loginService from './services/login'
import noteService from './services/notes'

/* Este hook nos va permitir mandar al usuario cuando realice una accion a donde nosotros queramos */
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // Ejecutamos el hook useNavigate que nos permite navegar a traves de las rutas.
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username,
        password
      })

      window.localStorage.setItem('loggedNoteAppUser', JSON.stringify(user))

      noteService.setToken(user.token)

      setUser(user)
      setUsername('')
      setPassword('')

      // Cuanod ya tenemos el usuario hacemos esto para mandar al usuario a la ruta que queramos
      navigate('/notes', { replace: true })
    } catch (e) {
      setErrorMessage('Wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>
  }

  if (user) {
    return <p>User is logged</p>
  }

  return (
    <LoginForm
      username={username}
      password={password}
      handleUsernameChange={({ target }) => setUsername(target.value)}
      handlePasswordChange={({ target }) => setPassword(target.value)}
      handleSubmit={handleLogin}
    />
  )
}

export default Login
