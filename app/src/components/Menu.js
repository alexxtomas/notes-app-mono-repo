/* eslint "jsx-quotes": ["error", "prefer-double"] */
/* eslint multiline-ternary: ["error", "never"] */

import React from 'react'
import { BrowserRouter, Link, Routes, Route, Navigate } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Notes from './Notes'
import NoteDetail from './NoteDetail'
import Login from './Login'
import { useUser } from '../hooks/useUser'
import Container from '@material-ui/core/Container'
import { AppBar, Button, IconButton, Toolbar } from '@material-ui/core'

const Menu = () => {
  const { user, logout, login } = useUser()

  return (
    <BrowserRouter>
      <Container>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" />
            <header>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/notes">
                Notes
              </Button>
              <Button color="inherit" component={Link} to="/users">
                Users
              </Button>
              <Button color="inherit">
                {user ? (
                  <Button
                    onClick={() => {
                      logout()
                      window.location.reload()
                    }}
                    color="inherit"
                  >
                    Logout
                  </Button>
                ) : (
                  <Button color="inherit" component={Link} to="/login">
                    Login
                  </Button>
                )}
              </Button>
            </header>
          </Toolbar>
        </AppBar>
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
      </Container>
    </BrowserRouter>
  )
}

export default Menu
