/* eslint "jsx-quotes": ["error", "prefer-double"] */

import React from 'react'
import { Button } from 'react-bootstrap'
// Lo vamos a utilizar para que sea posible entrar a una nosta especifica con la ruta /notes/:id
import { Link } from 'react-router-dom'

const Note = ({ note, toggleImportance, notLogged }) => {
  const label = note.important ? 'make not important' : 'make important'
  if (notLogged === true) {
    return (
      <td className="note">
        <Link to={`/notes/${note.id}`}>{note.content}</Link>
      </td>
    )
  }
  return (
    <>
      <td className="note">
        <Link to={`/notes/${note.id}`}>{note.content}</Link>
      </td>
      <td>
        <Button onClick={toggleImportance}>{label}</Button>
      </td>
    </>
  )
}

export default Note
