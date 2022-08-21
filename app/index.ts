import * as Discord from 'discord.js'
import dotenv from 'dotenv'
import Commands from '../Tools/Commands'

dotenv.config()


const client = new Discord.Client({
    intents : [
        'MessageContent',
        'GuildMessages',
        'GuildMessageTyping',
        'DirectMessages'
    ]
})

client.on('ready', () => {
    console.log('[👾Start👾]...')
    console.log(`[Logged in as ${client.user?.tag}!]`)
    Commands.init()
})

client.on('interactionCreate',async (interaction) => {
    Commands.actions(interaction)
})

client.login(process.env.DISCORD_TOKEN)