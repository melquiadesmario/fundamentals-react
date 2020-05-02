# Fundamentals React JS

This project aims to practice the fundamental concepts of React JS.

Next we go step by step through some basic and fundamental concepts in ReactJS. I will not go into the technology concepts behind ReactJS as a Webpack.

## First Step

In your project directory, through the command line we will start a project using the project created by the Facebook development team to speed up the initial configuration of a web-based project using the following command:

`npx create-react-app my-app`

The only dependencies that were used were the `VSCode` and` Node.js` code editor. You can also use it if you prefer the `Yarn` package manager.

At the moment I am studying I use version `v12.16.1` of Node.js.

After some time with the creation of the project, we enter the project folder through the command line `cd your-project` and start the application with the command `yarn start`.

### Understanding the structure of the automatically created project.

The `index.js` file is the gateway to our application. We need to import `react` to use the `JSX` syntax to write a mixture of `html` and `javaScript` code, also import `react-dom` to render this `html` pseudo code in a `<div>` with `root` id located in the `public` folder within the `index.html` file.

```
  index.js
  
  import React from 'react'
  import ReactDOM from 'react-dom'
  
  import App from './App.jsx'
  
  ReactDOM.render(<App />, document.getElementById('root'))
```

The imported `<App />` component will be rendered in `<div>` `root`, first concept of ReactJS `SPA` (Single Page Application).
