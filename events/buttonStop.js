const dotenv = require('dotenv');
dotenv.config();

const { Events,ChannelType, ThreadAutoArchiveDuration } = require('discord.js');

const premessages = require('../messages/index.js')

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (!interaction.isButton()) return;
        if (interaction.message.author.id != process.env.clientId) return
        if (interaction.message.components[0].components[0].data.label == "parar"){
            interaction.update(premessages.pvchat[1])
        } else if (interaction.customId == "exit"){
            
        }
        
    }
}