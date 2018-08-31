'use strict'

const tool = require('./tool.js');
const rp = require('request-promise');
const stripInDent = require('strip-indent');
const os = require('os');

module.exports = {
	'ban': ban
}

function ban(msg){
	if ( !msg.member.hasPermission('BAN_MEMBERS')){
		return msg.channel.send(`Vous n'avez pas la permission de ban`);
	}
	let memberToBan = msg.mentions.members.first();
	if(memberToBan && memberToBan.bannable && (msg.member.highestRole.calculatedPosition >
            memberToBan.highestRole.calculatedPosition || msg.guild.ownerID == msg.author.id)){
		let reason = tool.parseOptionArg('raison', msg.content);
	    let days = parseInt(tool.parseOptionArg('days', msg.content))

	    let banOptions = {
	    	days : days ? days : 0,
	    	reason: reason ? reason: 'none'
	    };
	    memberToBan.ban(banOptions);
	    msg.channel.send(` L\'utilisateur ${memberToBan} à bien été bani`)
	}else{
        msg.channel.send(`L\'utilisateur ${memberToBan} ne peut être ban`)
    }
}
