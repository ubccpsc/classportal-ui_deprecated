# DEPRECATION WARNING

This repo is deprecated, you probably want to look at [ClassPortal UI](https://github.com/ubccpsc/classportal-ui).

# ClassPortal

Static React frontend for ClassPortal. Built with help from [React Static Boilerplate][rsb].

This project requires access to a live instance of [ClassPortal API][classapi], configured in `/app/config.js`.

## Table of Contents  

* [Directory Layout](#directory-layout)
* [Getting Started](#getting-started)
* [Develop](#develop)
* [Contribute](#contribute)

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
├── test/                       # Tests
├── utils/                      # Utility and helper classes
│── package.json                # The list of project dependencies and NPM scripts
│── run.js                      # Build automation script, e.g. `node run build`
└── webpack.config.js           # Bundling and optimization settings for Webpack
```

## Getting Started

### Install

```sh
git clone https://github.com/ubccpsc/classportal-ui.git
yarn install
```

### Lint

Eslint and stylelint are used to lint `.js` and `.css` files, respectively.

```sh
yarn run lint
```

### Test

```sh
yarn run test
```

### Build

Webpack is used to bundle all of the js and css assets, and Hot Module Replacement allows live reloading of .js and .css files.

```sh
yarn run start
```


## Contribute

TBD

## Develop


To run the dev build; this will start the server on `https://localhost:3000/`.

```sh
yarn run dev
```


## Notes

[rsb]: <https://github.com/kriasoft/react-static-boilerplate>
[classapi]: <https://github.com/mksarge/classportal-api>
