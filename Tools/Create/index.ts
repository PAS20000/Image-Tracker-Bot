import * as Discord from 'discord.js'

const Create = {
    Embed(options : Discord.APIEmbed | Discord.EmbedData | undefined) : Discord.EmbedBuilder {
        const embed = new Discord.EmbedBuilder(options)
       
        return embed
    }
}

export default Create