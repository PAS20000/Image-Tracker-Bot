import * as Discord from 'discord.js'
import { Data } from './Data'
import Slashs from './Slashs'

const Commands = {
    async init() {
        const rest = new Discord.REST({ version: '9' }).setToken(process.env.DISCORD_TOKEN as string)
        try {
            console.log('Started refreshing application (/) commands.')
            await rest.put(
            Discord.Routes.applicationGuildCommands(process.env.CLIENT_ID as string, process.env.GUILD_ID as string),
            { body: Data },
            )
            console.log('Successfully reloaded application (/) commands.')
        } catch (e) {
            return console.error(e)
        }
    },
    async actions(interaction : any) {
       Slashs(interaction)
    }
}

export default Commands