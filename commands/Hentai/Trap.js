module.exports = new (class cmd {
    constructor() {
        this.name = "trap";
        this.category = "hentai"
        this.help = "Hentai Trap";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args}){
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            client.external.superagent.get(`https://nekos.life/api/v2/img/trap`, 'https://nekos.life/api/v2/img/futanari')
                .end((err, response) => {
                    const lewdembed = new client.external.Discord.RichEmbed()
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
})