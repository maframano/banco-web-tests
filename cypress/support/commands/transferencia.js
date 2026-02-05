Cypress.Commands.add('realizarTransferencia', (contaOrigem, contaDestino, valor) => {
  cy.SelecionarOpçaoNaComboBox('conta-origem' , contaOrigem)
  cy.SelecionarOpçaoNaComboBox('conta-destino' , contaDestino)
  cy.get('#valor').click().type(valor)
  cy.contains('button', 'Transferir').click()

})