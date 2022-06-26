# Teste de Mutação

Católica de Santa Catarina - Centro Universitário </br>
Matéria: Gerenciamento, Configuração e Processos de Software </br>
Professor: Glauco Vinicius Scheffel </br>
Alunos: Caio Miranda Coelho e João Victor Effting

<h2 align="center">Verificando na prática</h2>

Para executar a cobertura de código e teste de mutação citados nesse texto, primeiramente clone esse repositório, executando:

```sh
git clone https://github.com/joaoeffs/teste-mutacao
```

Instale as dependências com o comando `npm install`.

<h3 align="center">Testes</h3>

O teste foi implementado utilizando [jest](https://www.npmjs.com/package/jest). Para rodar os testes execute:

```sh
npm test
``` 

<h3 align="center">Cobertura de código</h3>

Para rodar a cobertura de código, execute:

```sh
npm run test:coverage
``` 

<h3 align="center">Teste de mutação</h3>

O teste de mutação é executado com a biblioteca [stryker](https://www.npmjs.com/package/@stryker-mutator/core) e com o runner do [stryker para jest](https://www.npmjs.com/package/@stryker-mutator/jest-runner). Para rodar o teste de mutação execute:

```sh
npm run test:mutation
```

<h2 align="center">Como foi feito</h2>

Utilizamos a ferramenta do [stryker mutator](https://stryker-mutator.io/) seguindo os passos a passos do [styker no javascript](https://stryker-mutator.io/docs/stryker-js/getting-started/).

Alteramos o arquivo package.json, na parte de script adicionando as seguintes linhas:

```sh
    "test:coverage": "jest --collectCoverage true",
    "test:mutation": "stryker run"
```

E no arquivo stryker.conf ele é criado como um .json, mudamos para .js e modificamos o conteúdo dele também.

Após isso, basta primeiro criar os testes unitários do seu projeto, e logo após rodar os comandos descritos na parte prática. 