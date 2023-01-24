const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const initMsg = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Encontre um desconhecido para conversar')
    .setDescription('Clique no botão para entrar na fila de um bate papo com alguém que você ainda não conhece')

const row = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('search')
            .setLabel('procurar🔎')
            .setStyle(ButtonStyle.Primary),
    );

module.exports = {
    embeds: [initMsg],
    components: [row]
}
