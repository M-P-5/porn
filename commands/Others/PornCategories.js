module.exports = new (class cmd {
    constructor() {
        this.name = "categories";
        this.category = "others";
        this.help = "Porn Categories";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["gato"]
    }
    run({ message, buildMessage, client, args}){
        client.external.request('https://api.redtube.com/?data=redtube.Categories.getCategoriesList&output=json', function (error, response, body) {
            var categories = JSON.parse(body).categories
            message.channel.send("```css\n"+categories.map(a => a.category).join(' | ')+"```")
        });
    }
})