# Getting Started with Ajaib frontend user table

Github repository for the [Ajaib Frontend](https://github.com/Juanitoclement/Ajaib-Frontend).

The project is created to snow a table of user with search, pagination, and sort functionalities using an open source random user generator.

API -> https://randomuser.me/documentation

## Steps to run locally

**Clone Repo:**
`git clone git@github.com:Juanitoclement/Ajaib-Frontend.git`

**In root folder, install packages:**
`npm install`

Note: Use node version 14

**Run dev-server:**
`npm run serve`

## Method Used for Better Web Performance
1. Debouncing methods
2. UseMemo -> Memoization
3. Using React.fragments -> avoid additional HTML elements wrappers
4. Tree Shaking -> reduce size bundle e.g lodash.get

## Available Scripts

In the project directory, you can run:

### `npm run serve`

Runs the app in the development mode using webpack 5.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
The coverage folder will appear in the root folder, select icov-report and open `index.html` file to preview the coverage on the browser!

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified using webpack and then using babel as transpiler that converts 'fancy' (ES6+) JS code into 'not-so-fancy' (ES5) ones that browser (front-end) or Node.js (back-end) understands.

### Deployment

The deployment is using Netlify Continuous integration using `main` as the base branch

