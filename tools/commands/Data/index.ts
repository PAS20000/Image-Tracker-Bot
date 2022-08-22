type SlashCommands = [
    'plans',
    'avatar'
][number]

type DataParams = {
    name : SlashCommands,
    description : string
}

const Data : DataParams[] = [
    {
        name : 'plans',
        description : 'Plans information'
    },
    {
        name : 'avatar',
        description : 'Show @user avatar'
    }
]

export {
    Data,
    SlashCommands
}