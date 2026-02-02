# banco-web-tests
Testes Automatizados do App Web do Banco
No package.json, foi alterado no campo text o item 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  por 
    "scripts": {
    "test": "cypress run",
    "cy:headed": "cypress run --headed",
    "cy:open": "cypress open"
  },
Assim, quando for rodar os cenarios, nao usara mais npx cypress run e sim
npm test
 * Para rodar o "cy:headed": "cypress run --headed", usar o comando npm run cy:headed
  * Para rodar o "cy:open": "cypress open", usar o comando npm run cy:open git status