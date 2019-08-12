module.exports = new (class cmd {
    constructor() {
        this.name = "panda";
        this.category = "animals";
        this.help = "Panda Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://animals.anidiots.guide/panda', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":panda_face: Panda")
                .setImage(api.link)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})