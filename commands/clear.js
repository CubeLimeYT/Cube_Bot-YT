const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu ne peux point utiliser cette commande");
  if(!args[0]) return message.channel.send("Non");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Clear ${args[0]} messages.`).then(msg => msg.delete(2000));
  });
}

module.exports.help = {
  name: "clear"
}
