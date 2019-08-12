module.exports = new (class cmd {
    constructor() {
        this.name = "asian";
        this.category = "porn"
        this.help = "Porn Asian";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["asianbabes", "asianhotties"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'AsianHotties',
            'juicyasians',
            'asianbabes'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        client.external.randomPuppy(sub)
            .then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Asian Porn")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
})