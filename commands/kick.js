const Discord = require("discord.js");
const tool = require('../tool.js');

module.exports.run = async (bot, message, args) => {

if ( !message.member.hasPermission('KICK_MEMBERS')){
		return message.channel.send(`Vous n'avez pas la permission de kick`);
	}
    
	let memberToKick = message.mentions.members.first();
	if(memberToKick && memberToKick.kickable && (message.member.highestRole.calculatedPosition >
            memberToKick.highestRole.calculatedPosition || message.guild.ownerID == message.author.id)){
		let reason = tool.parseOptionArg('raison', msg.content);

	    let kickOptions = {
	    	reason: reason ? reason: 'none'
	    };
	    memberToKick.kick(kickOptions);
	    message.channel.send(` L\'utilisateur ${memberToKick} à bien été kick`);
		message.guild.owner.createDM().then(channel => {
			channel.send({embed: {
				title: "Kick",
				color: 0x00FF,
				fields:[{
					name: "Utilisateur kick",
					value: `${memberToKick}`,
					inline: true
				},
				{
					name: "Raison",
					value: `${reason}`,
					inline: true
				},
				{
					name: "La personne qui a utliser la commande",
					value: `${msg.author}`,
					inline: true
				}]
			}});
		})
	}else{
        message.channel.send(`L\'utilisateur ${memberToKick} ne peut être kick`)
    }

}
module.exports.help = {
  name: "kick"
}
