const dotenv = require('dotenv');
dotenv.config();

let queue = ""

const { Events,ChannelType, ThreadAutoArchiveDuration } = require('discord.js');

const firstchatmsg = require('../Embed/firstpvmessage')

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

            const user2 = await interaction.channel.threads.create({
                name: 'seu chat',
                type: ChannelType.PrivateThread,
                autoArchiveDuration: ThreadAutoArchiveDuration.OneHour,
            })

            user1.members.add(interaction.user)
            user2.members.add(queue)

            firstchatmsg.components[0].components[0].data.custom_id = user2.id 
            user1.send(firstchatmsg)

            firstchatmsg.components[0].components[0].data.custom_id = user1.id        
            user2.send(firstchatmsg)

        } else {
            queue = interaction.user.id;
            interaction.reply({content:"você entrou na fila", ephemeral: true})
        }
    
    }
}