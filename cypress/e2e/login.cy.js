describe('Login', () => {
  it('Login com dados validos devem permitir entradas no sistemas', () => {
    //Arrange
    cy.visit('/')

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
})