// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', (user) => {
    cy.get('input[name="j_username"]').click().type(user.username)
    expect(user.username, 'email was set').to.be.a('string').and.not.be.empty
     cy.get('input[name="j_password"]').click().type(user.password)
     if (typeof user.password !== 'string' || !user.password) {
      throw new Error('Missing password value, set using CYPRESS_password=...')
    }
     cy.get('button[name="button1"]').click({force:true})
     cy.wait(6000)

   
    
   })

