module.exports = new (class cmd {
    constructor() {
        this.name = "hblowjob";
        this.category = "hentai"
        this.help = "Hentai BlowJob";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["hbj", "hblowjb", "hbjob"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            client.external.superagent.get(`https://nekos.life/api/v2/img/bj`)
                .end((err, response) => {
                    const lewdembed = new client.external.Discord.RichEmbed()
                        .setTitle("BlowJob Hentai")
                        .setImage(response.body.url)
                        .setColor(`RANDOM`)
                    message.channel.send(lewdembed);
                })
        }
    }
})