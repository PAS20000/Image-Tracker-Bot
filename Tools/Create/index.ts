import * as Discord from 'discord.js'
interface ICodeBlock {
    value : string 
    type ?: string
}
const Create = {
    Embed(options : Discord.APIEmbed | Discord.EmbedData | undefined) : Discord.EmbedBuilder {
        const embed = new Discord.EmbedBuilder(options)
    
        return embed
    },
    CodeBlock({
        value, 
        type
    } : ICodeBlock) {
        return"```" + type + 
        `
        ${value}
        ` 
        + "```"
    }
}

export default Create