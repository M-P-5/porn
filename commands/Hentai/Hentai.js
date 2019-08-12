module.exports = new (class cmd {
    constructor() {
        this.name = "hentai";
        this.category = "hentai"
        this.help = "Hentai 1.0";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args}){
        if (!message.channel.nsfw) return message.channel.send('Use este comando em um canal NSFW!')
        client.external.superagent.get('https://nekos.life/api/v2/img/hentai')
            .end((err, response) => {
                const lewdembed = new client.external.Discord.RichEmbed()
                    .setTitle("Hentai")
                    .setImage(response.body.url)
                    .setColor(`RANDOM`)
                message.channel.send(lewdembed);
            })
    }
})