require("dotenv").config();
const logger = require("./logger");

function validateEnv() {
  const required = [
    "DISCORD_TOKEN",
    "CLIENT_ID",
    "PREFIX",
    "LAVALINK_HOST",
    "LAVALINK_PORT",
    "LAVALINK_PASSWORD",
    "EXPRESS_PORT"
  ];

  let missing = required.filter((k) => !process.env[k]);

  if (missing.length) {
    logger.error("Missing environment variables: " + missing.join(", "));
    process.exit(1);
  }
}

validateEnv();

module.exports = {
  DISCORD_TOKEN: process.env.DISCORD_TOKEN,
  CLIENT_ID: process.env.CLIENT_ID,
  PREFIX: process.env.PREFIX || "!",
  LAVALINK_HOST: process.env.LAVALINK_HOST,
  LAVALINK_PORT: Number(process.env.LAVALINK_PORT),
  LAVALINK_PASSWORD: process.env.LAVALINK_PASSWORD,
  EXPRESS_PORT: Number(process.env.EXPRESS_PORT)
};
