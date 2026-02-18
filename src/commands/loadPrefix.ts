import { Client } from "discord.js";
import fs from "fs";
import path from "path";
import logger from "../logger";

export default function loadPrefixCommands(client: Client, prefix: string) {
  const base = path.join(__dirname, "prefix");
  if (!fs.existsSync(base)) return;

  let count = 0;

  for (const file of fs.readdirSync(base)) {
    if (!file.endsWith(".ts") && !file.endsWith(".js")) continue;

    const cmd = require(path.join(base, file)).default;
    if (!cmd?.name) continue;

    client.prefixCommands.set(cmd.name.toLowerCase(), cmd);
    count++;
  }

  logger.success(`Loaded ${count} prefix commands (prefix = ${prefix})`);
}
