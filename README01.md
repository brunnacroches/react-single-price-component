# Getting Started with Create React App

### `npx create-react-app my-app --template=typescript`

### `npm install`

### `APAGAR `

SRC

- App.css
- App.test
- index.css
- logo.svg

### Configurar o editorconfig

- com o mouse botão direito `Generate .editorconfig`
- Função: eles vão padronizar o código

### Configurar o prettier

- CTRL + P = >prettier
  -"Create configuration file" -`ANTES`
  {
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120
  } -`DEPOIS`
  {
  "tabWidth": 2,
  "useTabs": false,
  "singleQuote": true,
  "printWidth": 120

}

### INSTALAR BIBLIOTECAS DE ESTILIZAÇÃO E ROTEAMENTO

### react router dom `npm install react-router-dom `

- para parametrizar as rotas do projeto para conseguir manipular e fazer com que o usuario transite entre uma pagina e outra.

https://v5.reactrouter.com/web/guides/quick-start

### INSTALAR BIBLIOTECAS DE ESTILIZAÇÃO

### styled-components `npm install --save styled-components`

- https://styled-components.com/

---

### styled-system `npm i styled-system styled-components`

https://styled-system.com/getting-started/

- da algumas funçoes, algumas constantes que a gente consegue customizar e passar parametros
  customizáveis em nossos componentes

---

### INSTALAR BIBLIOTECAS DE DESENVOLVIMENTO

`npm install -D @types/styled-system @types/styled-components @types/react-dom`

- são tipagens das bibliotecas em TypeScript
  -como a gente esta no ambiente em TypeScript é muito importante essas tipagens pq é muito comum
  a comunidade o pessoal subir o pacote da biblioteca e outro pacote da tipagem para ficar mais leve porque
  nem todo mundo trabalha com TypeScript

---

### CRIANDO AS PASTAS

-PUBLIC
-index.html

- SRC

# -ASSETS

    -icons
    -img

# -COMPONENTES

    -Title
      -index.tsx
      -style.css

# -CONTAINERS

    -NFTCard
      -index.tsc
      -style.css

# -PAGES

    -Home
      -index.tsc
      -style.css

# -TYPES

    -index.d.ts

-global.css
-index.tsx

---

# -COMPONENTES

uma parte do código que é utilizado e não tem lógica nenhuma
é como se fosse os dedos da mãos

# -CONTAINERS

o containers renderiza os componentes
é como se fosse as mãos pq ele junta todos os dedos(componentes)

# -PAGES

tem controle total da aplicação
requisão para o Back End

# -TYPES

# -GLOBAL.CSS / INDEX.TSX
