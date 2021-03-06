# elogroup-desafio-tecnico

> :arrow_forward: Um projeto de formulário desenvolvido a partir do framework [Vue.js](https://vuejs.org/)

> Desenvolvido por: [Carlos Henrique da Costa Silva](https://www.linkedin.com/in/carlos-henrique-costa-silva/)

<p align="center">
  <img src="/src/assets/projeto-view.png">
</p>

## :rocket: Tecnologias utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

* [VueJS](https://vuejs.org/)
	* [Vuex](https://vuex.vuejs.org/guide/)
  * [Vue Router](https://router.vuejs.org/)
  * [Vuetify](https://vuetifyjs.com/en/)
  * [VeeValidate](https://logaretm.github.io/vee-validate/)
  * [Vue-the-mask](https://vuejs-tips.github.io/vue-the-mask/)

## :open_file_folder: Hierarquia de arquivos

```
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── assets
│   │   ├── logo.png
│   │   ├── logo.svg
│   │   └── projeto-view.png
│   ├── commons
│   │   ├── components (Componentes para construção de views)
│   │   │   ├── Footer.vue
│   │   │   ├── Navigation.vue
│   │   │   └── ToolBar.vue
│   │   ├── constants
│   │   │   ├── action-types.js
│   │   │   ├── index.js
│   │   │   └── mutation-types.js
│   │   └── store (Configuração de estado dos componentes | Vuex)
│   │       ├── actions.js
│   │       ├── index.js
│   │       ├── mutations.js
│   │       └── state.js
│   ├── plugins (Arquivos de configuração de plugins)
│   │   ├── index.js
│   │   ├── vee-validate.js
│   │   └── vuetify.js
│   ├── views (Views do projeto)
│   │   ├── cadastro
│   │   |   └── Cadastro.vue (Interface de Cadastro com formulário)
│   │   └── comun
│   │       └── Form.vue (Formulário de cadastro)
│   ├── App.vue (Componente de inicialização Vue)
│   ├── main.js (Arquivo de configuração de inicialização do projeto)
│   └── router.js (Arquivo de configuraão de rotas)
├── .gitgnore
├── babel.config.js
├── package-lock.json
├── package.json
└── README.md
```

## :clipboard: Pré-requisitos

Para executar esta aplicação em seu dispositivo no modo de desenvolvimento você precisará ter as seguintes dependências devidamente instaladas e configuradas:

- <a href="https://nodejs.org/en/" target="_blank">NodeJS</a> (Preferencialmente em sua última versão LTS)
- <a href="https://github.com/vuejs/vue-cli" target="_blank">vue-cli</a>

## :fire: Instalação e execução

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## :page_facing_up: Licença 
Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :green_heart: por <strong> Carlos Henrique da Costa Silva </strong> </p>
