import * as Discord from 'discord.js'
import { AsyncInteraction } from "../../Interactions"

const Plans = (interaction : Discord.ChatInputCommandInteraction<Discord.CacheType>) => {
    AsyncInteraction({
        interaction,
        commandName : 'plans',
        method : async () => {
            return interaction.reply('Plans')
        }
    })
}

export default Plans