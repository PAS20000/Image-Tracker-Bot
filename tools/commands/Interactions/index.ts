import * as Discord from 'discord.js'
import { SlashCommands } from "../Data"

type AsyncInteractions = {
    interaction : Discord.ChatInputCommandInteraction<Discord.CacheType>
    commandName : SlashCommands
    method : () => Promise<any>
}

type SyncInteractions = {
    interaction : Discord.ChatInputCommandInteraction<Discord.CacheType>
    commandName : SlashCommands
    method : () => any
}

const AsyncInteraction = async ({
    interaction,
    commandName,
    method
} : AsyncInteractions) => {
    if (!interaction.isCommand()) return

    if (interaction.commandName === commandName) {
        await method()
    }
}

const SyncInteraction = ({
    interaction,
    commandName,
    method
} : SyncInteractions) => {
    if (!interaction.isCommand()) return

    if (interaction.commandName === commandName) {
        method()
    }
}

export {
    AsyncInteraction,
    SyncInteraction
}