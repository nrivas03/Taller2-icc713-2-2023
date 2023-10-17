module.exports = {
  collectCoverageFrom: ['./'],
  coveragePathIgnorePatterns: [
    './src/data/',
    './src/load-games.js',
    './taller-reply.js',
  ],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
};
