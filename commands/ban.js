const Discord = require("discord.js");
const tool = require('../tool.js');

module.exports.run = async (bot, message, args) => {
  if ( !message.member.hasPermission('BAN_MEMBERS')){
		return message.channel.send(`Vous n'avez pas la permission de ban`);
	}
	let memberToBan = message.mentions.members.first();
	if(memberToBan && memberToBan.bannable && (message.member.highestRole.calculatedPosition >
            memberToBan.highestRole.calculatedPosition || message.guild.ownerID == message.author.id)){
		let reason = tool.parseOptionArg('raison', message.content);
	    let days = parseInt(tool.parseOptionArg('days', message.content))

	    let banOptions = {
	    	days : days ? days : 0,
	    	reason: reason ? reason: 'none'
	    };
      
	    memberToBan.ban(banOptions);
	    message.channel.send(` L\'utilisateur ${memberToBan} à bien été bani`);
	    message.guild.owner.createDM().then(channel => {
			channel.send({embed: {
				title: "Ban",
				color: 0x00FF,
				fields:[{
					name: "Utilisateur banni",
					value: `${memberToBan}`,
					inline: true
				},
				{
					name: "Raison",
					value: `${reason}`,
					inline: true
				},
				{
					name: "La personne qui a utliser la commande",
					value: `${message.author}`,
					inline: true
				}]
			}});
		}).catch(message.channel.send(`${message.guild.owner} ne peut recevoir des messages priver`))
	}else{
        message.channel.send(`L\'utilisateur ${memberToBan} ne peut être ban`)
    }
}

module.exports.help = {
  name: "ban"
}
