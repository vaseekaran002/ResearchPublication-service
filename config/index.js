require("dotenv").config();

module.exports = {
  PORT: process.env.APP_PORT,
  DB: process.env.APP_DB,
};
