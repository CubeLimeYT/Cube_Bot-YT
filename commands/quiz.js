const Discord = require('discord.js');

// Command Handler
exports.run = async (client, message, args) => {

    let quiz = [
        { q: 'Quel est la couleur du ciel ?', a: ['pas de couleur', 'invisible'] },
        { q: 'Nommez une marque de boisson gazeuse', a: ['pepsi', 'coke', 'rc', '7up', 'sprite', 'mountain dew'] },
        { q: 'Nommez un langage de programmation.', a: ['actionscript', 'coffescript', 'c', 'c++', 'c#', 'visual basic', 'perl', 'javascript', 'dotnet', 'crystal', 'lua', 'go', 'python', 'rust', 'ruby', 'java'] },
        { q: 'Qui sont mes créateurs', a: ['Cube et Steven'] }
        
    ];
    let options = {
        max: 1,
        time: 30050, //30050 = 30 seconds and a half ms
        errors: ['time'],
    };

    let item = quiz[Math.floor(Math.random() * quiz.length)];
    await message.channel.send(item.q);
    try {
        let collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
        let winnerMessage = collected.first();
        return message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor(`Gagnant: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                .setTitle(`Reponse correct: \`${winnerMessage.content}\``)
                .setFooter(`Question: ${item.q}`)
                .setColor('RANDOM')
        })

    } catch (_) {
        return message.channel.send({
            embed: new Discord.RichEmbed()
                .setAuthor('Personne n\'a eu la reponse a temps!')
                .setTitle(`Reponses correcte(s): \`${item.a}\``)
                .setFooter(`Question: ${item.q}`)
        })

    }

} 

module.exports.help = {
    name: "quiz"
}