# ClassPortal

Static React frontend for ClassPortal. Built with help from [React Static Boilerplate][rsb].

This project requires access to a live instance of [ClassPortal API][classapi], configured in `/config/env.js`.

## Table of Contents  

* [Directory Layout](#directory-layout)
* [Getting Started](#getting-started)
* [Develop](#develop)
* [Contribute](#contribute)

<a name="directory-layout"/>
## Directory Layout

```sh
.
├── app/                        # React app lives here!
│   ├── index.js                # React application entry point
│   ├── ajax.js                 # Http request methods
│   ├── auth.js                 # Auth methods for restricted routes
│   ├── components/             # Shared or generic UI components
│   │   ├── Footer/             # Shared Footer component
│   │   ├── Header/             # Shared Header component
│   │   └── ...                 # etc.
│   └── pages/                  # React components for web pages
│       ├── admin/              # Admin page
│       ├── login/              # Login page
│       └── ...                 # etc.
├── config/                     # Environment settings
├── node_modules/               # 3rd-party libraries and utilities
├── public/                     # Static files such as favicon.ico etc.
│   ├── dist/                   # The folder for compiled output
│   └── ...                     # etc.
├── test/                       # Unit and integration tests
├── utils/                      # Utility and helper classes
│── package.json                # The list of project dependencies and NPM scripts
│── routes.json                 # This list of application routes
│── run.js                      # Build automation script, e.g. `node run build`
└── webpack.config.js           # Bundling and optimization settings for Webpack
```

<a name="getting-started"/>
## Getting Started

### Install

```sh
git clone https://github.com/mksarge/classportal.git
npm install
```

### Lint

Eslint and stylelint are used to lint `.js` and `.css` files, respectively.

```sh
npm run lint
```

### Test

```sh
npm run test
```

### Build

Webpack is used to bundle all of the js and css assets, and Hot Module Replacement allows live reloading of .js and .css files.

```sh
npm run start

```

<a name="develop"/>
## Develop

under construction

<a name="contribute"/>
## Contribute

under construction

[rsb]: <https://github.com/kriasoft/react-static-boilerplate>
[classapi]: <https://github.com/mksarge/classportal-api>
