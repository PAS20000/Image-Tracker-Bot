import * as Discord from 'discord.js'
import Embeds from '../../Embeds'
import { AsyncInteraction } from "../../Interactions"

const Plans = (interaction : Discord.ChatInputCommandInteraction<Discord.CacheType>, client : Discord.Client<boolean>) => {
    AsyncInteraction({
        interaction,
        commandName : 'plans',
        method : async () => {
            const PlansEmbed = await Embeds.Plans(client)
            return interaction.reply({ embeds : [PlansEmbed] })
        }
    })
}

export default Plans