const Discord = require("discord.js");

module.exports.run = async (message, bot, args) => {
  let messageBot = args.join(" ");
  message.delete();
  messsage.channel.send(messageBot)

}

module.exports.help = {
  name: "say"
}
