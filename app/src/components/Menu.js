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
import { Nav, Navbar } from 'react-bootstrap'

const Menu = () => {
  const { user, logout, login } = useUser()
  const inlineStyles = {
    padding: 5
  }
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse>
            <Nav>
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
                <button
                  onClick={() => {
                    logout()
                    window.location.reload()
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" style={inlineStyles}>
                  Login
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
      </div>
    </BrowserRouter>
  )
}

export default Menu
