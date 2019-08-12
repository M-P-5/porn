module.exports = new (class cmd {
    constructor() {
        this.name = "owl";
        this.category = "animals";
        this.help = "Owl Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["coruja"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('http://pics.floofybot.moe/owl', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":owl: Owl Coruja")
                .setImage(api.image)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})