const config = require("./config.json");

module.exports = {
   'help': help,
   'music': music
}

function radio(msg){
   msg.channel.send({embed: {
               color: 0x00FF00,
               title: `Radio Help`,
               fields: [{
                  name: `${config.prefix}radio [franceinfo, nrj, rtl2, skyrock, rtl, rfm, bfm, nostalgie, mouv]`,
                  value: "Pour que le bot joue la radio en direct, PS: il faut être dans canal vocal mais le bot peut vous le rarappeler 😉",
                  inline: true
               },
               {
                  name: `${config.prefix}radio [leave/stop]`,
                  value: "Permet au bot de quitte et de stopper la radio",
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
        text: "Fatality Team"
      }
      }
  });
}

function help(msg){
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
                }],
              timestamp: new Date(),
            footer: {
              text: "Fatality support https://discord.gg/W2uMAsZ"
            }
      }
  });
}
