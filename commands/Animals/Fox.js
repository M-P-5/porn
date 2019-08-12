module.exports = new (class cmd {
    constructor() {
        this.name = "fox";
        this.category = "animals";
        this.help = "Fox Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://randomfox.ca/floof/', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":fox: Fox")
                .setImage(api.image)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})