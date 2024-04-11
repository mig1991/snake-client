const { connect } = require("./client");
const { setupInput } = require("./input");
const { handleUserInput } = require('./input');

console.log("Connecting ...");
const conn = connect();
setupInput(conn); //

module.exports = { handleUserInput };