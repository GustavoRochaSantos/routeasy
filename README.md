# RoutEasy Fullstack Challenge
This is my test to join your team, enjoy!

<img src="https://github.com/GustavoRochaSantos/routeasy/blob/master/challenge.png">

Briefing can be found in https://github.com/RoutEasy/challenge-fullstack

### Installation

Execute the command above in terminal, to clone the project
```sh
$ git clone https://github.com/GustavoRochaSantos/routeasy.git
```

Install the dependencies and devDependencies and start the server.

#### Backend

```sh
$ cd routeasy/backend 
$ yarn or npm install
$ yarn dev or nom run dev
```
#### Frontend

```sh
$ cd routeasy/frontend 
$ yarn or npm install
$ yarn start
```

### Production Dependencies

| Package | Link |
| ------ | ------ |
| ReactIcons | https://www.npmjs.com/package/react-icons |
| styled-components | https://www.npmjs.com/package/ |
| leaflet | https://www.npmjs.com/package/leaflet |
| react-leaflet | https://www.npmjs.com/package/react-leaflet |
| polished | https://www.npmjs.com/package/polished |
| react-toastify | https://www.npmjs.com/package/react-toastify |
| yup | https://www.npmjs.com/package/yup |
| axios | https://www.npmjs.com/package/axios |
| @unform/core | https://www.npmjs.com/package/@unform/core |
| @unform/web | https://www.npmjs.com/package/@unform/web |
| @googlemaps/google-maps-services-js | https://www.npmjs.com/package/@googlemaps/google-maps-services-js |



### Development Dependencies

| Package | Link |
| ------ | ------ |
| Typescript | https://www.npmjs.com/package/typescript |
| ESLint | https://www.npmjs.com/package/eslint |
| Prettier | https://www.npmjs.com/package/prettier |


### Database
One of goals was make a mongodb, all configurations is in db.tsx file.

### Project Structure
```bash
./routeasy
├── backend
│   ├── docker-compose.yml
│   ├── .env
│   ├── .gitignore
│   ├── jest.config.js
│   ├── package.json
│   ├── prettier.config.js
│   ├── src
│   │   ├── database
│   │   │   └── db.ts
│   │   ├── errors
│   │   │   └── AppError.ts
│   │   ├── model
│   │   │   └── Delivery
│   │   │       └── interface.ts
│   │   ├── resource
│   │   │   └── delivery.ts
│   │   ├── routes
│   │   │   ├── deliveries.ts
│   │   │   └── index.ts
│   │   ├── server.ts
│   │   └── services
│   │       └── createDeliveryServices.ts
│   ├── tsconfig.json
│   └── yarn.lock
├── frontend
│   ├── .eslintignore
│   ├── .eslintrc.json
│   ├── .gitignore
│   ├── package.json
│   ├── prettier.config.js
│   ├── public
│   │   ├── assets
│   │   │   ├── favicon-16x16.png
│   │   │   └── pin.svg
│   │   └── index.html
│   ├── README.md
│   ├── src
│   │   ├── assets
│   │   │   ├── pin.svg
│   │   │   └── routeasy-complex.png
│   │   ├── components
│   │   │   ├── Button
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.tsx
│   │   │   ├── Header
│   │   │   │   ├── index.tsx
│   │   │   │   └── style.tsx
│   │   │   └── Input
│   │   │       ├── index.tsx
│   │   │       └── style.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── model
│   │   │   └── Delivery
│   │   │       └── interface.tsx
│   │   ├── pages
│   │   │   └── Main
│   │   │       ├── Formulario
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.tsx
│   │   │       ├── index.tsx
│   │   │       ├── Listagem
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.tsx
│   │   │       ├── Map
│   │   │       │   ├── index.tsx
│   │   │       │   └── style.tsx
│   │   │       └── style.tsx
│   │   ├── react-app-env.d.ts
│   │   ├── services
│   │   │   └── api.tsx
│   │   └── utils
│   │       └── getValidationErrors.tsx
│   ├── tsconfig.json
│   └── yarn.lock

```
