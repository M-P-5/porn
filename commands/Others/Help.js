module.exports = new (class cmd {
    constructor() {
        this.name = "help";
        this.category = "others"
        this.help = "see my commands";
        this.cooldown = 2;
        this.cdMessage = "Wait 2 seconds to use this again";
        this.aliases = ["cmds", "commands", "ayuda"]
    }
    run({ message, buildMessage, client, args }) {
        /*buildMessage({
             description:client.commands.map(a => "`"+a.name[a.name.length-1]+"("+a.help+")`").join(", ")
         }).send()*/
        let embed = new client.external.Discord.RichEmbed()
        .addField("<a:Dog:532963598767489045> Others", client.commands.filter(a => a.category == "others").map(a => "``"+a.name[a.name.length - 1]+"``").join(" | "))
        .addField(":fox: Animals", client.commands.filter(a => a.category == "animals").map(a => "``"+a.name[a.name.length - 1]+"``").join(" | "))
        .addField("<:hentai:532962268028076054> Hentai", client.commands.filter(a => a.category == "hentai").map(a => "``"+a.name[a.name.length - 1]+"``").join(" | "))
        .addField("🔞 Porn", client.commands.filter(a => a.category == "porn").map(a => "``"+a.name[a.name.length - 1]+"``").join(" | "))
        .setFooter("Prefix "+client.prefix+" - Created By Jayce ψ#7279","https://cdn.discordapp.com/emojis/532964141225476106.gif?v=1?size=2048")
        .setColor("602bff");
        //buildMessage( embed ).send()
        message.channel.send(embed)
        //buildMessage(embed).send()
    }
})