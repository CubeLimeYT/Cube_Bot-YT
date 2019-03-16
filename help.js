const config = require("./config.json");

module.exports = {
   'help': help,
   'music': music,
   'radio': radio
}

function radio(msg){
   msg.channel.send({embed: {
               color: 0xff0703,
               title: `Radio Help`,
               fields: [{
                  name: `${config.prefix}radio [franceinfo, nrj, rtl2, skyrock, rtl, rfm, bfm, nostalgie, mouv]`,
                  value: "Pour que le bot joue la radio en direct, PS: il faut être dans un vocal mais le bot peut vous le rappeler 😉",
                  inline: true
               },
               {
                  name: `${config.prefix}radio [leave/stop]`,
                  value: "Permet au bot de quitter et de stopper la radio",
                  inline: true
               }
               ],
                timestamp: new Date(),
            footer: {
              text: "Fatality support https://discord.me/fatalityteam"
            }
                     }
                    });
}


function music(msg){
     msg.channel.send(
        {embed: {
      color: 0xff0703,
      title: `Music Help
              ${config.prefix}music | <fonctions>
              Toute les functions:`,
      fields: [{
            name: "Play",
            value: `play <url> ou <recherche> : 
            Ajouter le(s) musiques ou la playlist à la file d'attente ▶️.`,
            inline: true
          },
          {
            name: "Skip",
            value: `skip : Passer la musique actuelle ⏭.`,
            inline: true
          },
          {
            name: "Pause",
            value: `pause : Met pause la musique ▶️.`,
            inline: true
          },
          {
            name: "Resume",
            value: `resume : Reprendre/continuer la musique ⏸.`,
            inline: true
          },
          {
            name: "Queue",
            value: `queue : Afficher la/les musique(s) de la file d'attente 🔃.`,
            inline: true
          },
          {
            name: "Purge",
            value: `purge : Éffacer la/les musique(s) de la file d'attente ⏹.`,
            inline: true
          },
          {
            name: "np",
            value: `np : Afficher le titre de la musique actuelle ⏏️.`,
            inline: true
          },
          {
            name: "Volume",
            value: `vol <0-100> : Régler le volume 🔉 🔊.`,
            inline: true
          },
          {
            name: "Join",
            value: `join : Rejoins votre salon vocal 🔵.`,
            inline: true
          },
          {
            name: "Leave",
            value: `leave : Quitte le salon vocal🔴.`,
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
                  name: "C*Utility",
                  value: `Vous donneras les commandes utiles`,
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
              text: "Fatality support https://discord.me/fatalityteam"
            }
      }
  });
}
