const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (message, bot, args) => {
  let args = message.content.split(" ").slice(1);

		if(!args){
			let HelpEmbed = new Discord.RichEmbed()
			.setDescription("Voici la description")
			.setColor('#1CFF1C')
			.addField('C*Administration', "Vous donne la page d'Administration")
			.addField('C*Youtube', 'Vous donneras tout concernant le Youtube Game :) ')
			.addField('C*Game', 'Vous donneras tout les jeux présent sur le bot')
			.addField('C*Image', 'Vous donneras les commandes pour avoir des images')
			.addField('C*Invite', "Vous donneras l'invitation du bot")
			.setFooter('Support Server : https://discord.gg/pcfYDMK ')
        		message.channel.send(HelpEmbed);
		}
		if(args === "music"){
      			message.channel.send("HElp music");
		}

}

module.exports.help = {
  name: "help"
}
