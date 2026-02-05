describe('Transferencias', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.FazerLoginComCredenciaisValidas(0) 
    })
    it('Deve transferir quando informo dados e valores validos', () => {
      //act

      /*cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
      cy.get('@campo-conta-origem').click()
      cy.get('@campo-conta-origem').contains('João da Silva').click()
      Substituido pela linha abaixo*/
      cy.SelecionarOpçãoNaComboBox('conta-origem' , 'João da Silva')

      /*cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
      cy.get('@campo-conta-destino').click()
      cy.get('@campo-conta-destino').contains('Maria Oliveira').click()
      Substituido pela função SelecionarOpçãoNaComboBox abaixo*/
      cy.SelecionarOpçãoNaComboBox('conta-destino' , 'Maria Oliveira')
      cy.get('#valor').click().type('11')
      cy.contains('button', 'Transferir').click()
      //Assert
      //cy.get('.toast').should('have.text', 'Transferência realizada!')
      cy.VerificarMensagemNoToast('Transferência realizada!')
    })

   it.only('Deve dar erro quando tentar transferir mais que 5000,00 sem token', () => {
     /* cy.SelecionarOpçãoNaComboBox('conta-origem' , 'João da Silva')
      cy.SelecionarOpçãoNaComboBox('conta-destino' , 'Maria Oliveira')
      cy.get('#valor').click().type('5000.01')
      cy.contains('button', 'Transferir').click()
     Substituido pela função RealizarTransferencia abaixo*/
      //Act
      cy.RealizarTransferencia('João da Silva', 'Maria Oliveira', '5000.01')
      //Assert
      cy.VerificarMensagemNoToast('Autenticação necessária para transferências acima de R$5.000,00.')
    }) 

})