const commandHelp = require("./help.js");
const config = require("./config.json");

module.exports = {
   'help': help
}

function help(msg){
	let args = msg.content.split(/\s+/).slice(1);
	
	if(msg.content != args){
		msg.channel.send(
				{embed: {
				    color: 0x00FF00,
				    title: `Help`,
				    fields: [{
					  name: "C*Administration",
					  value: `Vous donne la page d'Administration`,
					  inline: true
					},
					{
					  name: "C*Youtube",
					  value: `Vous donneras tout concernant le Youtube Game :)`,
					  inline: true
					},
					{
					  name: "C*Game",
					  value: `Vous donneras tout les jeux présent sur le bot`,
					  inline: true
					},
					{
					  name: "C*Image",
					  value: `Vous donneras les commandes pour avoir des images`,
					  inline: true
					},
					{
					  name: "C*Invite",
					  value: `Vous donneras l'invitation du bot`,
					  inline: true
					}],
				      timestamp: new Date(),
				    footer: {
				      text: "Fatality support https://discord.gg/W2uMAsZ"
				    }
			      }
			  });	
	}	

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
		msg.channel.send();
   }
}
