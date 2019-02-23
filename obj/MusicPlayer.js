'use strict';
const tool = require('../tool.js');
const config = require('../config.json')

class MusicPlayer {
    constructor(guild) {
        this.queue = [];
        this.musicChannel = null;
        this.voiceConnection = null;
        this.dispatch = null;
        this.volume = 1;
        this.status = 'offline'; 
        this.inactivityTimer = 60;
    }

	queueSong(song){
		let index;
		if(arguments.length == 2)
			index = arguments[1];
		if(index != undefined) {
			this.queue[index] = song;
		}else{
			this.queue.push(song);
		}
	}

playSong(msg) {
        if (this.queue.length === 0) {
            msg.channel.send('File d\'attente achevée.');
            this.changeStatus('stopped');
        } else {
            resolveVoiceChannel.call(this).then(() => {
                let song = this.queue[0];
                let stream = song.getStream();
                console.log(song.thumbnail);
                this.musicChannel.send(`:notes: Lecture ${tool.wrap(song.title)}`);
                this.changeStatus('playing');
                this.dispatch = this.voiceConnection.playStream(stream, {
                    passes: 2,
                    volume: this.volume
                });

                this.dispatch.on('error', error => {
                    this.dispatch = null;
                    this.queue.shift();
                    this.playSong(msg);
                });

                this.dispatch.on('end', reason => {
                    this.dispatch = null;
                    this.queue.shift();
                    if (reason != 'leave') {
                        this.playSong(msg);
                    }
                });

                this.dispatch.on('debug', info => {
                    console.log(info);
                });
            }).catch(err => {
                if (err != 'novoice') console.log(err);
            });
        }

	function resolveVoiceChannel() {
            return new Promise((resolve, reject) => {
                if (this.voiceConnection)
                    resolve();
                else {
                    msg.channel.send(
                        `S'il vous plait utiliser ${tool.wrap(`${config.prefix}music join`)} pour commencer la playlist.`
                    );
                    reject('novoice');
                }
            });
        }
    }

    /*
    Skips the current song.
    */
    skipSong() {
        if (this.dispatch && this.status == 'playing') {
            this.musicChannel.send(`:fast_forward: musique Passée`);
            this.dispatch.end();
        } else {
            this.musicChannel.send(`Il n'y a rien a passer!`);
        }
    }

    /*
    Pauses the dispatcher.
    */
    pauseSong() {
        if (this.dispatch) {
            this.musicChannel.send(`:pause_button: la musique est en pause`)
            this.dispatch.pause();
        }
        else
            this.musicChannel.send(`Rien ne se joue en ce moment.`);
    }

    /*
    Resumes the dispatcher.
    */
    resumeSong() {
        if (this.dispatch) {
            this.musicChannel.send(`:play_pause: la musique a reprit`)
            this.dispatch.resume();
        }
        else
            this.musicChannel.send(`Rien ne se joue en ce moment.`);

    }

    /*
    Prints the queue.
    */
    printQueue(msg) {
        if (this.queue.length > 0) {
            try {
                let queueString = '';
                for (let i = 0; i < this.queue.length && i < 15; i++)
                    queueString += `${i + 1}. ${this.queue[i].title} `;
                if (this.queue.length > 15)
                    queueString += `\nand ${this.queue.length - 15} more.`;
                msg.channel.send(queueString, {
                    'code': true
                });
            } catch (err) {
                console.log('ERROR CAUGHT:\n' + err);
                msg.channel.send(
                    `${tool.inaError} Je ne peux pas afficher la file d'attente maintenant. Réessayez dans quelques instants.`
                );
            }
        } else {
            msg.channel.send(`Il n'y a pas de musique dans la file d'attente!`);
        }
    }

    /*
    Clears the queue.
    */
    purgeQueue(msg) {
        this.queue = [];
        msg.channel.send('La file d\'attente a été effacé.');
    }

    /*
    Displays the currently playing song.
    */
    nowPlaying(msg) {
        if (this.queue.length > 0){
            msg.channel.send({embed: {
                    color: 3447003,
                    fields: [{
                        name: `:notes: Lecture en cours `,
                        value: `[${this.queue[0].title}]`+`(${this.queue[0].url}) (\`${this.queue[0].length_seconds\`) demandé par **${this.queue[0].author}**`
                      }], 
                    timestamp: new Date(),
                    footer: {
                      icon_url: msg.author.avatarURL,
                      text: "Fatality Team"
                    }
                  }
                });
        }else{
            msg.channel.send('Rien ne se joue en ce moment.');
        }
    }

    /*
    Sets the volume of the dispatcher.
    */
    setVolume(msg) {
        let vol = parseInt(msg.content.split(/\s+/)[2]) / 100;
        if (vol && (vol >= 0 && vol <= 1)) {
            if (this.dispatch) {
                this.dispatch.setVolume(vol);
                this.volume = vol;
                msg.channel.send(`:speaker:Volume mis à ${tool.wrap(vol * 100)}`);
            } else {
                msg.channel.send(`Rien ne se joue en ce moment.`);
            }
        } else {
            msg.channel.send(`Utilisez un nombre compris entre 0 et 100!`);
        }
    }

    joinVc(msg) {
        if (msg.member.voiceChannel) {
            this.musicChannel = msg.channel;
            msg.member.voiceChannel.join().then(connection => {
                this.voiceConnection = connection;
                this.musicChannel.send(
                    `Rejoins et lié à :speaker: **${msg.member.voiceChannel.name}** et #**${this.musicChannel.name}**.`
                );
                this.changeStatus('stopped');
                if (this.queue.length > 0)
                    this.playSong(msg);
            })
        } else {
            msg.channel.send(`Vous n\'êtes pas dans un canal vocal`);
        }
    }

    /*
    Disconnects from the voice channel.
    */
    leaveVc(msg) {
        if (this.voiceConnection) {
            this.musicChannel.send(`Quitte :speaker: **${this.voiceConnection.channel.name}**.`);
            this.musicChannel = null;
            if (this.dispatch)
                this.dispatch.end('leave');
            this.voiceConnection.disconnect();

            this.changeStatus('offline');

            this.voiceConnection = null;
            this.dispatch = null;
        } else {
            msg.channel.send(`Je ne suis pas dans un canal vocal!`);
        }
    }

    /*
    Changes the status of the bot.
    @param {String} status The status to set the bot to.
    */
    changeStatus(status) {
        this.status = status;
        this.inactivityTimer = status == 'paused' ?
            600 :
            120;
    }
}

module.exports = MusicPlayer;
