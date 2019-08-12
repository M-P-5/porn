module.exports = new (class cmd {
    constructor() {
        this.name = "uniform";
        this.category = "porn"
        this.help = "Porn Unirform";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["military"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'MilitaryGoneWild',
            'sexyuniforms'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        client.external.randomPuppy(sub)
            .then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Uniform Porn")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
})