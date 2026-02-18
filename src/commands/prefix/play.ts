import { Message } from "discord.js";
import validateArgs from "../../utils/validateArgs";
import logCommand from "../../utils/commandLogger";

export default {
  name: "play",
  description: "Play a track or playlist",
  usage: "!play <query>",
  permissions: ["SendMessages", "Connect", "Speak"],

  async run(msg: Message, args: string[], client: any) {
    logCommand("prefix", this.name, msg.author, msg.guild);

    const ok = validateArgs(msg, args, this.usage);
    if (!ok) return;

    const query = args.join(" ");
    const handler = client.handlers.play;
    return handler(msg, query);
  }
};
(Your real play logic will go into the shared handlers/play.ts in Segment 3.)
