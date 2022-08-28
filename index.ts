import * as Discord from 'discord.js'
import dotenv from 'dotenv'
import Commands from './Tools/Commands'
import Embeds from './Tools/Commands/Embeds'
import ThrowError from './Tools/ThrowError'

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
    Commands.init()
})

client.on('guildMemberAdd', async (member) => {
    const PlansEmbed = await Embeds.Plans(client)
    const WelcomeEmbed = await Embeds.Welcome(client, member.user)
    const welcomeChannel = client.channels.cache.get('1009000091702530078') as Discord.TextChannel
    const commandChannel = await client.channels.fetch('1010182129621147752') as Discord.TextChannel

    await member.send({ 
        embeds : [
            PlansEmbed
        ] 
    }).catch(async (e) => {
        ThrowError({
            describe : `member send menssage error : ${e}`
        })
        await commandChannel.send({
            embeds : [
                PlansEmbed
            ],
            content: `<@${member.user.id}>`
        })
    })

   await welcomeChannel.send({
        embeds : [
            WelcomeEmbed
        ]
    }).catch((e) => {
        ThrowError({
            describe : `Welcome channel send menssage error : ${e}`
        })
    })
})

client.on('interactionCreate', async (interaction) => {
    Commands.actions(interaction, client)
})

client.login(process.env.DISCORD_TOKEN)