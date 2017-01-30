const env = process.env.NODE_ENV || 'development';

// config settings for development environment
const config = {
  env,
  title: 'UBC ClassPortal',
  subtitle: 'Advanced Software Engineering',
  github: 'https://github.com/mksarge/classportal',
  appAddress: 'http://localhost:3000',
  apiAddress: 'http://localhost:5000',
  clientId: '7b22a00a9158cd0c43a1',
  teamSize: 2,
  studentsCanDisbandTeams: false,
  githubClientID: process.env.GITHUB_CLIENTID,
  githubclientSecret: process.env.GITHUB_SECRET,
};

// alternative settings for test environment
// if (env === 'test') { }

// alternative settings for production environment
if (env === 'production') {
  config.appAddress = 'https://ubc-classportal.firebaseapp.com';
  config.clientId = '97ae59518a9d5cae2550';
  config.apiAddress = 'http://192.168.1.65:5000';
}

export default config;
