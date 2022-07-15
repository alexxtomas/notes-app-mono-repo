/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React from 'react'
// Lo vamos a utilizar para que sea posible entrar a una nosta especifica con la ruta /notes/:id
import { Link } from 'react-router-dom'
import { Button } from './Button'

const Note = ({ note, toggleImportance, notLogged }) => {
  const label = note.important ? 'make not important' : 'make important'
  if (notLogged === true) {
    return (
      <li>
        <Link to={`/notes/${note.id}`}>{note.content}</Link>
      </li>
    )
  }
  return (
    <li>
      <Link to={`/notes/${note.id}`}>{note.content}</Link>

      <Button onClick={toggleImportance}>{label}</Button>
    </li>
  )
}

export default Note
