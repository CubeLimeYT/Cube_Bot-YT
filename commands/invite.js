const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
        if(message.channel.type === 'dm'){
            message.author.createDM().then(channel => {
        let InviteEmbed = new Discord.RichEmbed()
        .setDescription("Voici le lien pour m'inviter dans ton serveur :wink: ")
        .setColor('#5EGT5B')
        .addField('https://discordapp.com/oauth2/authorize?client_id=479022698303848459&scope=bot&permissions=2146958847',"Voilà c'est cadeau :wink: ")
        .setFooter('Voila si tu ne comprend vraiment rien contacte moi ==> Cube_Lime YT#3607')
        channel.send(InviteEmbed);
            })
        }else{
        let InviteEmbed = new Discord.RichEmbed()
        .setDescription("Voici le lien pour m'inviter dans ton serveur :wink: ")
        .setColor('#5EGT5B')
        .addField('https://discordapp.com/oauth2/authorize?client_id=479022698303848459&scope=bot&permissions=2146958847',"Voilà c'est cadeau :wink: ")
        .setFooter('Voila si tu ne comprend vraiment rien contacte moi ==> Cube_Lime YT#3607')
        message.channel.send(InviteEmbed);
        }

}
module.exports.help = {
    name: "Invite",
    aliases: ["invite", "inv"]
}
