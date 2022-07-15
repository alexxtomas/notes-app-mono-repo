/* eslint multiline-ternary: ["error", "never"] */
/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React, { useRef, useState } from 'react'
import Togglable from './Togglable.js'

const NoteForm = ({ addNote }) => {
  const [newNote, setNewNote] = useState('')
  const togglableRef = useRef()

  const handleChange = (event) => {
    setNewNote(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const noteObject = {
      content: newNote,
      important: false
    }

    addNote(noteObject)
    setNewNote('')

    togglableRef.current.toggleVisibility()
  }

  return (
    <Togglable buttonLabel="Show Create Note" ref={togglableRef}>
      <h3>Create a new note</h3>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Write your note content"
          value={newNote}
          onChange={handleChange}
        />
        <button type="submit">save</button>
      </form>
    </Togglable>
  )
}

export default NoteForm
