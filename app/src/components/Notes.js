/* eslint multiline-ternary: ["error", "never"] */
/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React, { useState } from 'react'
import Note from './Note'
import NoteForm from './NoteForm.js'
import { useNotes } from '../hooks/useNotes'
import { useUser } from '../hooks/useUser'
import Table from 'react-bootstrap/Table'

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
          <button onClick={() => setShowAll(!showAll)}>
            show {showAll ? 'important' : 'all'}
          </button>
        </div>
        <Table striped>
          <tbody>
            {notesToShow.map((note) => (
              <tr key={note.id}>
                <Note
                  note={note}
                  toggleImportance={() => toggleImportanceOf(note.id)}
                />
              </tr>
            ))}
          </tbody>
        </Table>
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
        <Table striped>
          <tbody>
            {notesToShow.map((note) => (
              <tr key={note.id}>
                <Note note={note} notLogged />
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Notes
