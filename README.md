## Table of Contents

- [Short Description](#short-description)
- [Project Dependencies](#project-dependencies)
- [Project Structure](#folder-structure)
- [Available Scripts](#available-scripts)


## Short Description
The objective of the project is to create a basic Express backend exposing a REST API


## Project Dependencies

Development and production dependencies:

```
  "scripts": {
    "start": "node --require 'babel-register' src/index.js",
    "watch": "nodemon",
    "test": "NODE_ENV=test mocha --compilers js:babel-register --timeout 10000 tests/"
  },
  "devDependencies": {
    "babel-preset-env": "^1.6.1",
    "babel-register": "^6.26.0",
    "chai": "^4.1.2",
    "cheerio": "^1.0.0-rc.2",
    "got": "^8.3.0",
    "mocha": "^5.0.4",
    "nodemon": "^1.14.12"
  },
  "dependencies": {
    "babel-cli": "^6.26.0",
    "body-parser": "^1.18.2",
    "cors": "^2.8.4",
    "dotenv": "^5.0.1",
    "express": "^4.16.3",
    "morgan": "^1.9.0"
  }
```

Api development using Postman

### Testing

npm i --save-dev got chai cheerio mocha


## Project Structure



```
express-rest-app
    |- node_modules
        ...

    .gitignore
    package-lock.json
    package.json
    README.md

```


## Available Scripts

In the project directory, you can run:

### `npm run start`

Runs the app in the development mode. Open [http://localhost:9000](http://localhost:9000) to view it in the browser.
