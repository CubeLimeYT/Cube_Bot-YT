const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
      
      if(message.guild.roles.find(r => r.name === "Say")){
            let RMember = message.member.guild.roles;
            if(RMember.find(r => r.name === "Say")){
                  const sayMessage = args.join(" ");
                  message.delete().catch();
                  message.channel.send(sayMessage);
            }else{
                  message.reply("vous n'avez pas le role say pour utiliser cette commande");
            }
      
      }else{
            let owner = message.guild.owner;
            message.channel.send(`${owner} il n'y a pas de role comportant le nom: Say`);
      }

}

module.exports.help = {
  name: "say"
}
