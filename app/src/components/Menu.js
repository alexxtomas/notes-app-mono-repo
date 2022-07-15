/* eslint "jsx-quotes": ["error", "prefer-double"] */
/* eslint multiline-ternary: ["error", "never"] */

import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Notes from './Notes'
import NoteDetail from './NoteDetail'
import Login from './Login'
import { useUser } from '../hooks/useUser'
import { StyledLink } from './StyledLink'
import { Button } from './Button'
const Menu = () => {
  const { user, logout, login } = useUser()

  return (
    <BrowserRouter>
      <header>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/notes">Notes</StyledLink>
        <StyledLink to="/users">Users</StyledLink>
        {user ? (
          <Button
            onClick={() => {
              logout()
              window.location.reload()
            }}
          >
            Logout
          </Button>
        ) : (
          <StyledLink variant="bold" to="/login">
            Login
          </StyledLink>
        )}
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login login={login} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Menu
