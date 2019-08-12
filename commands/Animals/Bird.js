module.exports = new (class cmd {
    constructor() {
        this.name = "bird";
        this.category = "animals";
        this.help = "Bird Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["pássaro", "passaro"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('http://random.birb.pw/tweet/', function (error, response, body) {
            //var api = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":bird: Bird")
                .setImage(`http://random.birb.pw/img/${body}`)
                .setColor('RANDOM')
            message.channel.send(embed)
        })
    }
})