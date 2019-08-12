module.exports = new (class cmd {
    constructor() {
        this.name = "search";
        this.category = "others"
        this.help = "Search";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["procurar"]
    }
    run({ message, buildMessage, client, args }) {
        //if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        let reason = args.join(" ");
		if (reason.length < 1) return message.reply('**Please enter a text!**');

        client.external.randomPuppy(reason)
            .then(url => {
                let embed = new client.external.Discord.RichEmbed()
                    .setTitle("Search: "+reason)
                    .setImage(url)
                    .setColor('RANDOM')
                message.channel.send(embed)
            })
    }
})