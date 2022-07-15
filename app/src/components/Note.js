/* eslint "jsx-quotes": ["error", "prefer-double"] */
import { Button, TableCell } from '@material-ui/core'
import React from 'react'
// Lo vamos a utilizar para que sea posible entrar a una nosta especifica con la ruta /notes/:id
import { Link } from 'react-router-dom'

const Note = ({ note, toggleImportance, notLogged }) => {
  const label = note.important ? 'make not important' : 'make important'
  if (notLogged === true) {
    return <Link to={`/notes/${note.id}`}>{note.content}</Link>
  }
  return (
    <>
      <TableCell>
        <Link to={`/notes/${note.id}`}>{note.content}</Link>
      </TableCell>
      <TableCell>
        <Button color="primary" variant="outlined" onClick={toggleImportance}>
          {label}
        </Button>
      </TableCell>
    </>
  )
}

export default Note
