const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      if(message.guild.roles.find(r => r.name === "Say")){
            if (message.member.roles.some(role => role.name === '👑Fondateur👑')){
                  const sayMessage = args.join(" ");
                  message.delete().catch();
                  let mesg = await message.channel.send(sayMessage);
                  mesg.react('👌');
            }else{
                        message.reply("vous n'avez pas le role say pour utiliser cette commande");

            }
      }else{
                  let owner = message.guild.owner;
                  message.channel.send(`${owner} il n'y a pas de role comportant le nom: Say pour autoriser certaines personnes à utiliser cette commande`);
            }

}

module.exports.help = {
  name: "say"
}
