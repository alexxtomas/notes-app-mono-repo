/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Users from './Users'
import Notes from './Notes'
import NoteDetail from './NoteDetail'

const Menu = () => {
  const inlineStyles = {
    padding: 5
  }
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
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Menu
