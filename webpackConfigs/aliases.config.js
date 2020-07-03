const path = require('path');

const aliases = {
  '@thedesignsystem/button': path.resolve(
    __dirname,
    '../components/Button/src/index',
  ),
};

module.exports = { aliases };
