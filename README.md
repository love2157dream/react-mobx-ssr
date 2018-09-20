React+Mobx server side render boilerplate with ES2015, Express.js, and Webpack

[![Build Status](https://travis-ci.org/antonfisher/react-express-webpack.svg?branch=master)](https://travis-ci.org/antonfisher/react-express-webpack)
[![bitHound Dependencies](https://www.bithound.io/github/antonfisher/react-express-webpack/badges/dependencies.svg)](https://www.bithound.io/github/antonfisher/react-express-webpack/master/dependencies/npm)
[![GitHub license](https://img.shields.io/github/license/antonfisher/react-express-webpack.svg)](https://github.com/antonfisher/react-express-webpack/blob/master/LICENSE)

## Technologies

- React (v16) + Redux (v3) + React Router (v4)
- Express.js (v4) as production and development server
- Webpack 4 (production and development configurations)
- SCSS support (+ sanitize.css included)
- ES2015
- Antd v3.6.2

## Features
- Server side render(ssr)
- Code splitting
- Preconfigured router
- React Antd UI example theme
- preconfigured eslint and Prettier code formatter
- React Hot Loader
- Linux/MacOS/Windows

## Usage

### Installation
```bash
git clone https://github.com/Tecode/react-mobx-ssr.git
cd react-mobx-ssr
npm install Or yarn

# remove boilerplate git references
rm ./.git
```

### Scripts
```bash
# run development mode
npm run dev

# run production mode
npm run build
npm start

# run prettier
npm run prettier

# run lint
npm run lint

# run on a different port
HTTP_PORT=3001 npm run dev
```

## License
MIT License. Free use and change.