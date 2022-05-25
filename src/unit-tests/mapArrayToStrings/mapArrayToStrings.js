const mapArrayToStrings = (arr) => {
  return arr.filter(Number.isInteger).map(String);
};

module.exports = mapArrayToStrings;
