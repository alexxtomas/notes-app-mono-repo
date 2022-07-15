/* eslint multiline-ternary: ["error", "never"] */
/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React, { useState } from 'react'
import Note from './Note'
import NoteForm from './NoteForm.js'
import { useNotes } from '../hooks/useNotes'
import { useUser } from '../hooks/useUser'
import {
  Button,
  Table,
  TableBody,
  TableContainer,
  TableRow
} from '@material-ui/core'

const Notes = () => {
  // Usamos los cutom hook
  const { user } = useUser()
  const { notes, toggleImportanceOf, addNote } = useNotes()

  const [showAll, setShowAll] = useState(true)

  const notesToShow = showAll ? notes : notes.filter((note) => note.important)

  if (user) {
    return (
      <div>
        <h1>Notes</h1>
        <NoteForm addNote={addNote} />
        <div>
          <Button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </Button>
        </div>
        <TableContainer>
          <Table>
            <TableBody>
              {notesToShow.map((note, i) => (
                <TableRow key={note.id}>
                  <Note
                    key={i}
                    note={note}
                    toggleImportance={() => toggleImportanceOf(note.id)}
                  />
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Notes</h1>
        <div>
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        {notesToShow.map((note) => (
          <Note note={note} key={note.id} notLogged />
        ))}
      </div>
    )
  }
}

export default Notes
