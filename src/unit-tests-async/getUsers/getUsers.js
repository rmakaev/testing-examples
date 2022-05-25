const axios = require("axios");
const mapArrayToStrings = require("../../unit-tests/mapArrayToStrings/mapArrayToStrings");

const getUsers = async () => {
  try {
    return mapArrayToStrings(await axios.get("https://jsonplaceholder.typicode.com/users").data.map((user) => user.id));
  } catch (error) {
    console.log(error);
  }
};

module.exports = getUsers;
