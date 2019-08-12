module.exports = new (class cmd {
    constructor() {
        this.name = "duck";
        this.category = "animals";
        this.help = "Duck Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["pato"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://random-d.uk/api/v1/random?type=png', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle("Duck")
                .setImage(api.url)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})