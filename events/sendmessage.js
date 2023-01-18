const { Events } = require('discord.js');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
	name: Events.MessageCreate,
	async execute(messageinteraction) {
		if (await messageinteraction.channel.type != 12) return
		if (messageinteraction.author.bot) return
		if (messageinteraction.content == "") return

		const messages = await messageinteraction.channel.messages.fetch()
		const firstmessage = messages
			.filter(m => m.author.id === process.env.clientId)
			.filter(m => m.content == "").toJSON()[0]
		if (!firstmessage) return
		try {
			const pairId = firstmessage.components[0].components[0].data.custom_id
			const pairChannel = await messageinteraction.guild.channels.fetch(pairId)

			pairChannel.send(messageinteraction.content)
		}catch(err){}
		
	},
};