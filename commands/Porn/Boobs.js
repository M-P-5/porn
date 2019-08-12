module.exports = new (class cmd {
    constructor() {
        this.name = "boobs";
        this.category = "porn"
        this.help = "Porn Boobs";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["bundas"]
    }
    run({ message, buildMessage, client, args }) {
        var max = 13440;
        var min = 10000;
        var MathRan = Math.floor(Math.random() * (max - min + 0)) + min;
        var MathLoL = Math.round(MathRan);
        if (!message.channel.nsfw) {
            message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        } else {
            let embed = new client.external.Discord.RichEmbed()
                .setTitle("Boobs (Peitos)")
                .setImage("http://media.oboobs.ru/boobs_preview/" + MathLoL + ".jpg")
                .setColor('RANDOM')
            message.channel.send(embed)
        }
    }
})