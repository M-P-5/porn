module.exports = new (class cmd {
    constructor() {
        this.name = "keta";
        this.category = "hentai"
        this.help = "Hentai Keta";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        client.external.superagent.get('https://nekos.life/api/v2/img/keta')
            .end((err, response) => {
                const lewdembed = new client.external.Discord.RichEmbed()
                    .setTitle("Keta")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                message.channel.send(lewdembed);
            })
    }
})