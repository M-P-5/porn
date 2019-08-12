module.exports = new (class cmd {
    constructor() {
        this.name = "cat";
        this.category = "animals";
        this.help = "Cat Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["gato"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://aws.random.cat/meow', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle("Cat")
                .setImage(api.link)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})