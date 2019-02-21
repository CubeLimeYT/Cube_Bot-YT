const Discord = require("discord.js");

module.exports.run = async (client, message) => {

const radio = {
    "franceinfo": "http://roo8ohho.cdn.dvmr.fr/live/franceinfo-midfi.mp3",
    "nrj": "http://185.52.127.132/fr/30001/mp3_128.mp3?origine=fluxradios",
    "rtl2": "http://streaming.radio.rtl2.fr/rtl2-1-48-192",
    "skyrock": "http://icecast.skyrock.net/s/natio_mp3_128k?tvr_name=tunein16&tvr_section1=128mp3",
    "rtl": "http://streaming.radio.rtl.fr/rtl-1-48-192",
    "rfm": "http://rfm-live-mp3-128.scdn.arkena.com/rfm.mp3",
    "bfm": "http://chai5she.cdn.dvmr.fr/bfmbusiness",
    "nostalgie": "http://cdn.nrjaudio.fm/audio1/fr/30601/mp3_128.mp3?origine=fluxradios",
    "mouv": "http://chai5she.cdn.dvmr.fr/mouv-midfi.mp3"
}

                if (!message.member.voiceChannel) return message.channel.send(`Vous devez être connecté dans un salon-vocal !`)
                
                if(!message.member.voiceChannel.joinable) return message.channel.send(`Je n'ai pas la permission de \`rejoindre\` ou \`parler\` dans ce salon !`).catch(err => console.log(err));
                
                if(!message.member.voiceChannel.speakable) return message.channel.send(`Je n'ai pas la permission de \`rejoindre\` ou \`parler\` dans ce salon !`).catch(err => console.log(err));


            let args = message.content.split(" ").slice(1).join(" ").toLowerCase();
             
      if (!args) return message.channel.send(`Veuillez spécifier un nom de radio, voici la liste des radios: **franceinfo**, **nrj**, **rtl2**, **skyrock**, **rtl**, **rfm**, **bfm**`)

        if(!radio[args]) return message.channel.send(`Radio non-valide, voici la liste des radios: **franceinfo**, **nrj**, **rtl2**, **skyrock**, **rtl**, **rfm**, **bfm**, **nostalgie**, **mouv**`)
    
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

module.exports.help = {
    name : "radio",
    usage: "radio <nom de radio>",
    description: "Donner l'ordre au bot d'écouter la radio",
    type: "musique"
}
