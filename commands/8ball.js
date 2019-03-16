const Discord = require("discord.js")
const config = require("../config.json");

module.exports.run = async (bot, message, args) => {
    let tte = args.join(" ")
    if(!tte){
        return message.reply(" posez une vrai question")
    };
    
    var replys = [
        "Oui",
        "Non",
        "Je ne sais pas",
        "Peut être",
        "Essaye plus tard", 
        "Essaye encore", 
        "C'est ton destin", 
        "Impossible", 
        "Sans aucun doute", 
        "Insh'allah comme on dit", 
        "Seulement si t'es abonné a CuCuBe x)"
        ];
    
    let reponse = (replys[Math.floor(Math.random() * replys.length)])
    
    var bembed = new Discord.RichEmbed()
    .setDescription(":8ball: 8ball")
    .addField("Question", tte)
    .addField("Réponse", reponse)
    message.channel.sendEmbed(bembed);
}
module.exports.help = {
  name: "8ball"
}
