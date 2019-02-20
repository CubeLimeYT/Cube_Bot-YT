const config = require('./config.json')

module.exports = {
    'help': help,
    'music': music,
    'ban': ban,
    'kick': kick
}

function kick(msg){
  msg.channel.send(
        {embed: {
      color: 0x00FF00,
      title: `Kick`,
      fields: [{
            name: "Kick",
            value: `${config.prefix}kick <mention> [options]
            `,
            inline: true
          },
          {
            name: "Mention",
            value: `Kick l'utilisateur mantioner.`,
            inline: true
          },
          {
            name: "Options",
            value: `[--reason <reason>] : Spécifié la raison du kick de l'utilisateur.`,
            inline: true
          },
          {
            name: "Important",
            value: `Vous ne pouvez pas kick un utilisateur avec un rôle supérieure.`,
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

 
function ban(msg){
  msg.channel.send(
        {embed: {
      color: 0x00FF00,
      title: `Ban`,
      fields: [{
            name: "Ban",
            value: `${config.prefix}ban <mention> [options] 
            Ban l'utilisateur mantionné.`,
            inline: true
          },
          {
            name: "Mention",
            value: "mantionner l'utilisateur .",
            inline: true
          },
          {
            name: "Options",
            value: `[--days <number>]   : Supprimer l'historique des messages de l'utilisateur
                    [--reason <reason>] : Spécifié la raison du ban de l'utilisateur.`,
            inline: true
          },
          {
            name: "Important",
            value: `Vous ne pouvez pas ban un utilisateur avec un rôle supérieure.`,
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
  msg.channel.send(
        {embed: {
      color: 0x00FF00,
      title: `${config.prefix}help [command]`,
      fields: [{
            name: "Help",
            value: `help : Affiche la page de commande. Passer une commande pour plus d'informations.`,
          }
       ],
        timestamp: new Date(),
      footer: {
        text: "©Steve & Co"
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
        text: "©Steve & Co"
      }
      }
  });
}
