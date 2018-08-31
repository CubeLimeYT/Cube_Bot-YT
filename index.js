const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function () {
    bot.user.setGame("C*help")
})

bot.on('message', function (message) {
    if (message.content === 'C*help') {
        let testEmbed = new Discord.RichEmbed()
        .setDescription("Voici la description")
        .setColor('#1CFF1C')
        .addField('C*Administration', "Vous donne la page d'Administration")
        .addField('C*Youtube', 'Vous donneras tout concernant le Youtube Game :) ')
        .addField('C*Game', 'Vous donneras tout les jeux présent sur le bot')
        .addField('C*Image', 'Vous donneras les commandes pour avoir des images')
        .addField('C*Invite', "Vous donneras l'invitation du bot")
        .setFooter('Support Server : https://discord.gg/pcfYDMK ')
        message.channel.send(testEmbed);
    }

    if (message.content === 'C*Administration') {
        let adminEmbed = new Discord.RichEmbed()
        .setDescription('Voici la liste des commandes pour les administrateur')
        .setColor('#6GFH6D')
        .addField('C*server', 'Vous donneras les infos sur le serveur')
        .setFooter('Voila')
        message.channel.send(adminEmbed);
    }

    if (message.content === 'C*Image') {
        let catEmbed = new Discord.RichEmbed()
        .setDescription('Voici les commandes possible pour obtenir des images :wink: ')
        .setColor('#6D5G1R')
        .addField("C*Icat", "Vous donneras des images de chat :joy: ")
        .addField("C*Idog", "Vous donneras des images de chien :joy: ")
        .addField("C*Inude","Vous enverras un nude en privé :wink: ")
        .setFooter("Si tu as des suggestions d'images a rajouter fait moi en part  ")
        message.channel.send(catEmbed);
    }


    if (message.content === 'C*Server') {
        let server_name = message.guild.name
        let server_size = message.guild.members.size
        message.channel.send('Serveur : ' + server_name + '\nPersonnes : ' + server_size);
    }

    if (message.content === 'C*Youtube') {
        let youtubeEmbed = new Discord.RichEmbed()
        .setDescription("Pense à t'abonner et à liké")
        .setColor('#5DKK6L')
        .addField('Voilà la chaîne de Cube_Lime YT', 'https://www.youtube.com/channel/UCKwjZKxnVGF2WUNPEHc0RVg')
        .addField('Viens aussi sur son serveur discord', 'https://discord.gg/pcfYDMK')
        .setFooter("Allez c'est gratuit pour le moment")
        message.channel.send(youtubeEmbed);
    }

    if (message.content === 'C*Invite') {
        let InviteEmbed = new Discord.RichEmbed()
        .setDescription("Voici le lien pour m'inviter dans ton serveur :wink: ")
        .setColor('#5EGT5B')
        .addField('https://discordapp.com/oauth2/authorize?client_id=479022698303848459&scope=bot&permissions=2146958847',"Voilà c'est cadeau :wink: ")
        .setFooter('Voila si tu ne comprend vraiment rien contacte moi ==> Cube_Lime YT#3607')
        message.channel.send(InviteEmbed);
    }

    if (message.content === 'C*Icat') {
        number = 50;
        imageNumber = Math.floor (Math.random() * (number - 1 + 1)) + 1;
        message.channel.send ( {files: ["./imagescat/" + imageNumber + ".jpeg"]} )
    }

    if (message.content === 'C*Inude') {
        message.channel.send("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKegUKwwAgFeEROseg6eJzgCTyvosxi58u-IRmHZ8TWygrGgxl")
        message.reply("éspèce de cochon :joy: ")
    }

    if (message.content === 'C*8Iperles') {
        number = 5;
        imageNumber = Math.floor (Math.random() * (number - 1 +1)) + 1;
        message.channel.send ( {files: ["./imagesperle/" + imageNumber + ".JPG"]} ) 
    }

  
});

   

bot.login(process.env.token);
