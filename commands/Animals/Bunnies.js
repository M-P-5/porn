module.exports = new (class cmd {
    constructor() {
        this.name = "bunnie";
        this.category = "animals";
        this.help = "Bunnie Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["bunnies","coelho","coelhos"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://api.bunnies.io/v2/loop/random/?media=gif,png', function (error, response, body) {
            let image = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle("Bunnie")
                .setImage(image.media.gif)
                .setColor('RANDOM')
            message.channel.send(embed)
        });
    }
})