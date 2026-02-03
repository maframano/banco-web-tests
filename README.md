# banco-web-tests
Testes Automatizados do App Web do Banco
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