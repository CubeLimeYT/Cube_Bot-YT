const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message) => {

const radio = require("../radio.json");

                if (!message.member.voiceChannel) return message.channel.send(`Vous devez être connecté dans un salon-vocal !`)
                
                if(!message.member.voiceChannel.joinable) return message.channel.send(`Je n'ai pas la permission de \`rejoindre\` ou \`parler\` dans ce salon !`).catch(err => console.log(err));
                
                if(!message.member.voiceChannel.speakable) return message.channel.send(`Je n'ai pas la permission de \`rejoindre\` ou \`parler\` dans ce salon !`).catch(err => console.log(err));


            let args = message.content.split(" ").slice(1).join(" ").toLowerCase();
    
            if (!args) return message.channel.send(`Veuillez spécifier un nom de radio, faites **${config.prefix}rlist**, pour stopper la radio faites ${config.prefix}radio stop`);
    
    if(args === ("stop") || args === ("leave")){
        if (message.guild.voiceConnection) {
                message.member.voiceChannel.leave();
                message.channel.send(`Radio stoppée`);
                
                
            }else{
                if (!message.member.voiceChannel){
                    message.channel.send(`⚠ Vous devez être connecté dans un salon-vocal !`);
                }else{
                    message.channel.send(`Je ne suis pas dans un canal vocal!`);
                }
                
            }
    }else{

        if(!radio[args]) return message.channel.send(`Radio non-valide, faites **${config.prefix}rlist** `)
    
    message.member.voiceChannel.join().then(connection => {

    require('http').get(radio[args], (res) => { 

               connection.playStream(res); 

         let embed = new Discord.RichEmbed()
            .setAuthor(`${client.user.username} FM`, client.user.avatarURL)
            .setColor(0xBCFF78)
            .addField(`• Radio`, "`"+args+"`")
            .addField(`• Lien`, "`"+radio[args]+"`")
            .setFooter(`demandé par @${message.author.username}`);

            message.channel.send(`📻 En joue:`, embed);
 
            });

        });
    }
}

module.exports.help = {
    name : "radio",
    usage: "radio <nom de radio>",
    description: "Donner l'ordre au bot d'écouter la radio",
    type: "musique"
}
