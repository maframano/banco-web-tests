Cypress.Commands.add('FazerLoginComCredenciaisValidas', () => {

  cy.fixture('credenciais').then(credenciais =>{
      cy.get('#username').click().type(credenciais.valida.usuario)
      //cy.get('#username').type('julio.lima')
      cy.get('#senha').click().type(credenciais.valida.senha)
    })  
    cy.get('#login-section > .btn').click()
})   