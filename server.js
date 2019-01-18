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
});

bot.on("message", async message => {
  console.log(`${bot.user.username} Is Ready!`);
	
if(message.content.startsWith(config.prefix + "restart")) {
	if(message.author.id !== "372099632173416449") return message.reply('Vous n\'êtes pas le propriétaire du bot');
        message.channel.send('**Redémarrage**').then(msg => {
            setTimeout(() => {
               msg.edit('**Redémarrage..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Redémarrage...**');
            },2000);
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            bot.destroy();
            bot.login(process.env.token);
        },3000);
          setTimeout(() => {
               msg.edit('Bot redémarré ✅');
            },2000);
        });
        
    }
	
	if (message.content === config.prefix + 'Image'){
		
	if(message.channel.type === 'dm'){
       	 	message.author.createDM().then(channel => {
		let catEmbed = new Discord.RichEmbed()
        	.setDescription('Voici les commandes possible pour obtenir des images :wink: ')
        	.setColor('#6D5G1R')
        	.addField("C*Icat", "Vous donneras des images aléatoires de chat :joy: ")
        	.addField("C*Idog", "Vous donneras des images de chien :joy: ")
        	.addField("C*Inude","Vous enverras un nude en privé :wink: ")
        	.setFooter("Si tu as des suggestions d'images a rajouter fait moi en part  ")
        		channel.send(catEmbed)
		});
	}else{
		let catEmbed = new Discord.RichEmbed()
        	.setDescription('Voici les commandes possible pour obtenir des images :wink: ')
        	.setColor('#6D5G1R')
        	.addField("C*Icat", "Vous donneras des images aléatoires de chat :joy: ")
        	.addField("C*Idog", "Vous donneras des images de chien :joy: ")
        	.addField("C*Inude","Vous enverras un nude en privé :wink: ")
        	.setFooter("Si tu as des suggestions d'images a rajouter fait moi en part  ")
        	message.channel.send(catEmbed);
	 }
	}

    if (message.content === config.prefix + 'Youtube'){
	
    if(message.channel.type === 'dm'){
	 
        message.author.createDM().then(channel => {
	let youtubeEmbed = new Discord.RichEmbed()
        .setDescription("Pense à t'abonner et à liké")
        .setColor('#5DKK6L')
        .addField('Voilà la chaîne de Cube_Lime YT', 'https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg')
        .addField('Viens aussi sur son serveur discord', 'https://discord.gg/pcfYDMK')
	 .addField("Tu peut également l'ajouter en ami sur youtube", "https://youtu.be/join/ct-Py9DY3VEGjY")
        .setFooter("Allez c'est gratuit pour le moment")
        	channel.send(youtubeEmbed)
	});
    }else{
	let youtubeEmbed = new Discord.RichEmbed()
        .setDescription("Pense à t'abonner et à liké")
        .setColor('#5DKK6L')
        .addField('Voilà la chaîne de Cube_Lime YT', 'https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg')
        .addField('Viens aussi sur son serveur discord', 'https://discord.gg/pcfYDMK')
	 .addField("Tu peut également l'ajouter en ami sur youtube", "https://youtu.be/join/ct-Py9DY3VEGjY")
        .setFooter("Allez c'est gratuit pour le moment")
        message.channel.send(youtubeEmbed);
    	}
    }

    if (message.content === config.prefix + 'Invite') {
            
    if(message.channel.type === 'dm'){
        message.author.createDM().then(channel => {
	let InviteEmbed = new Discord.RichEmbed()
        .setDescription("Voici le lien pour m'inviter dans ton serveur :wink: ")
        .setColor('#5EGT5B')
        .addField('https://discordapp.com/oauth2/authorize?client_id=479022698303848459&scope=bot&permissions=2146958847',"Voilà c'est cadeau :wink: ")
        .setFooter('Voila si tu ne comprend vraiment rien contacte moi ==> Cube_Lime YT#3607')     
        	channel.send(InviteEmbed)
	});
    }else{
	let InviteEmbed = new Discord.RichEmbed()
        .setDescription("Voici le lien pour m'inviter dans ton serveur :wink: ")
        .setColor('#5EGT5B')
        .addField('https://discordapp.com/oauth2/authorize?client_id=479022698303848459&scope=bot&permissions=2146958847',"Voilà c'est cadeau :wink: ")
        .setFooter('Voila si tu ne comprend vraiment rien contacte moi ==> Cube_Lime YT#3607') 
    	message.channel.send(InviteEmbed);
    }
	
	if(message.content === config.prefix + "help"){
	
		if(message.channel.type === 'dm'){
			message.author.createDM().then(channel => {
			let HelpEmbed = new Discord.RichEmbed()
        		.setDescription("Voici la description")
        		.setColor('#1CFF1C')
       			.addField('C*Administration', "Vous donne la page d'Administration")
        		.addField('C*Youtube', 'Vous donneras tout concernant le Youtube Game :) ')
        		.addField('C*Game', 'Vous donneras tout les jeux présent sur le bot')
        		.addField('C*Image', 'Vous donneras les commandes pour avoir des images')
        		.addField('C*Invite', "Vous donneras l'invitation du bot")
        		.setFooter('Support Server : https://discord.gg/pcfYDMK ')
				channel.send(HelpEmbed);
			});
		}else{
	let HelpEmbed = new Discord.RichEmbed()
        .setDescription("Voici la description")
        .setColor('#1CFF1C')
       	.addField('C*Administration', "Vous donne la page d'Administration")
        .addField('C*Youtube', 'Vous donneras tout concernant le Youtube Game :) ')
        .addField('C*Game', 'Vous donneras tout les jeux présent sur le bot')
        .addField('C*Image', 'Vous donneras les commandes pour avoir des images')
        .addField('C*Invite', "Vous donneras l'invitation du bot")
        .setFooter('Support Server : https://discord.gg/pcfYDMK ')
        		message.channel.send(HelpEmbed);
		}
	}
	    
	if (message.content === config.prefix + 'Administration') {
	  if ( !message.member.hasPermission('ADMINISTRATOR')){
		message.react('👌')
		  .then(console.log)
		  .catch(console.error);
		 message.channel.send(`Vous n'avez pas la permission d'acceder au pannel administrateur car vous n'avez pas un rôle avec l'option administrateur`);
		  
	  }let adminEmbed = new Discord.RichEmbed()
        		.setDescription('Voici la liste des commandes pour les administrateur')
        		.setColor('#6GFH6D')
        		.addField('C*Server', 'Vous donneras les infos sur le serveur')
	      		.addField('C*Ban', 'Pour bannir des gens de façon permanente')
	      		.addField('C*Kick', 'Pour kicker des gens :D')
        		.setFooter('Voila')
	   let rMember = message.author;
	try{
    		await rMember.send(adminEmbed)
		await message.reply("vérifier vos messages priver")
 	 }catch(e){
   	 	message.reply(`Impossible de vous envoyez des messages privés`);
 	 }
		  
		  
      }
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
	try {
        let commandFile = require(`./commands/${cmd}.js`);
        commandFile.run(bot, message, args, prefix);
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} ran the command: ${cmd}`);
    }
}));

bot.login(process.env.token)
