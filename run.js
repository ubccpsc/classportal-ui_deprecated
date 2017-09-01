
/**
 * Adapted from React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 */

/* eslint-disable no-console, global-require */

const express = require('express');
const http = require('http');
const https = require('https');
const path = require('path');
const app = express();
const config = require('./app/config');
const fs = require('fs');
const del = require('del');
const ejs = require('ejs');
const webpack = require('webpack');


const configFirebase = {
  title: 'UBC ClassPortal',
  url: 'https://portal.cs.ubc.ca',
  project: 'ubc-classportal',
  trackingID: '',
  routes: [
    '/',
    '/login',
    '/register',
  ],
};

const tasks = new Map(); // The collection of automation tasks ('clean', 'build', 'publish', etc.)

function run(task) {
  const start = new Date();
  console.log(`Starting '${task}'...`);
  return Promise.resolve().then(() => tasks.get(task)()).then(() => {
    console.log(`Finished '${task}' after ${new Date().getTime() - start.getTime()}ms`);
  }, (err) => console.error(err.stack));
}

//
// Clean up the output directory
// -----------------------------------------------------------------------------
tasks.set('clean', () => del(['public/dist/*', '!public/dist/.git'], { dot: true }));

//
// Copy ./index.html into the /public folder
// -----------------------------------------------------------------------------
tasks.set('html', () => {
  const webpackConfig = require('./webpack.config');
  const assets = JSON.parse(fs.readFileSync('./public/dist/assets.json', 'utf8'));
  const template = fs.readFileSync('./public/index.ejs', 'utf8');
  const render = ejs.compile(template, { filename: './public/index.ejs' });
  const output = render({ debug: webpackConfig.debug, bundle: assets.main.js, config });
  fs.writeFileSync('./public/index.html', output, 'utf8');
});

//
// Generate sitemap.xml
// -----------------------------------------------------------------------------
tasks.set('sitemap', () => {
  const urls = configFirebase.routes.map((x) => ({ loc: x }));
  const template = fs.readFileSync('./public/sitemap.ejs', 'utf8');
  const render = ejs.compile(template, { filename: './public/sitemap.ejs' });
  const output = render({ config, urls });
  fs.writeFileSync('public/sitemap.xml', output, 'utf8');
});

//
// Bundle JavaScript, CSS and image files with Webpack
// -----------------------------------------------------------------------------
tasks.set('bundle', () => {
  const webpackConfig = require('./webpack.config');
  return new Promise((resolve, reject) => {
    webpack(webpackConfig).run((err, stats) => {
      if (err) {
        reject(err);
      } else {
        console.log(stats.toString(webpackConfig.stats));
        resolve();
      }
    });
  });
});

//
// Build website into a distributable format
// -----------------------------------------------------------------------------
tasks.set('build', () => {
  global.DEBUG = process.argv.includes('--debug') || false;
  return Promise.resolve()
    .then(() => run('clean'))
    .then(() => run('bundle'))
    .then(() => run('html'))
    .then(() => run('sitemap'));
});

//
// Build and publish the website
// -----------------------------------------------------------------------------
tasks.set('publish', () => {
  let count = 0;
  global.HMR = !process.argv.includes('--no-hmr'); // Hot Module Replacement (HMR)
  return run('clean').then(() => new Promise((resolve) => {
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require('./webpack.config');
    const compiler = webpack(webpackConfig);
    // Node.js middleware that compiles application in watch mode with HMR support
    // http://webpack.github.io/docs/webpack-dev-middleware.html
    const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: webpackConfig.stats,
    });
    compiler.plugin('done', (stats) => {
      // Generate index.html page
      const bundle = stats.compilation.chunks.find((x) => x.name === 'main').files[0];
      const template = fs.readFileSync('./public/index.ejs', 'utf8');
      const render = ejs.compile(template, { filename: './public/index.ejs' });
      const output = render({ debug: true, bundle: `/dist/${bundle}`, config });
      fs.writeFileSync('./public/index.html', output, 'utf8');

      if (++count === 1) {

        // configure express app
        app.use(require('connect-history-api-fallback')());
        app.use(webpackDevMiddleware);
        app.use(require('webpack-hot-middleware')(compiler));
        app.use(express.static('public'));
        app.get('*', function(req, res) {
          res.sendFile(path.resolve(__dirname, 'public/index.html'));
        });
        console.log('localHost', config.localHost);

        let sslCert = fs.readFileSync(config.sslCertPath, 'utf8');
        let sslKey = fs.readFileSync(config.sslKeyPath, 'utf8');
        let sslIntCert = fs.readFileSync(config.sslIntCert, 'utf8');

        // create server SSL credentials
        let options = { cert: sslCert, key: sslKey, ca: sslIntCert };

        // config http --> https redirect
        let redirectApp = new express();
        redirectApp.get('*', function(req, res) {
          res.redirect('https://' + req.hostname + req.url);
        });

        // create servers
        let httpServer = http.createServer(redirectApp);
        let httpsServer = https.createServer(options, app);

        // start servers
        httpServer.listen(80, function(err) {
          if (err) { console.log('Error: ' + err)}
          console.log('Started server in production mode on 80 for redirects to 443');
        });

        httpsServer.listen(443, function(err) {
          if (err) { console.log('Error: ' + err)}
          console.log('Started server in production mode on 443');
        });
      }
    });
  }));
});

//
// Build website and launch it in a browser for testing (default)
// -----------------------------------------------------------------------------
tasks.set('start', () => {
  let count = 0;
  global.HMR = !process.argv.includes('--no-hmr'); // Hot Module Replacement (HMR)
  return run('clean').then(() => new Promise((resolve) => {
    const WebpackDevServer = require('webpack-dev-server');
    const webpackConfig = require('./webpack.config');
    const compiler = webpack(webpackConfig);
    // Node.js middleware that compiles application in watch mode with HMR support
    // http://webpack.github.io/docs/webpack-dev-middleware.html
    const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: webpackConfig.stats,
    });
    compiler.plugin('done', (stats) => {
      // Generate index.html page
      const bundle = stats.compilation.chunks.find((x) => x.name === 'main').files[0];
      const template = fs.readFileSync('./public/index.ejs', 'utf8');
      const render = ejs.compile(template, { filename: './public/index.ejs' });
      const output = render({ debug: true, bundle: `/dist/${bundle}`, config });
      fs.writeFileSync('./public/index.html', output, 'utf8');

      if (++count === 1) {
        new WebpackDevServer(compiler, {
          https: true,
          hot: true,
          contentBase: 'public',
          historyApiFallback: true,
          setup: function(app) {
            app.use(webpackDevMiddleware);
            app.use(require('webpack-hot-middleware')(compiler));
            app.use(require('connect-history-api-fallback')());
          },
          https: {
            cert: fs.readFileSync(config.sslCertPath),
            key: fs.readFileSync(config.sslKeyPath)
          }
        })
        .listen(3000, config.localHost, function(err, result) {
          if (err) {
            console.log(err);
          }
          console.log('The Dev server is running on ' + config.localHost + ': ' + 3000);
        })
      }
    });
  }));
});

// Execute the specified task or default one. E.g.: node run build
run(/^\w/.test(process.argv[2] || '') ? process.argv[2] : 'start' /* default */);
