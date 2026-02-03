describe('Login', () => {
  beforeEach(() => {
      //Arrange
    //cy.visit('/')
    cy.visit(Cypress.env('URL'))
    cy.screenshot('após visitar pagina')
  })
  it('Login com dados validos devem permitir entradas no sistemas', () => {
    // Act
    cy.fixture('credenciais').then(credenciais =>{
      cy.get('#username').click().type(credenciais.valida.usuario)
      //cy.get('#username').type('julio.lima')
      cy.get('#senha').click().type(credenciais.valida.senha)
    })  
    cy.screenshot('após preencher dados validos')
    cy.get('#login-section > .btn').click()
    cy.screenshot('após clicar no botão entrar')

    //Assert
       /*procure um h4 que tenha o texto Realizar Transferência e quando
       encontrar, ele deve estar visivel*/
    cy.contains('h4' , 'Realizar Transferência').should('be.visible')
  })

  //teste negativo
  it('Login com dados invalidos devem apresentar mensagem de erro', () => {
    // Act
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      //cy.get('#username').type('julio.lima')
      cy.get('#senha').click().type(credenciais.invalida.senha)
      cy.contains('button', 'Entrar').click()
    })
    //Assert
       /*procure um h4 que tenha o texto realizar transferencia e quando
       encontrar, ele deve estar visivel*/
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
    //cy.get('.toast').should('have.text', 'Sucess')- teste para aparecer os screenshots
  })
})