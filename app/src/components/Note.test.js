import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'This is a test',
    important: true
  }

  const component = render(<Note note={note} />)

  component.getByText('This is a test')
  component.getByText('make not important')

  // Muestra que se esta renderizando
  // component.debug()

  // Ver si un elemento en especifico se ha renderizado
  // const li = component.container.querySelector('li')
  // console.log(prettyDOM(li))
})

test('clicking the button calls event handler once', () => {
  const note = {
    content: 'This is a test',
    important: true
  }

  // Hacemos que se pase por la funcion que se ejecuta en el componente cuando se realiza click en el button
  const mockHandler = jest.fn()

  // Renderizamos el componente
  const component = render(<Note note={note} toggleImportance={mockHandler} />)

  // Selecionamos el button del componente renderizado Note
  const button = component.getByText('make not important')

  // Hacemos que en el componente renderizado se haga click en el button seleccionado previamente
  fireEvent.click(button)

  // Esperamos que al haberse realizado un click en el button se ejecute el mock 1 vez
  expect(mockHandler).toHaveBeenCalledTimes(1)
})
