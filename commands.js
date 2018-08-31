'use strict'

const tool = require('./tool.js');
const rp = require('request-promise');
const stripInDent = require('strip-indent');
const os = require('os');

module.exports = {
	'ban': ban
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
	    message.channel.send(` L\'utilisateur ${memberToBan} à bien été bani`)
	}else{
        message.channel.send(`L\'utilisateur ${memberToBan} ne peut être ban`)
    }
}
