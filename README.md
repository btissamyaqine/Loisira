# tourismPage
## Description:
 **Loisira** une agence de loisirs et touristique proposant des activités dans le monde entier, à des prix imbattables.

## what we use:
- HTML
- CSS
- NuxtJs
- Json
- axios
## setup:
### nuxtjs
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
### json:
- setup json
  - install -g json-server
  - create the json fil
  - serve the json fil by: 
    - json-server nameFil.json --port 4000
- connect Nuxt to Json API
all we use axios 
  - npm install @nuxtjs/axios
  - in nuxt.config.json add the axios module to modules:
    modules: [
    '@nuxtjs/axios',
    ],
  -create index file in store folder then put the code into it include the state, mutations, and actions.
