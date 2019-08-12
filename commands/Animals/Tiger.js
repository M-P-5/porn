module.exports = new (class cmd {
    constructor() {
        this.name = "tiger";
        this.category = "animals";
        this.help = "Tiger Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["tigre"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://animals.anidiots.guide/tiger', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":tiger: Tiger")
                .setImage(api.link)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})