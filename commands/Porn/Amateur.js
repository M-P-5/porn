module.exports = new (class cmd {
    constructor() {
        this.name = "amateur";
        this.category = "porn"
        this.help = "Porn RealGirl";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["realgirls", "rgirl", "realgirl", "rg", "rgirls"]
    }
    run({ message, buildMessage, client, args }) {
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            var subreddits = [
                'RealGirls',
                'amateur',
                'gonewild'
            ]
            var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
            client.external.randomPuppy(sub).then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("RealGirls")
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            });
        }
    }
})