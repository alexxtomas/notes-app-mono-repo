// Añadimos un comando para hacer login en el que le pasamos el username y el password. Para cada vez que tengamos que hacer login no tengamos
// que repetir codigo
Cypress.Commands.add('login', ({ username, password }) => {
  // Hacer el login sin la UI
  cy.request('POST', 'http://localhost:3001/api/login', {
    username,
    password
  }).then((res) =>
    localStorage.setItem('loggedNoteAppUser', JSON.stringify(res.body))
  )

  cy.visit('http://localhost:3000')
})

Cypress.Commands.add('createNote', ({ content, important }) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3001/api/notes',
    body: { content, important },
    headers: {
      Authorization: `Bearer ${
        JSON.parse(localStorage.getItem('loggedNoteAppUser')).token
      }`
    }
  })
  cy.visit('http://localhost:3000')
})
