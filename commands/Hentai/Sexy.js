module.exports = new (class cmd {
    constructor() {
        this.name = "hsexy";
        this.category = "hentai"
        this.help = "Hentai Sexy";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["lewd", "lewdk", "lewdkemo"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        var subreddits = [
            "https://nekos.life/api/v2/img/lewd",
            "https://nekos.life/api/v2/img/lewdk",
            "https://nekos.life/api/v2/img/lewdkemo"
        ]
        var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
        client.external.superagent.get(sub)
            .end((err, response) => {
                const lewdembed = new client.external.Discord.RichEmbed()
                    .setTitle("Sexy")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                message.channel.send(lewdembed);
            })
    }
})