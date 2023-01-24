const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');


const stopedmsg = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Você saiu do chat')
    .setDescription('procure uma nova conversa')

const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('search')
            .setLabel('próximo')
            .setStyle(ButtonStyle.Primary),
    );


module.exports =
{
    embeds: [stopedmsg],
    components: [row]
}

