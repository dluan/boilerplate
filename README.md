# Boilerplate Next JS
- Projeto pensado para front-end React que irá se comunicar com back-end graphql.
- Possui suporte a PWA
- Padronização de código: Utilização de Eslint e editor.config

<br>

## Tech

Veja as principais tecnologias utilizadas:

- [Next JS](https://nextjs.org/) - Versão do 12 do framework.
- [Jest](https://jestjs.io/pt-BR/) - Framework para realização de testes.
- [Storybook](https://storybook.js.org/) - Construir componentes, testa-los e documenta-los.
- [Design System](https://stitches.dev/) - Construa seu próprio design system com Stitches.
- [UI components](https://www.radix-ui.com/) - Construção de componentes individualizados e primitivos com Radix
- [Apollo](https://www.apollographql.com/) - Comunicação com graphql
- [Graphql Code Generator](https://www.graphql-code-generator.com/) - Gerar os tipos (typescript) do schema graphql

<br>

## Instalação e início

Recomendado utilizar [Node.js](https://nodejs.org/) até a versão 16.13.2.

Instale os pacotes do projeto:

```sh
yarn
```

Para rodar o projeto em ambiente de desenvolvimento:

```sh
yarn dev
```

<br>

## Novo componente

No projeto há o pacote [plop.js](https://plopjs.com/) para agilizar a criação de um novo componente, execute o seguinte comando:
```sh
yarn generate NomeDoComponente
```

Será gerado dentro da pasta `components`, uma pasta com o nome específicado com os seguintes arquivos:
| Nome do arquivo | Função |
| --------------- | ------ |
| `index.tsx` | Arquivo principal do componente |
| `stories.tsx` | A documentação do componente no storybook |
| `test.tsx` | Arquivo para realização de testes do componente |


<br>

## Graphql

Este template se comunica com Graphql através do Apollo, a configuração está em: `src/graphql/apollo.config.ts`.
Os dados de conexão estão em variáveis de ambiente, você pode customizar a sua maneira.
```sh
const httpLink = new HttpLink({
    uri: process.env.GRAPH_CMS_API_ENDPOINT,
    headers: {
      authorization: process.env.GRAPH_CMS_API_KEY
    }
})
```

### > queries
As queries ficam em `src/graphql/queries`, consta um exemplo em data.ts. 
Essa pasta será utilizada para gerar os tipos das propriedades.


### > code gen
Na raíz do projeto, existe o arquivo `codegen.yml`, nele é preciso atualizar o ENDPOINT do schema graphql.

Sempre que criar ou alterar as queries, é preciso gerar os tipos, para isso execute o seguinte comando:
```sh
yarn gen
```
