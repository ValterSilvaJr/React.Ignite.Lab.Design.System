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

```bash
  yarn add -D tailwindcss postcss autoprefixer
```

<br>

###### Comando para instalação das dependências [Storybook]
Este comando irá instalar tudo que é necessário para que o storybook funcione.

```bash
  npx sb init --builder @storybook/builder-vite
```

<br>

###### Configurações do Tailwindcss

````bash
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


###### Testes automatizados com storybook
Com Storybook é possível realizar testes automatizados de componentes utilizando o [addon interactions](https://storybook.js.org/addons/@storybook/addon-interactions) em junção com o [Jest](https://jestjs.io/pt-BR/docs/getting-started).

<br>

Instale as dependências como dependências de desenvolvimento

```bash
yarn add -D @storybook/addon-interactions @storybook/jest @storybook/testing-library
```
<br>

Adicione o seguinte addon em ```.storybook/main.js```

```javascript
module.exports = {
  addons: ['@storybook/addon-interactions'],
};
```

<br>

Adicione a seguinte feature em ```.storybook/main.js```
```javascript
module.exports = {
  features: {
    interactionsDebugger: true,
  },
};
```

<br>

###### Mock para testes automatizados utilizando MSW
Addon para simular chamadas api localmente no browser utilizando [MSW](https://mswjs.io/docs/) e o addon [msw-storybook](https://github.com/mswjs/msw-storybook-addon).

<br>

Instale as dependências como dependências de desenvolvimento
```bash
yarn add msw msw-storybook-addon -D
```

<br>

Adicione as seguintes configurações em ```.storybook/preview.js`` ```

```javascript
import { initialize, mswDecorator } from 'msw-storybook-addon';

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];
```

<br>

Exemplo de teste com storybook e msw:

```typescript
import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw';
import { SignIn } from './SignIn'

export default {
  title: 'Pages/SignIn',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    //Mock
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  //Storybook test
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'johndoe@example.com');
    userEvent.type(canvas.getByPlaceholderText('******'), '12345678');

    userEvent.click(canvas.getByRole('button'));
    
    await waitFor(() => {
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument();
    })
  }
}

```

<br>

###### Recomendação de extensões para intellisense e highlighting
* [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss) Syntax highlighting for modern and experimental CSS in VSCode
* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Intelligent Tailwind CSS tooling for VS Code

###### Extras
* [Transform](https://transform.tools/) é uma ferramenta online que converte um código SVG em um componente React.

