const config = require("./config.json");

module.exports = {
   'help': help,
   'music': music
}

function music(msg){
     msg.channel.send(
        {embed: {
      color: 0x00FF00,
      title: `Music Help
              ${config.prefix}music | <function>
              Toute les function:`,
      fields: [{
            name: "Play",
            value: `play <url> ou <recherche> : 
            Ajouter le(s) song ou la playlist à la file d'attente.`,
            inline: true
          },
          {
            name: "Skip",
            value: `skip : Passer le song actuel.`,
            inline: true
          },
          {
            name: "Pause",
            value: `pause : Pause le song.`,
            inline: true
          },
          {
            name: "Resume",
            value: `resume : Reprendre le song.`,
            inline: true
          },
          {
            name: "Queue",
            value: `queue : Afficher le(s) song(s) de la file d'attente.`,
            inline: true
          },
          {
            name: "Purge",
            value: `purge : Éffacer le(s) song(s) de la file d'attente.`,
            inline: true
          },
          {
            name: "np",
            value: `np : Afficher le titre du song actuel.`,
            inline: true
          },
          {
            name: "Volume",
            value: `vol <0-100> : Régler le volume.`,
            inline: true
          },
          {
            name: "Join",
            value: `join : Rejoins votre voice channel.`,
            inline: true
          },
          {
            name: "Leave",
            value: `leave : Quitte voice channel.`,
            inline: true
          }
       ],
        timestamp: new Date(),
      footer: {
        text: "©Steve & Co"
      }
      }
  });
}

function help(msg){
   let HelpEmbed = new Discord.RichEmbed()
        .setDescription("Voici la description")
        .setColor('#1CFF1C')
       	.addField('C*Administration', "Vous donne la page d'Administration")
        .addField('C*Youtube', 'Vous donneras tout concernant le Youtube Game :) ')
        .addField('C*Game', 'Vous donneras tout les jeux présent sur le bot')
        .addField('C*Image', 'Vous donneras les commandes pour avoir des images')
        .addField('C*Invite', "Vous donneras l'invitation du bot")
        .setFooter('Support Server : https://discord.gg/pcfYDMK ')
        		msg.channel.send(HelpEmbed);
   
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
          }
         ],
        timestamp: new Date(),
      footer: {
        text: "Fatality support https://discord.gg/W2uMAsZ"
      }
      }
  });
}
