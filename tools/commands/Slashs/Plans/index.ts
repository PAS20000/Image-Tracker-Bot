import * as Discord from 'discord.js'
import Create from '../../../Create'
import { AsyncInteraction } from "../../Interactions"

const Plans = (interaction : Discord.ChatInputCommandInteraction<Discord.CacheType>) => {
    const me = interaction.client.users.cache.find(user => user.id === '445344982031794187')
    AsyncInteraction({
        interaction,
        commandName : 'plans',
        method : async () => {
            const PlansEmbed = Create.Embed({
                author : {
                    name : `${me?.tag} 👑`,
                    iconURL : me?.displayAvatarURL(),
                },
                title : 'Patreon Plans',
                description : 'Information about available plans',
                fields : [
                    {
                        name : `
                            ⬇️ Web Store Free
                        `,
                        value : `
                           [ **Download Image Tracker extension**](https://chrome.google.com/webstore/detail/image-tracker/iepiihembcjdlhlncojlkmflncgehpdk?hl=pt-BR&authuser=0)
                        `
                    },
                    {
                        name : `
                            💎 *Diamond* $ 14.99
                        `,
                        value : `
                            **Unlimited Storage**
                            [Become a **Diamond** member](https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359)
                        `,
                        inline : true
                    },
                    {
                        name : `
                            💚 *Platinum* $ 9.99
                        `,
                        value : `
                            **Unlimited Storage**
                            [Become a **Platinum** member](https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359)
                        `
                    },
                    {
                        name : `
                            📀 *Gold* $ 7.99
                        `,
                        value :`
                            **Unlimited Storage**
                            [Become a **Gold** member](https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359)
                        `
                    }
                ],
                url : 'https://www.patreon.com/user?u=77769234',
                thumbnail : { url : 'https://taplink.st/a/5/4/a/6/839799.png?3' },
                color: 15548997,
                image : { url : 'https://c10.patreonusercontent.com/4/patreon-media/p/campaign/9050919/c6d45e729ff34dcd942b2a502809b232/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/7.png?token-time=1662249600&token-hash=F5r_uky6mZhUA6fosR2PIJHNJar5NQH6VKRxaYaJQB8%3D' },
                footer : { 
                    text : `
                        ...
                    `,
                },
               
            })
            console.log(interaction.guild?.roles)
            return interaction.reply({ embeds : [PlansEmbed] })
        }
    })
}

export default Plans