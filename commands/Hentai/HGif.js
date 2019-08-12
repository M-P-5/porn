module.exports = new (class cmd {
    constructor() {
        this.name = "hgif";
        this.category = "hentai"
        this.help = "Hentai Gif";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args}){
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
        client.external.superagent.get(`https://nekos.life/api/v2/img/Random_hentai_gif`)
            .end((err, response) => {
                const lewdembed = new client.external.Discord.RichEmbed()
                    .setTitle("Hentai Gif")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                message.channel.send(lewdembed);
            })
    }
})