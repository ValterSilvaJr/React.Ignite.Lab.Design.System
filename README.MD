### Projeto criado utilizando o framework [Vite](https://vitejs.dev/guide/) na semana Ignite Lab Design System da [Rocketseat](https://www.rocketseat.com.br/).

<br>

###### Tecnologias utilizadas
* [Storybook](https://storybook.js.org/docs/react/get-started/introduction) para criação da documentação dos componentes da aplicação.
* [Figma](https://www.figma.com/) para criação do design system da aplicação.

<br>

###### Bibliotecas utilizadas para desenvolvimento
* [TailwindCSS](https://tailwindcss.com/docs/installation) para estilização CSS através de classes prontas e/ou personalizáveis.
* [PostCSS](https://postcss.org/) é um ecossistema de plugins personalizados e ferramentas.
* [Autoprefixer](https://postcss.org/) para adicionar prefixos de regras CSS no navegador utilizado.
* [clsx](https://www.npmjs.com/package/clsx) é um utilitário para construção de classes condicionais substituindo os valores do classname do html.
* [Phosphor Icons](https://github.com/phosphor-icons/phosphor-home#phosphor-icons) é uma biblioteca com mais de 1000 opções de ícones para serem usados.
* [Radix UI](https://www.radix-ui.com/docs/primitives/overview/introduction) é uma biblioteca de componentes sem estilização e com foco em [acessibilidade](https://www.w3c.br/pub/Materiais/PublicacoesW3C/cartilha-w3cbr-acessibilidade-web-fasciculo-I.html).

<br>

###### Comando para instalação das dependências [TailwindCSS]
Este comando irá instalar tudo que é necessário para que o tailwindcss funcione.
```
  yarn add -D tailwindcss postcss autoprefixer
```

<br>

###### Comando para instalação das dependências [Storybook]
Este comando irá instalar tudo que é necessário para que o storybook funcione.
```
  npx sb init --builder @storybook/builder-vite
```

<br>

###### Configurações do Tailwindcss
````
  yarn tailwindcss init -p
````
  Este comando irá gerar um arquivo ``` tailwind.config.js ``` na raiz do projeto com o seguinte trecho de código:
  ```javascript
1   /** @type {import('tailwindcss').Config} */
2   module.exports = {
3   content: [],
6   theme: {
7     extend: {},
8   },
9     plugins: [],
10  }
11
  ```
Adicione o trecho de código da linha 3 no arquivo de configuração.
  ```javascript
1  /** @type {import('tailwindcss').Config} */
2   module.exports = {
3   content: ['./src/**/*.tsx'],
6     // restante do código...
7    }
  ```

Fazendo isto o `tailwindcss` passa a entender que você irá apenas estilizar os arquivos que estiverem neste diretório `(linha 3)` e desse tipo de arquivo `(.tsx)`.

<br>

###### Recomendação de extensões para intellisense e highlighting
* [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) Syntax highlighting for modern and experimental CSS in VSCode
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Intelligent Tailwind CSS tooling for VS Code

###### Extras
* [Transform](https://transform.tools/) é uma ferramenta online que converte um código SVG em um componente React.
