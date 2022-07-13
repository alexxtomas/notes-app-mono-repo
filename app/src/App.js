/* eslint "jsx-quotes": ["error", "prefer-double"] */
import noteService from './services/notes'
import React, { useEffect, useState } from 'react'
import Notes from './Notes'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import NoteDetail from './components/NoteDetail'
import Login from './Login'

const Home = () => <h1>Home Page</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 5
}

const App = () => {
  const [notes, setNotes] = useState()
  const [user, setUser] = useState(null)

  useEffect(() => {
    noteService.getAll().then((initialNotes) => setNotes(initialNotes))
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedNoteAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      noteService.setToken(user.token)
    }
  }, [])

  /* Añadimos el link login y renderizamos el componente Login.js , cuando el usuario haga login desaparecera ese link y la ruta en si
  pero si tenemos el usuario hacemos que no se renderice */
  return (
    <BrowserRouter>
      <header>
        <Link to="/" style={inlineStyles}>
          Home
        </Link>
        <Link to="/notes" style={inlineStyles}>
          Notes
        </Link>
        <Link to="/users" style={inlineStyles}>
          Users
        </Link>
        {user ? (
          <em style={inlineStyles}>Logged as {user.name}</em>
        ) : (
          <Link to="/login" style={inlineStyles}>
            Login
          </Link>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<NoteDetail notes={notes} />} />
        <Route path="/users" element={<Users />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
