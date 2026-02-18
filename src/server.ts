const express = require("express");
const logger = require("./logger");
const config = require("./config");

module.exports = function startExpress(client, lavalink) {
  const app = express();

  app.get("/", (req, res) => {
    res.json({
      status: "ok",
      discord: client.ws.status,
      lavalink: lavalink?.nodes?.size || 0
    });
  });

  app.listen(config.EXPRESS_PORT, () => {
    logger.success("Express listening on port " + config.EXPRESS_PORT);
  });
};
