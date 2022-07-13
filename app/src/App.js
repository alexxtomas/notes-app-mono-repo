/* eslint "jsx-quotes": ["error", "prefer-double"] */
import React from 'react'
import Notes from './Notes'

/* Es un componente que tiene react-router que nos permite sustituir los ancores teniendo ya toda la logica para cambiar la url, no haria falta
 por ejemplo hacer el history.pushState y demas */

/* Para utilizar los componentes de react router necesitamos envolverlos en un Router, como estamos realizando esto en el navegador necesitamos
el BrowserRouter */

// Con Routes y Route lo que hacemos es renderizar el contenido del componente correspondiente dependiendo de la ruta en la que estemos
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

// Creamos las distintas paginas
const Home = () => <h1>Home Page</h1>

const Users = () => <h1>Users</h1>

// Añadimos estilo a los ancore
const inlineStyles = {
  padding: 5
}

const App = () => {
  // El Link es lo que sustituye al ancore en vez de href utiliza to=""
  // Envolvemos la aplicacion con BrowserRouter

  /* En vez de utilizar el getContent() utilizamos el componente Route con el que con el atributo path="" le indicamos que cuando este
  en ese path renderice el componente correspondiente  gracias a esto podemos eliminar el estado y el getContent()
  El componente Route tiene que estar envuelto con el componente Routes con el path le indicamos en que path queremos que se renderice el
  contenido y en element el indicamos el componente con el contenido a renderizar */

  /* SOLO EN VERSIONES 5 PARA ABAJO DE REACT-ROUTER-DOM EN ESTA VERSION EL COMPONENTE SWITCH NO EXISTE
  Con el componente switch indicamos que solo renderice con el primer path que haga match por que si no puede hacer match con mas de uno */
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
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
