const dotenv = require('dotenv');
dotenv.config();

let queue = ""

const { Events,ChannelType, ThreadAutoArchiveDuration } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return;
        if (interaction.message.author.id != process.env.clientId) return
        if (interaction.customId != "search") return

        if (interaction.user.id == queue) {
            interaction.reply({ content: 'você já está aguardando um par', ephemeral: true })
            return
        }

        if (queue) {

            const user1 = await interaction.channel.threads.create({
                name: 'seu chat',
                type: ChannelType.PrivateThread,
                autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
            })
            user1.members.add(interaction.user)
            user1.send('Você é o user 1, oi')

            const user2 = await interaction.channel.threads.create({
                name: 'seu chat',
                type: ChannelType.PrivateThread,
                autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
            })

            user2.members.add(queue)
            user2.send('Você é o user 2, oi')

        } else {
            queue = interaction.user.id;
        }
    
    }
}