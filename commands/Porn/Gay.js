module.exports = new (class cmd {
    constructor() {
        this.name = "gay";
        this.category = "porn"
        this.help = "Porn Gay";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            var subreddits = [
                "nsfw_gay",
                "nsfwgay",
                "gayporn"
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
            client.external.randomPuppy(sub).then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Gay")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
        }
    }
})