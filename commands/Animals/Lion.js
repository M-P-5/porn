module.exports = new (class cmd {
    constructor() {
        this.name = "lion";
        this.category = "animals";
        this.help = "Lion Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://animals.anidiots.guide/lion', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":lion_face: Lion")
                .setImage(api.link)
                .setColor('RANDOM')
                console.log(api.link)
            message.channel.send(embed)
        })
    }
})