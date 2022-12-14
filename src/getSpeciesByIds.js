const data = require('../data/zoo_data');

const { species } = data;

const getSpeciesByIds = (...ids) => species
  .filter(({ id }) => ids.find((elementId) => elementId === id));
module.exports = getSpeciesByIds;
