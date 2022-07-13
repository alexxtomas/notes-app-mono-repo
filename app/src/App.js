/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React, { useEffect, useState } from 'react'
import Notes from './Notes'
import noteService from './services/notes'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import NoteDetail from './components/NoteDetail'

const Home = () => <h1>Home Page</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
  padding: 5
}

const App = () => {
  /* Añadimos la ruta dinamica /notes/:id en routes el cual con el link puesto en el Componente Note cuando hagamos click en una nota
  nos llevara a /notes/idDeLaNota y alli poder renderizar solo esa nota  y creamos el componente NoteDetail.js para mostrar la informacion
  de dicha nota */

  /* Creamos el state para guardar las notas para luego pasarselas al NoteDetail que renderizara la nota correspondiente segun la id
  que haya en la ruta dinamica /notes/:id */
  const [notes, setNotes] = useState()

  // Obtenemos las notas haciendo un get al servidor
  useEffect(() => {
    noteService.getAll().then((initialNotes) => setNotes(initialNotes))
  }, [])

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
        <Route path="/notes/:id" element={<NoteDetail notes={notes} />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
