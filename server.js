const Discord = require('discord.js')
const bot = new Discord.Client();
const config = require('./config.json');
const superagent = require('superagent');
const music = require('./commands/music.js');
const cmdss = require('./commands.js');
const Radios = require('./listradio.json');

let statuses = [`${config.prefix}help`, `ban des caïd`, `https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg`, `Manger`, 'tous vous surveillez', 'être optimisé']
bot.on('ready', () => {
	console.log("Bot lancer!")
	console.log(`${bot.user.username} est Prêt!`);
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

//Event Memeber Join
var jimp = require('jimp');

bot.on('guildMemberAdd', async member => {
	  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
	  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK)
	  let mask = await jimp.read('https://i.imgur.com/552kzaW.png')
	  let welcome = await jimp.read('https://i.imgur.com/3Kf6TI8.png')

	  jimp.read(member.user.displayAvatarURL).then(avatar => {
	    avatar.resize(318, 317)
	    mask.resize(318, 317)
	    avatar.mask(mask)

	  welcome.print(font64, 400, 170, member.user.username)
	  welcome.composite(avatar, 43, 38).write('Welcome2.png')
	  member.guild.channels.get('name', 'Join-Quit').map(channel => channel.send(``, { files: ["Welcome2.png"] }))

	  console.log('Image sent!')
	  })
	  .catch(err => {
	  console.log('error sending the avatar')
	  })
})

bot.on('guildMemberRemove', async member => {
	  let font = await jimp.loadFont(jimp.FONT_SANS_32_BLACK)
	  let font64 = await jimp.loadFont(jimp.FONT_SANS_64_BLACK)
	  let mask = await jimp.read('https://i.imgur.com/552kzaW.png')
	  let goodbye = await jimp.read('https://imgur.com/Mazj06u.png')

	  jimp.read(member.user.displayAvatarURL).then(avatar => {
	    avatar.resize(318, 317)
	    mask.resize(318, 317)
	    avatar.mask(mask)

	  goodbye.print(font64, 400, 170, member.user.username)
	  goodbye.composite(avatar, 43, 38).write('Goodbye2.png')
	  member.guild.channels.get('name', 'Join-Quit').map(channel => channel.send(``, { files: ["Goodbye2.png"] }))

	  console.log('Image sent!')
	  })
	  .catch(err => {
	  console.log('error sending the avatar')
	  })
})


bot.on("message", async message => {
	//Setup Join-Quit
	if(message.content === config.prefix + "SetupJQ"){
            if(!message.member.hasPermission('ADMINISTRATOR')){
                  message.channel.send("Vous n'êtes pas administrateur")   
            }else{
                  if(!message.guild.member(bot.user).hasPermission('ADMINISTRATOR')){
                        message.channel.send("Je n'ai pas la permission de pouvoir créer des salons textuel");
                  }else{
                        message.guild.createChannel("Join-Quit").then(channel => {
                              channel.setTopic('Join-Quit')
                        });
                  }
            }
        }
	
	//Setup Global Chat
	if(message.content === config.prefix + "SetupCGC"){
            if(!message.member.hasPermission('ADMINISTRATOR')){
                  message.channel.send("Vous n'êtes pas administrateur")   
            }else{
                  if(!message.guild.member(bot.user).hasPermission('ADMINISTRATOR')){
                        message.channel.send("Je n'ai pas la permission de pouvoir créer des salons textuel");
                  }else{
                        message.guild.createChannel("Cube-Global-Chat").then(channel => {
                              channel.setTopic('Global chat')
                        });
                  }
            }
        }
	
	//GlobalChat
	if(message.channel.name === "cube-global-chat"){
		if(!message.author.bot){
			let args = message.content.slice().split(" ");
		
		const sayMessage = args.join(" ");
			message.delete().catch();
			let embedglobal = new Discord.RichEmbed()
			.setAuthor(`${message.author.username} | ${message.author.id}`, message.author.avatarURL)
			.setColor(0xBCFF78)
			.addField(`${sayMessage}`, "Global Chat V.1.1")
			.setFooter(`Envoyé depuis ${message.guild.name}`)
			.setTimestamp()

			bot.channels.findAll('name', 'cube-global-chat').map(channel => channel.send(embedglobal))
		}
		
		
	}
	
	/*List Radio
	if(message.content === (config.prefix + "rlist") || (config.prefix + "radiolist")){
		message.channel.send(Radios.radio);
	}
	*/
	
	//Generation d'image meme
	if(message.content.startsWith(config.prefix + 'meme')) {
		let msg = await message.channel.send('Génération de l\'image...');
           	 
									
		let {body} = await superagent
		.get('https://api-to.get-a.life/meme')
		
		if(!{body}) return message.channel.send("Réessayez") 
		
		const Membed = new Discord.RichEmbed()
		.addField(body.text)
		.setImage(body.url)
		
		message.channel.send(Membed);
		
		msg.delete();
		  
      }
	
	//Generation d'image de chien
	if(message.content.startsWith(config.prefix + 'Idog')) {
		let msg = await message.channel.send('Génération de l\'image...');
           	 
									
		let {body} = await superagent
		.get('https://dog.ceo/api/breeds/image/random')
		
		if(!{body}) return message.channel.send("Réessayez") 
		
		const Dembed = new Discord.RichEmbed()
		.setImage(body.message)
		
		message.channel.send({embed: Dembed});
		
		msg.delete();
		  
      }
	
	
	//Generation d'image de chat
	if(message.content.startsWith(config.prefix + 'Icat')) {
		let msg = await message.channel.send('Génération de l\'image...');
           	 
									
		let {body} = await superagent
		.get('https://aws.random.cat/meow')
		
		if(!{body}) return message.channel.send("Réessayez") 
		
		const cembed = new Discord.RichEmbed()
		.setImage(body.file)
		
		message.channel.send({embed: cembed});
		
		msg.delete();
		  
      }
	
	//Ping return Pong in ..ms
	if (message.content.startsWith(config.prefix + "ping")){
        message.channel.send(`Ping en ${Date.now() - message.createdTimestamp} ms`)
	}
	
	//Command for restart bot
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
	
	//help pour les images
	if (message.content === config.prefix + 'Image'){
		var catEmbed = new Discord.RichEmbed()
        	.setDescription('Voici les commandes possible pour obtenir des images :wink: ')
        	.setColor('#6D5G1R')
        	.addField("C*Icat", "Vous donneras des images aléatoires de chat :joy: ")
        	.addField("C*Idog", "Vous donneras des images de chien :joy: ")
        	.addField("C*Inude","Vous enverras un nude en privé :wink: ")
        	.setFooter("Si tu as des suggestions d'images a rajouter fait moi en part  ")
	if(message.channel.type === 'dm'){
       	 	message.author.createDM().then(channel => {
        		channel.send(catEmbed)
		});
	}else{
        	message.channel.send(catEmbed);
	 }
	}
	
	//member count	
	if (message.content === (config.prefix + 'Server') || message.content === (config.prefix + 'Serveur')) {
		let server_name = message.guild.name
		let server_size = message.guild.members.size
		message.channel.send('Serveur : ' + server_name + '\nPersonnes : ' + server_size);
	}
	
	//Youtube Channel
    if (message.content === config.prefix + 'Youtube'){
	    if(message.channel.type === 'dm'){
		 var youtubeEmbed = new Discord.RichEmbed()
		.setDescription("Pense à t'abonner et à liké")
		.setColor('#5DKK6L')
		.addField('Voilà la chaîne de Cube_Lime YT', 'https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg')
		.addField('Viens aussi sur son serveur discord', 'https://discord.me/fatalityteam')
		 .addField("Tu peut également l'ajouter en ami sur youtube", "https://youtu.be/join/ct-Py9DY3VEGjY")
		.setFooter("Allez c'est gratuit pour le moment")
		message.author.createDM().then(channel => {
			channel.send(youtubeEmbed)
		});
	    }else{
		message.channel.send(youtubeEmbed);
		}
    }
    
    //Commande pour les jeux du bot
    if (message.content === config.prefix + 'Game') {
        let gameEmbed = new Discord.RichEmbed()
        .setDescription('Voici les commandes possible pour jouer avec moi :D')
        .setColor('#03fff7')
        .addField("C*8ball", "Je peut répondre a vos questions ,tapez la commande suivi de votre question (ex:C*8ball tu m'aime ?)")
	.addField("C*quiz", "Je te pose une question essaie d'y répondre")
        .setFooter("Si tu as des suggestions de jeu  a rajouter fait moi en part");
        message.channel.send(gameEmbed);
    }
    
	//Utility
	 if (message.content === config.prefix + 'Utility') {
		let utilityEmbed = new Discord.RichEmbed()
		.setDescription('Voici les commandes utiles')
		.setColor('#03fff7')
		.addField("C*ping", "Vous donnes votre nombre de ms.")
		.setFooter("Si tu as des commandes a rajouter dit le moi");
		message.channel.send(utilityEmbed);
	  }
	
	//Info Global Chat
	    if (message.content === config.prefix + 'CGC') {
		let cgcEmbed = new Discord.RichEmbed()
		.setDescription('Voici comment avoir un global-chat')
		.setColor('#03fsf7')
		.addField(`${config.prefix}SetupCGC`, "Ajouteras un chat inter-serveur automatiquement :wink: ")
		.setFooter("Si tu as un problème dit le moi => Cube_Lime#3607");
		message.channel.send(cgcEmbed);
	    }
	
	//Administration
	if (message.content === config.prefix + 'Administration') {
	  if ( !message.member.hasPermission('ADMINISTRATOR')){
		message.react('👌')
		  .then(console.log)
		  .catch(console.error);
		 message.channel.send(`Vous n'avez pas la permission d'acceder au pannel administrateur car vous n'avez pas un rôle avec l'option administrateur`);
		  
	  }else{
				let adminEmbed = new Discord.RichEmbed()
					.setDescription('Voici la liste des commandes pour les administrateur')
					.setColor('#6GFH6D')
					.addField('C*Server', 'Vous donneras les infos sur le serveur')
				        .addField('C*SetupCGC', 'Vous ajouetras un Global-Chat automatiquement')
					.addField('C*Ban', 'Pour bannir des gens de façon permanente')
					.addField('C*Kick', 'Pour kicker des gens :D')
					.setFooter('Voila')
			message.channel.send(adminEmbed);
	  }
	}
	
	
	
	
	
	
	
	
 let prefix = config.prefix;
  
// Variables
    let msg = message.content.toLowerCase();
    let sender = message.author;
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmds = args.shift().toLowerCase();

// Return Statements
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return;
	try {
        let commandFile = require(`./commands/${cmds}.js`);
        commandFile.run(bot, message, args, prefix);
    } catch(e) {
        console.log(e.message);
    } finally {
        console.log(`${message.author.username} ran the command: ${cmds}`);
    }
});
bot.on('message', msg => {	

 	if(msg.author.bot || msg.channel.type != 'text')	
		return;	

 	if(!msg.content.startsWith(config.prefix))	
		return;	
	let cmd = msg.content.split(/\s+/)[0].slice(config.prefix.length).toLowerCase();	
	getCmdFunction(cmd)(msg);	
});

bot.login(process.env.token)

function getCmdFunction(cmd){	
	const COMMANDS = {	
		'music': music.processCommands,
		'help': cmdss.help,
		
	}	
	return COMMANDS[cmd] ? COMMANDS[cmd] : () => {};	
}
