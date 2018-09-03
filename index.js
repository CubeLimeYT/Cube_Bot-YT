const Discord = require('discord.js')
const { get } = require("snekfetch"); 
const tool = require("./tool.js");
const cmds = require("./commands.js");
const config = require("./config.json");
const bot = new Discord.Client()

//instance
let statuses = [`${config.prefix}help`, `ban des caïd`, `https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg`, `Roblox`]
bot.on('ready', () => {
	setInterval(function() {
		let status = statuses[Math.floor(Math.random()*statuses.length)];

		bot.user.setPresence({ game: { name: status }, status: 'online'});
	}, 10000)
});


bot.on('message', function (message) {
    if (message.content === config.prefix + 'help') {
        let testEmbed = new Discord.RichEmbed()
        .setDescription("Voici la description")
        .setColor('#1CFF1C')
        .addField('C*Administration', "Vous donne la page d'Administration")
        .addField('C*Youtube', 'Vous donneras tout concernant le Youtube Game :) ')
        .addField('C*Game', 'Vous donneras tout les jeux présent sur le bot')
        .addField('C*Image', 'Vous donneras les commandes pour avoir des images')
        .addField('C*Invite', "Vous donneras l'invitation du bot")
        .setFooter('Support Server : https://discord.gg/pcfYDMK ')
        message.channel.send(testEmbed);
    }

    if (message.content === config.prefix + 'Administration') {
	  if ( !message.member.hasPermission('ADMINISTRATOR')){
		message.react("<:troll:479719554826633236>")
		  .then(console.log)
		  .catch(console.error);
		 message.channel.send(`Vous n'avez pas la permission d'acceder au pannel administrateur car vous n'avez pas un rôle avec l'option administrateur`);
		  
	  }else{
        let adminEmbed = new Discord.RichEmbed()
        .setDescription('Voici la liste des commandes pour les administrateur')
        .setColor('#6GFH6D')
        .addField('C*server', 'Vous donneras les infos sur le serveur')
	      .addField('C*Ban', 'Pour bannir des gens de façon permanente')
	      .addField('C*Kick', 'Pour kicker des gens :D')
        .setFooter('Voila')
        message.channel.send(adminEmbed);
      }
    }

    if (message.content === config.prefix + 'Image') {
        let catEmbed = new Discord.RichEmbed()
        .setDescription('Voici les commandes possible pour obtenir des images :wink: ')
        .setColor('#6D5G1R')
        .addField("C*Icat", "Vous donneras des images aléatoires de chat :joy: ")
        .addField("C*Idog", "Vous donneras des images de chien :joy: ")
        .addField("C*Inude","Vous enverras un nude en privé :wink: ")
        .setFooter("Si tu as des suggestions d'images a rajouter fait moi en part  ")
        message.channel.send(catEmbed);
    }


    if (message.content === config.prefix + 'Server') {
        let server_name = message.guild.name
        let server_size = message.guild.members.size
        message.channel.send('Serveur : ' + server_name + '\nPersonnes : ' + server_size);
    }

    if (message.content === config.prefix + 'Youtube') {
        let youtubeEmbed = new Discord.RichEmbed()
        .setDescription("Pense à t'abonner et à liké")
        .setColor('#5DKK6L')
        .addField('Voilà la chaîne de Cube_Lime YT', 'https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg')
        .addField('Viens aussi sur son serveur discord', 'https://discord.gg/pcfYDMK')
	 .addField("Tu peut également l'ajouter en ami sur youtube", "https://youtu.be/join/ct-Py9DY3VEGjY")
        .setFooter("Allez c'est gratuit pour le moment")
        message.channel.send(youtubeEmbed);
    }

    if (message.content === config.prefix + 'Invite') {
        let InviteEmbed = new Discord.RichEmbed()
        .setDescription("Voici le lien pour m'inviter dans ton serveur :wink: ")
        .setColor('#5EGT5B')
        .addField('https://discordapp.com/oauth2/authorize?client_id=479022698303848459&scope=bot&permissions=2146958847',"Voilà c'est cadeau :wink: ")
        .setFooter('Voila si tu ne comprend vraiment rien contacte moi ==> Cube_Lime YT#3607')
        message.channel.send(InviteEmbed);
    }

    if (message.content === config.prefix + 'Inude') {
        message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKegUKwwAgFeEROseg6eJzgCTyvosxi58u-IRmHZ8TWygrGgxl")
        message.reply("éspèce de cochon :joy: ")
    }
	if(message.content === 'Bonjour')
		message.reply('Ousalamalekoum salam et bienvenue sur ma chaîne youtube')

	if(message.content === 'bonjour')
		message.reply("Yop tout le monde Squeezie")

	if(message.content === 'Bonsoir')
		message.reply('Bonsoir à toi')

	if(message.content === 'bonsoir')
		message.reply('Clap Over')

	if(message.content === 'Bonne nuit')
		message.reply('Bonneuhhhh nuit les petits')

	if(message.content === 'bonne nuit')
		meesage.reply('oé vas te coucher x) ')
	
	if(message.content === 'Aurevoir')
		message.reply('A plousss')

	if(message.content === 'aurevoir')
		message.reply('Hasta la vista xD revien demain :D')
	
	if(message.content === 'bn')
		message.reply("Moi aussi j'aime les BN <:troll:479719554826633236>")

	if(message.content === '@Steven-ADev#1843') 
		message.reply("Vous appeller le grand maitre. Patientez a un moment il viendra ....,");

	
    if (message.content === config.prefix + '8Iperles') {
        number = 5;
        imageNumber = Math.floor (Math.random() * (number - 1 +1)) + 1;
        message.channel.send ( {files: ["./imagesperle/" + imageNumber + ".JPG"]} ) 
    }
	if(message.content.startsWith(config.prefix + 'Icat')) {
		try {
			get('https://aws.random.cat/meow').then(res => {
				const embed = new Discord.RichEmbed()
				.setImage(res.body.file)
				return message.channel.send({embed});
			});
		} catch(err) {
			return message.channel.send(error.stack);
		}
	}
	if(message.author.bot || message.channel.type != 'text')
		return;

	if(!message.content.startsWith(config.prefix))
		return;
	let cmd =message.content.split(/\s+/)[0].slice(config.prefix.length).toLowerCase();
	getCmdFunction(cmd)(message);

});

   

bot.login(process.env.token);

function getCmdFunction(cmd){
	const COMMANDS = {
		'ban': cmds.ban,
		'kick': cmds.kick
	}
	return COMMANDS[cmd] ? COMMANDS[cmd] : () => {};
}
