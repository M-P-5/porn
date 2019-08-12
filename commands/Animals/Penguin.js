module.exports = new (class cmd {
    constructor() {
        this.name = "penguin";
        this.category = "animals";
        this.help = "Panda Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["pinguim"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://animals.anidiots.guide/penguin', function (error, response, body) {
            var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":penguin: Penguin")
                .setImage(api.link)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})