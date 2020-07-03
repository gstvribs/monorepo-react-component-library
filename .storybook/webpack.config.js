const rules = require('../webpackConfigs/rules.config');
const { aliases } = require('../webpackConfigs/aliases.config');

module.exports = (defaultConfig) => {
  defaultConfig.module.rules = rules;
  defaultConfig.resolve.alias = aliases;

  return defaultConfig;
};
