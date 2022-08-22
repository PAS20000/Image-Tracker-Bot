import * as Discord from 'discord.js'
import Embeds from '../../Embeds'
import { AsyncInteraction } from "../../Interactions"

const Avatar = (interaction : Discord.ChatInputCommandInteraction<Discord.CacheType>) => {
   
    AsyncInteraction({
        interaction,
        commandName : 'avatar',
        method : async () => {
            const user = interaction.user
            const AvatarEmbed = Embeds.Avatar(user)
            return interaction.reply({ embeds : [AvatarEmbed] })
        }
    })
}

export default Avatar