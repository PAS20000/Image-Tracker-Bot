import * as Discord from 'discord.js'
import dotenv from 'dotenv'
import Commands from '../Tools/Commands'
import Embeds from '../Tools/Commands/Embeds'

dotenv.config()


const client = new Discord.Client({
    intents : [
        'MessageContent',
        'GuildMessages',
        'DirectMessages',
        'DirectMessageTyping',
        'Guilds',
        'GuildMembers'
    ]
})

client.on('ready', () => {
    console.log('[👾Start👾]...')
    console.log(`[Logged in as ${client.user?.tag}!]`)
    Commands.init()
})

client.on('guildMemberAdd', async (member) => {
    const PlansEmbed = await Embeds.Plans(client)
    const DmChannel = await member.user.createDM(true)
    const welcomeChannel = client.channels.cache.get('1009000091702530078') as Discord.TextChannel
    DmChannel.send({ embeds : [PlansEmbed] })
    welcomeChannel.send(member.user.tag)
})

client.on('interactionCreate', async (interaction) => {
    Commands.actions(interaction, client)
})

client.login(process.env.DISCORD_TOKEN)