module.exports = new (class cmd {
    constructor() {
        this.name = "milf";
        this.category = "porn"
        this.help = "Porn Milf";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")

        var subreddits = [
            'milf',
            'amateur_milfs',
            'NotTeenNotMilf'
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

        client.external.randomPuppy(sub)
            .then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Milf Porn")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
})