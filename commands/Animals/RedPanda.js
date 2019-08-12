module.exports = new (class cmd {
    constructor() {
        this.name = "redpanda";
        this.category = "animals";
        this.help = "Panda Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://animals.anidiots.guide/red_panda', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":panda_face: RedPanda")
                .setImage(api.link)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})