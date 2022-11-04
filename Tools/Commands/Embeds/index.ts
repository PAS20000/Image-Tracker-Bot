import * as Discord from 'discord.js'
import Create from '../../Create'

const Embeds = {
    async Welcome(client : Discord.Client<boolean>, user : Discord.User) {
        const guild = await client.guilds.fetch('951566848414089297')
        const WelcomeEmbed = Create.Embed({
            author : {
                name : `${guild?.name}`,
                iconURL : guild?.iconURL() as string
            },
            title : `
                Welcome to the server
            `,
            description : `
                🎉 **<@${user.id}>**, with you we are now **${guild.memberCount}** members 🎉!
            `,
            thumbnail : {
                url : user.displayAvatarURL()
            },
            color: 15548997,
        })

        return WelcomeEmbed
    },
    async Plans(client : Discord.Client<boolean>) {
        const me = await client.users.fetch('445344982031794187')
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
                       [**Download Image Tracker extension**](https://chrome.google.com/webstore/detail/image-tracker/iepiihembcjdlhlncojlkmflncgehpdk?hl=pt-BR&authuser=0)
                    `
                },
                {
                    name : `
                        💟 *Orichalcum* $ 30.00
                    `,
                    value :`
                        **Unlimited Storage**
                        [Become a **Orichalcum** member](https://www.patreon.com/join/Image_Tracker/checkout?rid=9153254)
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
                        **Limit of 700 images / web site**
                        [Become a **Platinum** member](https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359)
                    `
                },
                {
                    name : `
                        📀 *Gold* $ 7.99
                    `,
                    value :`
                        **Limit of 400 images / web site**
                        [Become a **Gold** member](https://www.patreon.com/join/Image_Tracker/checkout?rid=9007359)
                    `
                },
                {
                    name : ` 🎫 Share this server`,
                    value:'<#1010192339886669905>'
                },
                {
                    name : `🔗 links`,
                    value: `
                        [**Website**](https://www.imagetracker.org)
                        [**Patreon**](https://www.patreon.com/Image_Tracker)
                        [**Youtube**](https://www.youtube.com/channel/UCy3AmLkWwVhcjbRGQXhCkeQ)
                        [**Tik tok**](https://www.tiktok.com/@image_tracker)
                        [**Instagram**](https://www.instagram.com/imagetrackerofficial/)
                        [**Twitter**](https://twitter.com/ImageTracker)
                    `
                }
            ],
            url : 'https://www.patreon.com/Image_Tracker',
            thumbnail : { 
                url : 'https://imagetracker.org/media/utils/Logo-image-tracker-rotate.gif' 
            },
            color: 10181046,
            image : { 
                url : 'https://imagetracker.org/media/utils/banner-patreon.png' 
            },
            footer : {

                text : `
                    
                `,
            },
        })

        return PlansEmbed
    },
    Avatar(user : Discord.User) {
        const AvatarEmbed = Create.Embed({
            title : `**Avatar**`,
            description : `
                **<@${user.id}>**
            `,
            image : { 
                url : user.displayAvatarURL({ size : 2048 }) 
            },
            color: 15548997
        })

        return AvatarEmbed
    }
}

export default Embeds