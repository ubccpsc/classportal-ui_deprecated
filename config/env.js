const env = process.env.NODE_ENV || 'development';

// config settings for development environment
const config = {
  env: env,
  title: 'ClassPortal',
  app_address: 'localhost:3000',
  api_address: 'localhost:5000',
  client_id: '97ae59518a9d5cae2550',
  team_size: 2,
  students_can_disband_teams: false,
};

// alternative settings for test environment
if (env === 'test') {
  config.api_address = 'localhost:5001';
  config.app_address = 'localhost:3001';
}

// alternative settings for production environment
if (env === 'production') {
  config.api_address = 'localhost:5002';
  config.app_address = 'localhost:3001';
}

export default config;
