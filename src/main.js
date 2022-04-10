const { version } = require("../package.json")
const { Client } = require("./utils/class/Client");

exports.version = version;
exports.Client = Client;