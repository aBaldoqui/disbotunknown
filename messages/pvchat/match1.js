const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

const initMsg = new EmbedBuilder()
    .setColor(0x0099FF)
    .setTitle('Você está agora conversando com uma pessoa aleatória, diga oi')
    .setDescription('Vocês dois falam a mesma lingua')

const initrow = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId(' ')
            .setLabel('parar')
            .setStyle(ButtonStyle.Primary),
    );

module.exports =
{
    embeds: [initMsg],
    components: [initrow]
}
