const Discord = require('discord.js')
const bot = new Discord.Client();
const config = require('./config.json');

let statuses = [`${config.prefix}help`, `ban des caïd`, `https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg`, `Manger`, 'tous vous surveillez', 'être optimisé']
bot.on('ready', () => {
	console.log("Bot lancer!")
	setInterval(function() {
		let status = statuses[Math.floor(Math.random()*statuses.length)];

		bot.user.setPresence({ game: { name: status }, status: 'streaming'});
	}, 10000)
});

bot.on('message', function (message) {
    
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

	if(message.author.bot || message.channel.type != 'text')
		return;

	if(!message.content.startsWith(config.prefix))
		return;
	let cmd =message.content.split(/\s+/)[0].slice(config.prefix.length).toLowerCase();
	getCmdFunction(cmd)(message);

});

bot.on("message", async message => {
  console.log(`${bot.user.username} Is Ready!`);
 let prefix = config.prefix;
  
// Variables
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();

// Return Statements
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return;
    if (message.channel.type === 'dm') return;
	
	if(message.content === prefix + "help"){
		if(message.channel.type === 'dm'){
			message.author.createDM().then(channel => {
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
			})
		}else{
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
	}

// Command Handler
    try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args, prefix);
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} ran the command: ${cmd}`);
    }
});

bot.login(process.env.token)
