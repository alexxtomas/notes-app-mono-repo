/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React, { useState } from 'react'

// Creamos las distintas paginas
const Home = () => <h1>Home Page</h1>

const Notes = () => <h1>Notes</h1>

const Users = () => <h1>Users</h1>

// Añadimos estilo a los ancore
const inlineStyles = {
  padding: 5
}

const App = () => {
  // Creamos un estado para saber en que pagina estamos
  const [page, setPage] = useState(() => {
    // Extraemos el nombre de la ruta en la que estamos para que esa sea el estado
    const { pathname } = window.location
    const page = pathname.slice(1)
    return page
  })
  // Funcion que extrae el contenido de cada componente depende de en que pagina estemos
  const getContent = () => {
    if (page === 'notes') return <Notes />
    else if (page === 'users') return <Users />
    else return <Home />
  }
  // Nos hace cambiar de pagina clickando en los ancore, es una funcion que recibe otra funcion con el parametro event, prevenimos el cambio de pagina con
  // el preventDefault y añadimos al pathname el nombre segun el estado que tengamos en page osea segun a que pagina quiera navegar el usuario.
  const toPage = (page) => (event) => {
    event.preventDefault()
    window.history.pushState(null, '', `/${page}`)
    setPage(page)
  }

  return (
    <div>
      <header>
        <a href="#" onClick={toPage('home')} style={inlineStyles}>
          Home
        </a>
        <a href="#" onClick={toPage('notes')} style={inlineStyles}>
          Notes
        </a>
        <a href="#" onClick={toPage('users')} style={inlineStyles}>
          Users
        </a>
      </header>
      {getContent()}
    </div>
  )
}

export default App
