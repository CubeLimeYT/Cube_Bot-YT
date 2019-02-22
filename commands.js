const commandHelp = require("./help.js");
const config = require("./config.json");

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
		msg.channel.send(
				{embed: {
				    color: 0x00FF00,
				    title: `Help`,
				    fields: [{
					  name: `${config.prefix}Administration`,
					  value: `Vous donne la page d'Administration`,
					  inline: true
					},
					{
					  name: `${config.prefix}Youtube`,
					  value: `Vous donneras tout concernant le Youtube Game :)`,
					  inline: true
					},
					{
					  name: `${config.prefix}Game`,
					  value: `Vous donneras tout les jeux présent sur le bot`,
					  inline: true
					},
					{
					  name: `${config.prefix}Image`,
					  value: `Vous donneras les commandes pour avoir des images`,
					  inline: true
					},
					{
					  name: `${config.prefix}Invite`,
					  value: `Vous donneras l'invitation du bot`,
					  inline: true
					},
					{
					  name: `${config.prefix}help music`,
					  value: `Vous donne toute les informations sur la commande music`,
					  inline: true
					},
					{
					  name: `${config.prefix}help radio`,
					  value: `Vous donne toute les informations sur la commande radio`,
					  inline: true
					}],
				      timestamp: new Date(),
				    footer: {
				      text: "Fatality support https://discord.me/fatalityteam"
				    }
			      }
			  });
   }
}
