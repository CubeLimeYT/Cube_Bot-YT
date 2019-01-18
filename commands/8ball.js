const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    if(!args[1]) retrun message.reply("posez une vrai question");
    
    let answer = ["Oui", "Non", "Essaye plus tard", "Essaye encore", "C'est ton destin", "Impossinle", "Sans aucun doute", "Pas d'avis", "Repose ta question"]
    let result = Math.floor((Math.random() * answer.lenght));
    
    let question = args.slice(1).join(" ");
    
    message.channel.send(answer[result]);
}
module.exports.help = {
  name: "8ball"
}
