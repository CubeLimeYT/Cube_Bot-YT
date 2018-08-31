'use strict'

const tool = require('./tool.js');
const rp = require('request-promise');
const stripInDent = require('strip-indent');
const os = require('os');

module.exports = {
	'ban': ban,
	'kick': kick
}

function ban(message){
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
		})
	}else{
        message.channel.send(`L\'utilisateur ${memberToBan} ne peut être ban`)
    }
}
function kick(msg){
	if ( !msg.member.hasPermission('KICK_MEMBERS')){
		return msg.channel.send(`Vous n'avez pas la permission de kick`);
	}
    
	let memberToKick = msg.mentions.members.first();
	if(memberToKick && memberToKick.kickable && (msg.member.highestRole.calculatedPosition >
            memberToKick.highestRole.calculatedPosition || msg.guild.ownerID == msg.author.id)){
		let reason = tool.parseOptionArg('raison', msg.content);

	    let kickOptions = {
	    	reason: reason ? reason: 'none'
	    };
	    memberToKick.kick(kickOptions);
	    msg.channel.send(` L\'utilisateur ${memberToKick} à bien été kick`)
	}else{
        msg.channel.send(`L\'utilisateur ${memberToKick} ne peut être kick`)
    }
}
