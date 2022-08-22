import * as Discord from 'discord.js'
import Avatar from './Avatar';
import Plans from "./Plans";

const Slashs = (interaction : any, client : Discord.Client<boolean>) => {

    return [
        Plans(interaction, client),
        Avatar(interaction)
    ]
}

export default Slashs