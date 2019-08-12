module.exports = new (class cmd {
    constructor() {
        this.name = "thigh";
        this.category = "porn"
        this.help = "Porn Thigh";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["thighs"]
    }
    run({ message, buildMessage, client, args }) {
        if (message.channel.nsfw === true) {
            client.external.superagent.get('https://nekobot.xyz/api/image')
                .query({ type: 'thigh' })
                .end((err, response) => {
                    let embed = new client.external.Discord.RichEmbed()
                        .setTitle("Thigh Porn")
                        .setImage(response.body.message)
                        .setColor('RANDOM')
                    message.channel.send(embed)
                });
        } else {
            message.channel.send("este nao e um  canal de NSFW!")
        }
    }
})