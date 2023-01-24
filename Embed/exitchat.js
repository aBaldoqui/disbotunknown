const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const exitmsg = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Estamos procurando um novo chat para você')
    .setDescription('Saia dessa conversa')

const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('exit')
            .setLabel('Saia')
            .setStyle(ButtonStyle.Primary),
    );



module.exports =
{
    embeds: [exitmsg],
    components: [row]
}

