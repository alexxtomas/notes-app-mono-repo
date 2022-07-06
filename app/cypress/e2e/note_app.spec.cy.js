describe('Note App', () => {
  beforeEach(() => {
    // cy es un objeto de cypress, le indicamos nuesta url de nuestra pagina
    cy.visit('http://localhost:3000')

    // Realizar una request con cypress para limpiar la base de datos de testing
    cy.request('POST', 'http://localhost:3001/api/testing/reset')

    const user = {
      name: 'Alex',
      username: 'atomas',
      password: 'laalexpassword'
    }
    // Añadimos el usuario a la base de datos
    cy.request('POST', 'http://localhost:3001/api/users', user)
  })
  // it asi se declaran los test en moka en vez del test de jest
  it('frontpage can be opened', () => {
    // En nuestra pagina cuando se renderiza sale un titulo con el texto Notes, vamos a comprobar que la pagina lo contiene asi sabremos que la pagina se abre
    cy.contains('Notes')
  })
  it('user can login', () => {
    // Buscamos el Show Login y le hacemos click
    cy.contains('Show Login').click()

    // Coger el objeto con la propiedad placehodler
    cy.get('[placeholder="Username"]').type('atomas')
    cy.get('[placeholder="Password"]').type('laalexpassword')

    // Accedemos al button login mediante la id
    cy.get('#form-login-button').click()

    cy.contains('Create a new note')

    // Con esto le indicamos que queremos recuperar el primer y segundoinput que son los inputs que se despliega al hacer click en Show Login
    // y con el type le indicamos que escriba.
    // cy.get('input:first').type('atomas')
    // cy.get('input:last').type('laalexpassword')
  })

  it('login fails with wrong password', () => {
    cy.contains('Show Login').click()
    cy.get('[placeholder="Username"]').type('atomas')
    cy.get('[placeholder="Password"]').type('wrongPassword')
    cy.get('#form-login-button').click()

    // Para esperar que algo contenga un valor determinado
    cy.get('.error')
      .should('contain', 'Wrong credentials')
      .should('have.css', 'color', 'rgb(255, 0, 0)')
  })

  describe('when logged in', () => {
    beforeEach(() => {
      // Ejecutamos el comando creado en ./support/commands.js
      cy.login({ username: 'atomas', password: 'laalexpassword' })
    })
    it('a new note can be created', () => {
      const noteContent = 'Note created by cypress'
      cy.contains('Show Create Note').click()
      cy.get('[placeholder="Write your note content"]').type(noteContent)
      cy.get('[type="submit"]').click()
      cy.contains(noteContent)
    })

    describe('and a note exists', () => {
      beforeEach(() => {
        cy.createNote({ content: 'This is the first note', important: false })
        cy.createNote({ content: 'This is the second note', important: false })
        cy.createNote({ content: 'This is the third note', important: false })
      })

      it('it can be made important', () => {
        // el as() para crear un selector en el que nos refiramos a ese elemento que nos devuelve
        cy.contains('This is the first note').as('theNote')

        // Con la arroba accedemos al valor creado con el as()
        cy.get('@theNote').contains('make important').click()

        // para debuguear hay que utilizar cy.debug()

        cy.get('@theNote').contains('make not important')
      })
    })
  })
})
