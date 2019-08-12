module.exports = new (class cmd {
    constructor() {
        this.name = "shiba";
        this.category = "animals";
        this.help = "Shiba Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["shibes"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('http://shibe.online/api/shibes', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle("Shiba")
                .setImage(api[0])
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})