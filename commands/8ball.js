const Discord = require("discord.js")
const config = require("././config.json");

module.exports.run = async (bot, message, args) => {
    if(!args[1]) retrun message.reply("posez une vrai question");

    
    let answer = ["Oui", "Non", "Essaye plus tard", "Essaye encore", "C'est ton destin", "Impossible", "Sans aucun doute", "Pas d'avis", "Repose ta question"]
    let result = Math.floor((Math.random() * answer.length));
    
    let question = args.slice(1).join(" ");
    
    const ballembed = new Discord.RichEmbed()  
    .setColor("#FF9900") 
    .addField("Question:", question)
    .addField("Réponse", answer[result]) 
    
    message.channel.send({embed: ballembed});
}
module.exports.help = {
  name: "8ball"
}
