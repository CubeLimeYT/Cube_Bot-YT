const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(args[2] === "help") return message.channel.send()
    if(!args[1]) retrun message.reply( posez une vrai question)
    
    let answer = ["Oui", "Non", "Essaye plus tard", "Essaye encore", "C'est ton destin", "Impossinle", "Sans aucun doute", "Pas d'avis", "Repose ta question"]
    let result = Math.floor((Math.random() * answer.lenght));
    
    let question = args.slice(1).join(" ");
    
    let 8ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#FF9900")
    .addField("Question :", question)
    .addField("Réponse:", answer[result])
    
    message.channel.send(8ballemebed)
}
module.exports.help = {
  name: "8ball"
}
