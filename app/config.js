const env = process.env.NODE_ENV || 'development';

// config settings for development environment
const config = {
  localHost: process.env.LOCAL_HOST || 'localhost',
  sslCertPath: '/etc/ssl/certs/portal.cs.ubc.ca.crt',
  sslKeyPath: '/etc/ssl/certs/portal.cs.ubc.ca.key',
  sslIntCert: '/etc/ssl/certs/portal.cs.ubc.ca-cacerts.pem',
  title: 'ClassPortal',
  subtitle: 'UBC CPSC',
  github: 'https://github.com/mksarge/classportal',
  githubEnterprise: 'https://github.ubc.ca',
  appAddress: 'https://localhost:3000',
  apiAddress: 'https://localhost:5000',
  clientId: '7b22a00a9158cd0c43a1',
  teamSize: 2,
  studentsCanDisbandTeams: true,
  githubClientID: process.env.GITHUB_CLIENTID,
  githubclientSecret: process.env.GITHUB_SECRET,
  logo: 'ubc.png',
};

// alternative settings for production environment
if (env === 'production') {
  config.localHost = 'https://portal.cs.ubc.ca';
  config.appAddress = 'https://portal.cs.ubc.ca';
  config.clientId = '97ae59518a9d5cae2550';
  config.apiAddress = 'https://portal.cs.ubc.ca';
}

module.exports = config;