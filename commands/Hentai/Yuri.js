module.exports = new (class cmd {
    constructor() {
        this.name = "yuri";
        this.category = "hentai"
        this.help = "Hentai Yuri";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args}){
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            client.external.randomPuppy("Yuri").then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Yuri")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }
})