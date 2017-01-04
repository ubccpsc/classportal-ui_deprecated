# ClassPortal UI

Frontend client for [ClassPortal][classportal].

Built with
- [React][react]
- [Babel][babel]
- [Webpack][webpack] with [Hot Module Replacement][hmr]

## System overview

Some docs will need to be provided to the system to set it up, these include:

* Student list; this will be a CSV with these fields: ```<NAME>,<STUDENT NUMBER>,<CS LAB ID>```
* Deliverable list; this will be a JSON file that will look just like an array of model.Deliverable objects.

## Github requirements

- Sign up for an organization in Github.
- Make sure you set the "Default repository permission" in the Organization setting page to "none".
- GithubProjectController has some hard coded fields for the organization
  - these should change in the future, but if they haven't, make sure they are set for your org

To send/recieve data; go to the portal directory on the non-server machine:

To Send:
```rsync -auvp HOST:/PATHTOPORTAL/priv/ priv/```

To Receive:
```rsync -auvp priv/ HOST:PATHTOPORTAL/priv/```

## Install

```sh
$ git clone https://github.com/mksarge/classportal-ui.git
$ npm install
```

## Lint

```sh
// lint js
npm run eslint

// lint css
npm run stylelint

// lint all
npm run lint
```

## Test

```sh
// run tests
npm run test
```

## Run

```sh
// run dev build with [Hot Module Reloading][hmr] of .js and .css files
$ npm run start
```

## Deploy

ClassPortal can be easily deployed to [Firebase][firebase]. Make sure your firebase app is configured in `.firebaserc` and `run.js`.

```sh
// deploy
$ npm run publish
```

### License

MIT

[classportal]: <https://classportal-116d2.firebaseapp.com/login>
[react]: <https://facebook.github.io/react/>
[babel]: <https://babeljs.io/>
[webpack]: <https://webpack.github.io/>
[hmr]: <https://webpack.github.io/docs/hot-module-replacement.html>
[firebase]: <https://firebase.google.com/>
