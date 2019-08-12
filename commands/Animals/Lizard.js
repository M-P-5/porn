module.exports = new (class cmd {
    constructor() {
        this.name = "lizard";
        this.category = "animals";
        this.help = "Lizard Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://nekos.life/api/v2/img/lizard', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle("Lizard")
                .setImage(api.url)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})