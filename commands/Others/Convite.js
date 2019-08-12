module.exports = new (class cmd {
    constructor() {
        this.name = "invite";
        this.category = "others"
        this.help = "See my invite!";
        this.cooldown = 2;
        this.cdMessage = "Wait 2 seconds to use this again";
        this.aliases = ["convite"]
    }
    run({ message, buildMessage, client, args}){
        message.channel.send(`${message.author} I sent it in your private!! >.<`)
        message.author.send(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958591`)
    }
})