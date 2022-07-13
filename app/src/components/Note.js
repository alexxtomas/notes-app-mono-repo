/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React from 'react'
// Lo vamos a utilizar para que sea posible entrar a una nosta especifica con la ruta /notes/:id
import { Link } from 'react-router-dom'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li className="note">
      <Link to={`/notes/${note.id}`}>{note.content}</Link>
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note
