const { SlashCommandBuilder } = require('discord.js');
const initmsg = require("../Embed/initmsg.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('init')
		.setDescription('set this channel to bot lobby'),
	async execute(interaction) {
		await interaction.reply(initmsg);
	},
};