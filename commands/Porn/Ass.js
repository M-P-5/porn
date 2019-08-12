module.exports = new (class cmd {
    constructor() {
        this.name = "ass";
        this.category = "porn"
        this.help = "Porn Ass";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["bundas"]
    }
    run({ message, buildMessage, client, args }) {
        var max = 5511;
        var min = 1000;
        var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
        var MathLoL = Math.round(MathRan);
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Ass (Bundas)")
                    .setImage("http://media.obutts.ru/butts_preview/0" + MathLoL + ".jpg")
                    .setColor('RANDOM')
                message.channel.send(embed)
        }
    }
})