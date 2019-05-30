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
		//let user = message.author
		let helpembed = new Discord.RichEmbed()
	//.setThumbnail(user.avatarURL)
        .setDescription('**Mis à jour le 30/05/2019 à 15h09**')
        .setColor('#e11010')
        .addField(`**Voici les commandes disponible pour le moment**`, `**========================================**`)
        .addField(`<:interdit:583396310745481226> ${config.prefix}**administration** <:interdit:583396310745481226>`, `Vous donne la page d'Administration`)
        .addBlankField(Boolean)
        .addField(`**Commandes disponible a tous**`, `**========================================**`)
        .addField(`<:ampoule:583583402914086913> **${config.prefix}utility** <:ampoule:583583402914086913>`, `Vous donnes les commandes utiles`)
        .addField(`<:youtube:583396381880877160> **${config.prefix}youtube** <:youtube:583396381880877160>`, `Vous donneras tout concernant le Youtube Game`)
        .addField(`<:manette:583396342022275082> **${config.prefix}game** <:manette:583396342022275082>`, `Vous donneras tout les jeux présent sur le bot`)
        .addField(`<:photo:583587918900363264> **${config.prefix}imge** <:photo:583587918900363264>`, `Vous donneras les commandes pour avoir des images`)
        .addBlankField(Boolean)
        .addField(`**Pour m'ajouter à ton serveur**`, `**========================================**`)
        .addField(`<:lien:583587396386422784> **${config.prefix}invite** <:lien:583587396386422784>`, `Vous donneras l'invitation du bot en Mp`)
        .addBlankField(Boolean)
        .addField(`**Commandes Music/Radio**`, "**========================================**")
        .addField(`<:music:583396423676985515> **${config.prefix}help music** <:music:583396423676985515> `, `Vous donne toute les informations sur la commande music`)
        .addField(`<:poste:583396951266033699> **${config.prefix}help radio** <:poste:583396951266033699> `, `Vous donne toute les informations sur la commande radio`)
        .addBlankField(Boolean)
        .addField(`**Pour rejoindre la team, c'est très simple**`, "**========================================**")
        .addField(`Rend toi sur le serveur **💀FataLity Team💀** (utilise la commande **${config.prefix}Invite**)`, `Essaie de parler avec le Fondateur ou Co-Fondateur pour pouvoir rejoindre`)
        .addField(`:warning: **${config.prefix}help+** :warning:`, `Utilisez cette commmande si vous trouvez des bugs ou si vous avez besoin d'aide`)
	.setFooter(`En réponse à ${message.author.username}#${message.author.discriminator}`)
	.setTimestamp()

		msg.channel.send(helpembed);
   }
}
