const env = process.env.NODE_ENV || 'development';

// config settings for development environment
const config = {
  env,
  title: 'ClassPortal',
  app_address: 'http://localhost:3000',
  api_address: 'http://192.168.1.65:5000',
  client_id: '7b22a00a9158cd0c43a1',
  team_size: 2,
  students_can_disband_teams: false,
  github: {
    clientID: process.env.GITHUB_CLIENTID,
    clientSecret: process.env.GITHUB_SECRET,
  },
};

// alternative settings for test environment
if (env === 'test') {
  config.app_address = 'http://localhost:3001';
  config.api_address = 'http://localhost:5001';
}

// alternative settings for production environment
if (env === 'production') {
  config.app_address = 'https://classportal-116d2.firebaseapp.com';
  config.api_address = 'http://localhost:5000';
  config.client_id = '97ae59518a9d5cae2550';
}

export default config;
