describe('Login', () => {
  beforeEach(() => {
      //Arrange
    cy.visit('/')
  })
  it('Login com dados validos devem permitir entradas no sistemas', () => {
    // Act
    cy.get('#username').click().type('julio.lima')
    //cy.get('#username').type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    //Assert
       /*procure um h4 que tenha o texto realizar transferencia e quando
       encontrar, ele deve estar visivel*/
    cy.contains('h4' , 'Realizar Transferência').should('be.visible')
  })

  //teste negativo
  it.only('Login com dados invalidos devem apresentar mensagem de erro', () => {
    // Act
    cy.get('#username').click().type('julio.lima')
    //cy.get('#username').type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()

    //Assert
       /*procure um h4 que tenha o texto realizar transferencia e quando
       encontrar, ele deve estar visivel*/
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})