# banco-web-tests
# Projeto de Testes Automatizados com Cypress

## Objetivo
Este projeto tem como objetivo demonstrar como automatizar testes de aplicações web utilizando o Cypress. A automação cobre cenários de login e transferência bancária, utilizando boas práticas como organização do código com custom commands e geração de relatórios automatizados.

## Componentes do Projeto
- **Cypress:** Framework principal para automação dos testes end-to-end.
- **Custom Commands:** Comandos personalizados para facilitar e organizar a escrita dos testes, localizados em `cypress/support/commands/`.
- **cypress-mochawesome-reporter:** Gera relatórios em HTML dos testes executados, facilitando a análise dos resultados.
- **Fixtures:** Dados de teste organizados em arquivos JSON, como `credenciais.json`.
- **Testes:** Os cenários de teste estão em `cypress/e2e/`, separados por funcionalidades (login, transferência).

## Pré-requisitos
- Node.js instalado
- npm instalado
- API e aplicação web em execução:
  - [banco-api](https://github.com/juliodelimas/banco-api)
  - [banco-web](https://github.com/juliodelimas/banco-web)

## Instalação
1. Clone este repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Certifique-se de que a API e a aplicação web estejam rodando localmente.

## Execução dos Testes
- Para executar os testes em modo interativo:
  ```bash
  npx cypress open
  ```
- Para executar os testes em modo headless e gerar o relatório:
  ```bash
  npx cypress run --reporter cypress-mochawesome-reporter
  ```
- O relatório HTML será gerado em `cypress/reports/html/index.html`.

## Estrutura dos Testes
- **Login:**
  - Testa login com credenciais válidas e inválidas.
  - Valida mensagens de sucesso e erro.
- **Transferência:**
  - Testa o fluxo de transferência bancária entre contas.

## Custom Commands
Os comandos personalizados estão em `cypress/support/commands/` e incluem:
- `FazerLoginComCredenciaisValidas`: Realiza login com dados válidos.
- `VerificarMensagemNoToast`: Valida mensagens exibidas em toasts.
- Outros comandos para facilitar ações comuns nos testes.

## Relatórios
Os relatórios são gerados automaticamente após a execução dos testes e podem ser acessados em `cypress/reports/html/index.html`.

## Referências
- [Documentação Cypress](https://docs.cypress.io/)
- [cypress-mochawesome-reporter](https://github.com/cypress-io/cypress-mochawesome-reporter)

---

Dúvidas ou sugestões? Abra uma issue ou entre em contato!
No package.json, foi alterado no campo text o item 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  por 
   "scripts": {
    "test": "cypress run --env URL=http://localhost:4000/",
    "test-QA": "cypress run --env URL=http:qa-enviroment.juliodelima.com.br",
    "test-prod": "cypress run --env URL=http:www.juliodelima.com.br",
    "cy:headed": "cypress run --headed",
    "cy:open": "cypress open",
     "//": "ler as alterações do campo test em README.md"
  },
Assim, quando for rodar os cenarios, nao usara mais npx cypress run e sim
npm test
 * Para rodar o "cy:headed": "cypress run --headed", usar o comando npm run cy:headed
 * Para rodar o "cy:open": "cypress open", usar o comando npm run cy:open git status
 * Para rodar o "cypress run --env URL=http:www.juliodelima.com.br" usar o npm run test-prod vai apontar para o site em produção