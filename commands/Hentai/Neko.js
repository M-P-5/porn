module.exports = new (class cmd {
    constructor() {
        this.name = "neko";
        this.category = "hentai"
        this.help = "Hentai Neko";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args}){
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            client.external.superagent.get(`https://nekos.life/api/v2/img/nsfw_neko_gif`)
                .end((err, response) => {
                    const lewdembed = new client.external.Discord.RichEmbed()
                    .setTitle("Neko Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
})