module.exports = {
  require: ['dotenv/config'],
  inlineDiffs: true,
  timeout: '120s',
  exit: true,
};

process.env.NODE_ENV = 'test';
