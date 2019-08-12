module.exports = new (class cmd {
    constructor() {
        this.name = "furry";
        this.category = "others";
        this.help = "Cat Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args}){
        client.external.randomPuppy("furry")
            .then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Furry")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
})