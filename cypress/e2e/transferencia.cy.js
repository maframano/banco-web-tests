describe('Transferencias', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.fixture('credenciais').then(credenciais =>{
         cy.get('#username').click().type(credenciais.valida.usuario)
         cy.get('#senha').click().type(credenciais.valida.senha)
      })  
      cy.get('#login-section > .btn').click()   
    })
    it('Deve transferir quando informo dados e valores validos', () => {
      cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
      cy.get('@campo-conta-origem').click()
      cy.get('@campo-conta-origem').contains('João da Silva com saldo de R$ 15011.00 (Ativa)').click()

      cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
      cy.get('@campo-conta-destino').click()
      cy.get('@campo-conta-destino').contains('Maria Oliveira com saldo de R$ 22989git .00 (Ativa)').click()

      cy.get('#valor').click().type('11')
      cy.contains('button', 'Transferir').click()

      cy.get('.toast').should('have.text', 'Transferência realizada!')
    })

})