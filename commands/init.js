const { SlashCommandBuilder } = require('discord.js');
const premessages = require("../messages/index.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('init')
		.setDescription('set this channel to bot lobby'),
	async execute(interaction) {
		await interaction.reply(premessages.searchmsg);
	},
};