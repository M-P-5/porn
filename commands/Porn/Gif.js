module.exports = new (class cmd {
    constructor() {
        this.name = "gif";
        this.category = "porn"
        this.help = "Porn Gif";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["giff", "rgif"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            const subreddits = [
                "NSFW_GIF",
                "nsfw_gifs",
                "porninfifteenseconds",
                "60FPSPorn",
                "porn_gifs",
                "nsfw_Best_Porn_Gif",
                "LipsThatGrip",
                "adultgifs"
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

            client.external.randomPuppy(sub).then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Gif Porn")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
        }
    }
})