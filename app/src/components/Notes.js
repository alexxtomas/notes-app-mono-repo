/* eslint multiline-ternary: ["error", "never"] */
/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React, { useState } from 'react'
import Note from './Note'
import NoteForm from './NoteForm.js'
import { useNotes } from '../hooks/useNotes'
import { useUser } from '../hooks/useUser'

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
        <ul>
          {notesToShow.map((note, i) => (
            <Note
              key={i}
              note={note}
              toggleImportance={() => toggleImportanceOf(note.id)}
            />
          ))}
        </ul>
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
        <ul>
          {notesToShow.map((note, i) => (
            <Note note={note} key={i} notLogged />
          ))}
        </ul>
      </div>
    )
  }
}

export default Notes
