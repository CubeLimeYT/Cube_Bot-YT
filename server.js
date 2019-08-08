const Discord = require('discord.js');
const Util = require('./node_modules/discord.js/src/util/Util');
const bot = new Discord.Client();
const config = require('./config.json');
const superagent = require('superagent');
const music = require('./commands/music.js');
const cmdss = require('./commands.js');
const Radios = require('./listradio.json');
const tokens = require('./tokens.json');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube(process.env.YTB);
const ytdl = require('ytdl-core');

let statuses = [`${config.prefix}help | Version 1.2`]//, `${bot.guilds.size} serveurs`]
bot.on('ready', () => {
	console.log("Bot lancer!")
	console.log(`connecté à ` + bot.user.tag );
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
	
	if(message.content === `Bn`)
		message.reply(`BONNE NUIT`)

	if(message.author.bot || message.channel.type != 'text')
		return;

	if(!message.content.startsWith(config.prefix))
		return;
});

bot.on("message", async message => {
	//Setup Global Chat
	if(message.content === config.prefix + "SetupCGC"){
            if(!message.member.hasPermission('ADMINISTRATOR')){
                  message.channel.send("Vous n'êtes pas administrateur")   
            }else{
                  if(!message.guild.member(bot.user).hasPermission('ADMINISTRATOR')){
                        message.channel.send("Je n'ai pas la permission de pouvoir créer des salons textuel");
                  }else{
                        message.guild.createChannel("cube-chat").then(channel => {
                              channel.setTopic('Global chat')
                        });
                  }
            }
        }
	
	//GlobalChat
	if(message.channel.name === "cube-chat"){
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

			bot.channels.findAll('name', 'cube-chat').map(channel => channel.send(embedglobal))
		}
		
		
	}
	

	if(message.content === config.prefix + "rlist"){
		message.channel.send('Voici la liste des radios');
		message.channel.send(Radios.radio01);
		message.channel.send(Radios.radio02);
		message.channel.send(Radios.radio03);
		message.channel.send(Radios.radio04);
		message.channel.send(Radios.radio05);
		message.channel.send(Radios.radio06);
		message.channel.send(Radios.radio07);
		message.channel.send(Radios.radio08);
	}
	
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
	if(message.content.startsWith(config.prefix + 'dog')) {
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
	if(message.content.startsWith(config.prefix + 'cat')) {
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
        message.channel.send(`Pong en ${Date.now() - message.createdTimestamp} ms`)
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
	if (message.content === config.prefix + 'image') {
		var catEmbed = new Discord.RichEmbed()
        	.setDescription('Voici les commandes possible pour obtenir des images :wink: ')
        	.setColor('#6D5G1R')
        	.addField(`${config.prefix}cat`, "Vous donneras des images aléatoires de chat :joy: ")
        	.addField(`${config.prefix}dog`, "Vous donneras des images de chien :joy: ")
        	.addField(`${config.prefix}nude`,"MAINTENANCE")
		.addField(`${config.prefix}perle`, "A VENIR")
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
	if (message.content === (config.prefix + 'server') || message.content === (config.prefix + 'serveur')) {
		let server_name = message.guild.name
		let server_size = message.guild.members.size
		message.channel.send('Serveur : ' + server_name + '\nPersonnes : ' + server_size);
	}
	
	//Youtube Channel
    if (message.content === config.prefix + 'youtube'){
	    var youtubeEmbed = new Discord.RichEmbed()
		.setDescription("Pense à t'abonner et à liké")
		.setColor('#5DKK6L')
		.addField('Voilà la chaîne de Cube_Lime YT', 'https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg')
		.addField('Viens aussi sur son serveur discord', 'https://discord.me/fatalityteam')
		.addField("Tu peut également l'ajouter en ami sur youtube", "https://youtu.be/join/ct-Py9DY3VEGjY")
		.setFooter("Allez c'est gratuit pour le moment")
	    	    if(message.channel.type === 'dm'){
		message.author.createDM().then(channel => {
			channel.send(youtubeEmbed)
		});
	    }else{
		message.channel.send(youtubeEmbed);
		}

    }
    
    //Commande pour les jeux du bot
    if (message.content === config.prefix + 'game') {
        let gameEmbed = new Discord.RichEmbed()
        .setDescription('Voici les commandes possible pour jouer avec moi :D')
        .setColor('#03fff7')
        .addField(`${config.prefix}8ball`, "Je peut répondre a vos questions ,tapez la commande suivi de votre question (ex://8ball tu m'aime ?)")
	.addField(`${config.prefix}quiz`, "Je te pose une question essaie d'y répondre")
        .setFooter("Si tu as des suggestions de jeu  a rajouter fait moi en part");
        message.channel.send(gameEmbed);
    }
    
	//Utility
	 if (message.content === config.prefix + 'utility') {
		let utilityEmbed = new Discord.RichEmbed()
		.setDescription('Voici les commandes utiles')
		.setColor('#03fff7')
		.addField(`${config.prefix}ping`, `Vous donnes votre nombre de ms.`)
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
	if (message.content === config.prefix + 'administration') {
	  if ( !message.member.hasPermission('ADMINISTRATOR')){
		message.react('👌')
		  .then(console.log)
		  .catch(console.error);
		 message.channel.send(`Vous n'avez pas la permission d'acceder au pannel administrateur car vous n'avez pas un rôle avec l'option administrateur`);
		  
	  }else{
				let adminEmbed = new Discord.RichEmbed()
					.setDescription('Voici la liste des commandes pour les administrateur')
					.setColor('RANDOM')
					.addField(`${config.prefix}serveur`, `Vous donneras les infos sur le serveur`)
				        .addField(`${config.prefix}SetupCGC`, `Vous ajouetras un Global-Chat automatiquement`)
					.addField(`${config.prefix}userinfo`, `Vous donnes les infos d'une personne`)
					.addField(`${config.prefix}clear`, `Permet de nettoyer une channel (0-100)`)
					.addField(`${config.prefix}ban`, `Pour bannir des gens de façon permanente`)
					.addField(`${config.prefix}kick`, `Pour kicker des gens :D`)
					.setFooter('Voila')
			message.channel.send(adminEmbed);
	  }
	}
	
	//help+
	
	if (message.content === config.prefix + `help+`) {
		message.channel.send(`Tu peut rejoindre le serveur support du bot avec la commande **${config.prefix}invite**`)
		message.reply(`Sinon tu peut aussi ajouter **Fatality_Cucube#3607** en ami, si tu as besoin de plus d'aide :blush:`)
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

//bot.on pour la musique

bot.on('message', async msg => {
	let PREFIX = config.prefix;
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(PREFIX)) return undefined;

    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);

    let command = msg.content.toLowerCase().split(' ')[0];
    command = command.slice(PREFIX.length);

    if (command === 'play') {
        const voiceChannel = msg.member.voiceChannel;
        if (!voiceChannel) return msg.channel.send('Vous devez être dans un channel vocal pour utiliser cette commande');
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        if (!permissions.has('CONNECT')) {
            return msg.channel.send('Je n\'ai pas la permission de me connecter au salon');
        }
        if (!permissions.has('SPEAK')) {
            return msg.channel.send('Je n\'ai pas la permisson de parler');
        }

        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
                await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
            }
            return msg.channel.send(`:white_check_mark: Playlist: **${playlist.title}** a bien été ajouté à la queue!`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 10);
                    let index = 0;
                    msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

Veuillez fournir une valeur pour sélectionner l'un des résultats de la recherche, allant de 1 a 10.
                    `);
                    // eslint-disable-next-line max-depth
                    try {
                        var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                            maxMatches: 1,
                            time: 10000,
                            errors: ['time']
                        });
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('Aucune valeur ou valeur invalide entrée, annulation de la sélection de vidéo.');
                    }
                    const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                } catch (err) {
                    console.error(err);
                    return msg.channel.send(':sos: Je n\'ai pu obtenir aucun résultat de recherche.');
                }
            }
            return handleVideo(video, msg, voiceChannel);
        }
    } else if (command === 'skip') {
        if (!msg.member.voiceChannel) return msg.channel.send('Vous n\'êtes pas dans un channel vocal');
        if (!serverQueue) return msg.channel.send('Il n\'y a pas de musique qui joue actuellement ');
        serverQueue.connection.dispatcher.end('Skip command has been used!');
        return undefined;
    } else if (command === 'stop') {
        if (!msg.member.voiceChannel) return msg.channel.send('Vous n\'êtes pas dans un channel vocal');
        if (!serverQueue) return msg.channel.send('Il n\'y a pas de musique qui joue actuellement');
        serverQueue.songs = [];
        serverQueue.connection.dispatcher.end('Stop command has been used!');
        return undefined;
    } else if (command === 'volume') {
        if (!msg.member.voiceChannel) return msg.channel.send('Vous n\'êtes pas dans un channel vocal');
        if (!serverQueue) return msg.channel.send('Il n\'y a pas de musique qui joue actuellement');

        if (args[1] > 5) {
            msg.channel.send('Vous ne pouvez pas mettre le volume supérieur a 5 pour le confort de vos oreilles')
        } else {
            if (!args[1]) return msg.channel.send(`Le volume est a : **${serverQueue.volume}**`);
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
            return msg.channel.send(`Le volume est a : **${args[1]}**`);
        }


    } else if (command === 'np') {
        if (!serverQueue) return msg.channel.send('Il n\'y a pas de musique qui joue actuellement');
        return msg.channel.send(`:notes: actuellement à l'écoute: **${serverQueue.songs[0].title}**`);
    } else if (command === 'queue') {
        if (!serverQueue) return msg.channel.send('Il n\'y a pas de musique qui joue actuellement');

        try {
            msg.channel.send(`
                __**Song queue:**__
                ${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
                **actuellement a l'ecoute:** ${serverQueue.songs[0].title}
        `);
        } catch (err) {
            console.error(`Je ne peux pas afficher la queue: ${err}`);
            return msg.channel.send(`Je ne peux pas afficher la queue raison : ${err}`);
        }

    } else if (command === 'pause') {
        if (serverQueue && serverQueue.playing) {
            serverQueue.playing = false;
            serverQueue.connection.dispatcher.pause();
            return msg.channel.send(':pause_button: musique en pause');
        }
        return msg.channel.send('Il n\'y a pas de musique qui joue actuellement.');
    } else if (command === 'resume') {
        if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return msg.channel.send(':arrow_forward: la musique rejoue');
        }
        return msg.channel.send('Il n\'y a pas de musique qui joue actuellement.');
    } else if (command === 'purge') {
        serverQueue.songs = [];
        msg.channel.send("La queue a été effacé");
    } else if (command === "join") {
        if (!msg.member.voiceChannel) {
            msg.channel.send('Vous n\'etes pas dans un channel vocal');
        } else {
            msg.member.voiceChannel.join();
            msg.channel.send("Le bot à bien rejoint le vocal")
        }

    } else if (command === "leave") {
        if (msg.guild.me.voiceChannel) {
            msg.member.voiceChannel.leave();
            msg.channel.send("Le bot à bien quitte le vocal");
        } else {
            msg.channel.send('Je ne suis pas dans un channel vocal');
        }

    }
    return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(video);
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);

        queueConstruct.songs.push(song);

        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`Je ne peux pas rejoindre le channel vocal: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(`:white_check_mark: **${song.title}** a bien été ajouté à la queue`);
    }
    return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);

    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);

    const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
        .on('end', reason => {
            if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
            else console.log(reason);
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
        })
        .on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

    serverQueue.textChannel.send(`:notes: Joue actuellement: **${song.title}**`);
}
/*

let queue = {};

const commands = {
	'play': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
		if (!msg.guild.voiceConnection) return commands.join(msg).then(() => commands.play(msg));
		if (queue[msg.guild.id].playing) return msg.channel.sendMessage('Already Playing');
		let dispatcher;
		queue[msg.guild.id].playing = true;

		console.log(queue);
		(function play(song) {
			console.log(song);
			if (song === undefined) return msg.channel.sendMessage('Queue is empty').then(() => {
				queue[msg.guild.id].playing = false;
				msg.member.voiceChannel.leave();
			});
			msg.channel.sendMessage(`Playing: **${song.title}** as requested by: **${song.requester}**`);
			dispatcher = msg.guild.voiceConnection.playStream(yt(song.url, { audioonly: true }), { passes : tokens.passes });
			let collector = msg.channel.createCollector(m => m);
			collector.on('message', m => {
				if (m.content.startsWith(tokens.prefix + 'pause')) {
					msg.channel.sendMessage('paused').then(() => {dispatcher.pause();});
				} else if (m.content.startsWith(tokens.prefix + 'resume')){
					msg.channel.sendMessage('resumed').then(() => {dispatcher.resume();});
				} else if (m.content.startsWith(tokens.prefix + 'skip')){
					msg.channel.sendMessage('skipped').then(() => {dispatcher.end();});
				} else if (m.content.startsWith('volume+')){
					if (Math.round(dispatcher.volume*50) >= 100) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.min((dispatcher.volume*50 + (2*(m.content.split('+').length-1)))/50,2));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith('volume-')){
					if (Math.round(dispatcher.volume*50) <= 0) return msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
					dispatcher.setVolume(Math.max((dispatcher.volume*50 - (2*(m.content.split('-').length-1)))/50,0));
					msg.channel.sendMessage(`Volume: ${Math.round(dispatcher.volume*50)}%`);
				} else if (m.content.startsWith(tokens.prefix + 'time')){
					msg.channel.sendMessage(`time: ${Math.floor(dispatcher.time / 60000)}:${Math.floor((dispatcher.time % 60000)/1000) <10 ? '0'+Math.floor((dispatcher.time % 60000)/1000) : Math.floor((dispatcher.time % 60000)/1000)}`);
				}
			});
			dispatcher.on('end', () => {
				collector.stop();
				play(queue[msg.guild.id].songs.shift());
			});
			dispatcher.on('error', (err) => {
				return msg.channel.sendMessage('error: ' + err).then(() => {
					collector.stop();
					play(queue[msg.guild.id].songs.shift());
				});
			});
		})(queue[msg.guild.id].songs.shift());
	},
	'join': (msg) => {
		return new Promise((resolve, reject) => {
			const voiceChannel = msg.member.voiceChannel;
			if (!voiceChannel || voiceChannel.type !== 'voice') return msg.reply('I couldn\'t connect to your voice channel...');
			voiceChannel.join().then(connection => resolve(connection)).catch(err => reject(err));
		});
	},
	'add': (msg) => {
		let url = msg.content.split(' ')[1];
		if (url == '' || url === undefined) return msg.channel.sendMessage(`You must add a YouTube video url, or id after ${tokens.prefix}add`);
		yt.getInfo(url, (err, info) => {
			if(err) return msg.channel.sendMessage('Invalid YouTube Link: ' + err);
			if (!queue.hasOwnProperty(msg.guild.id)) queue[msg.guild.id] = {}, queue[msg.guild.id].playing = false, queue[msg.guild.id].songs = [];
			queue[msg.guild.id].songs.push({url: url, title: info.title, requester: msg.author.username});
			msg.channel.sendMessage(`added **${info.title}** to the queue`);
		});
	},
	'queue': (msg) => {
		if (queue[msg.guild.id] === undefined) return msg.channel.sendMessage(`Add some songs to the queue first with ${tokens.prefix}add`);
		let tosend = [];
		queue[msg.guild.id].songs.forEach((song, i) => { tosend.push(`${i+1}. ${song.title} - Requested by: ${song.requester}`);});
		msg.channel.sendMessage(`__**${msg.guild.name}'s Music Queue:**__ Currently **${tosend.length}** songs queued ${(tosend.length > 15 ? '*[Only next 15 shown]*' : '')}\n\`\`\`${tosend.slice(0,15).join('\n')}\`\`\``);
	},
	'help': (msg) => {
		let tosend = ['```xl', tokens.prefix + 'join : "Join Voice channel of msg sender"',	tokens.prefix + 'add : "Add a valid youtube link to the queue"', tokens.prefix + 'queue : "Shows the current queue, up to 15 songs shown."', tokens.prefix + 'play : "Play the music queue if already joined to a voice channel"', '', 'the following commands only function while the play command is running:'.toUpperCase(), tokens.prefix + 'pause : "pauses the music"',	tokens.prefix + 'resume : "resumes the music"', tokens.prefix + 'skip : "skips the playing song"', tokens.prefix + 'time : "Shows the playtime of the song."',	'volume+(+++) : "increases volume by 2%/+"',	'volume-(---) : "decreases volume by 2%/-"',	'```'];
		msg.channel.sendMessage(tosend.join('\n'));
	},
	'reboot': (msg) => {
		if (msg.author.id == tokens.adminID) process.exit(); //Requires a node module like Forever to work.
	}
};

bot.on('message', msg => {
	if (!msg.content.startsWith(tokens.prefix)) return;
	if (commands.hasOwnProperty(msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0])) commands[msg.content.toLowerCase().slice(tokens.prefix.length).split(' ')[0]](msg);
});

*/

bot.on('message', message => {
	
	let msg = message.content;	

	

	if(msg.startsWith (config.prefix + "send")){
		if(message.author.id != "372099632173416449") {
			return message.reply('Vous n\'êtes pas le propriétaire du bot');
		}else if(message.author.id != "307231625459007488") {
			return message.reply('Vous n\'êtes pas le propriétaire du bot');
		}
		if(!message.mentions.users.first) { return message.channel.send("Veuillez spécifier une personne")}
		let mention = message.mentions.users.first();
		mentionMessage = message.content.slice (29);
		if(mentionMessage === 'undefined') { return message.channel.send("Veuillez spécifier un message")}
		mention.sendMessage(mentionMessage);
		message.reply("message envoyé");
	}
});

bot.login(process.env.token)

function getCmdFunction(cmd){	
	const COMMANDS = {	
		//'music': music.processCommands,
		'help': cmdss.help,
		
	}	
	return COMMANDS[cmd] ? COMMANDS[cmd] : () => {};	
}
