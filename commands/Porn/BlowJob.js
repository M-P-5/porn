module.exports = new (class cmd {
    constructor() {
        this.name = "blowjob";
        this.category = "porn"
        this.help = "Porn BlowJob";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["bj", "blowjb", "bjob"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            client.external.randomPuppy("blowjob").then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("BlowJob (Mamada)")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
        }
    }
})