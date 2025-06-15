# tourismPage
## Description:
 **Loisira** une agence de loisirs et touristique proposant des activités dans le monde entier, à des prix imbattables.

## What we use:
- HTML
- CSS
- NuxtJs
- JSON Server
- axios
- Mock API
## Setup:
### NuxtJs
```bash
# install dependencies
$ npx create-nuxt-app <project-name>

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
### Mock API with JSON Server:
- setup Json Server
  - install -g json-server
  - create the json fil
  - Run the mock API: 
    - npx json-server nameFil.json --port 4000
```bash
use Axios in a Nuxt.js app to connect to your mock API
```
### Axios 
- npm install @nuxtjs/axios
- in nuxt.config.json add the axios module to modules:
    modules: [
    '@nuxtjs/axios',
    ],
- create index file in store folder then put the code into it include the state, mutations, and actions.
