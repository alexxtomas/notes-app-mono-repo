import React from 'react'
// Es un hook de react-router-dom que permite extaer los parametos del path cuando son dinamicos
import { useParams } from 'react-router-dom'

const NoteDetail = ({ notes }) => {
  console.log(notes)
  const { id } = useParams()
  const note = notes.find((n) => n.id === id)

  if (!note) return null
  return (
    <div>
      <h2>{note.content}</h2>
      <div>{note?.user?.name}</div>
      <div>
        <strong>{note.important ? 'important' : ''}</strong>
      </div>
    </div>
  )
}

export default NoteDetail
