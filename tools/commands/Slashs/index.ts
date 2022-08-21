import * as Discord from 'discord.js'
import Plans from "./Plans";

const Slashs = (interaction : any, client : Discord.Client<boolean>) => {

    return [
        Plans(interaction, client)
    ]
}

export default Slashs