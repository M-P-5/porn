module.exports = new (class cmd {
    constructor() {
        this.name = "dog";
        this.category = "animals";
        this.help = "Dog Image";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["doge","cachorro"]
    }
    run({ message, buildMessage, client, args }) {
        client.external.request('https://dog.ceo/api/breeds/image/random', function (error, response, body) {
            let image = JSON.parse(body)
            let embed = new client.external.Discord.RichEmbed()
                .setTitle(":dog: Dog")
                .setImage(image.message)
                .setColor('RANDOM')
            message.channel.send(embed)
        });
    }
})