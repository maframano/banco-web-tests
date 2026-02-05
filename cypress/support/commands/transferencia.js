Cypress.Command.add('RealizarTransferencia', (contaOrigem, contaDestino, valor) => [
  cy.SelecionarOpçãoNaComboBox('conta-origem' , contaOrigem)
  cy.SelecionarOpçãoNaComboBox('conta-destino' , contaDestino)
  cy.get('#valor').click().type(valor)
  cy.contains('button', 'Transferir').click()

])