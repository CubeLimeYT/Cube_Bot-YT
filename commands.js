const commandHelp = require("./help.js");
const config = require("./config.json");
const Discord = require("discord.js");

module.exports = {
   'help': help
}

function help(msg){
	let args = msg.content.split(/\s+/).slice(1);

	let helpStr;
	if(args.length == 1){
		if(args[0].charAt(0) == config.prefix) //['L', 'efjofefe']
			args[0] = args[0].slice(1);
		helpStr = commandHelp[args[0]];
	    
	}
	if(helpStr){
		helpStr(msg);
  }
	else {
		let helpembed = new Discord.RichEmbed()
		.setDescription('Voici toutes les commandes a votre dispositions')
        	.setColor('#6D5G1R')
        	.addField(`${config.prefix}Administration`, `Vous donne la page d'Administration`)
		.addField(`${config.prefix}Utility`, `Vous donnes les commandes utiles`
        	.addField(`${config.prefix}Youtube`, `Vous donneras tout concernant le Youtube Game :)`)
        	.addField(`${config.prefix}Game`, `Vous donneras tout les jeux présent sur le bot`)
        	.addField(`${config.prefix}Image`, `Vous donneras les commandes pour avoir des images`)
        	.addField(`${config.prefix}Invite`, `Vous donneras l'invitation du bot`)
        	.addField(`${config.prefix}help music`, `Vous donne toute les informations sur la commande music`)
        	.addField(`${config.prefix}help radio`, `Vous donne toute les informations sur la commande radio`)
        	.setFooter("Si tu as des suggestions d'images a rajouter fait moi en part  ")

		msg.channel.send(helpembed);
   }
}
