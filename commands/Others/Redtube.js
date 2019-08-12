module.exports = new (class cmd {
    constructor() {
        this.name = "redtube";
        this.category = "others";
        this.help = "Redtube Search";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = ["sredtube","searchredtube","sr"]
    }
    run({ message, buildMessage, client, args}){
        if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")
        let reason = args.slice(0).join(' ');
        if (!reason) {
            let embed = new client.external.Discord.RichEmbed()
                .setDescription(":no_entry_sign: Missing Args\n" + client.prefix + "redtube <tag>");
            return message.reply(embed);
        }
        var msg = ''
        client.external.request('https://api.redtube.com/?data=redtube.Videos.searchVideos&output=json&search=' + args.join('+').substring(0, 100), function (error, response, body) {
            var categories = JSON.parse(body).videos
            var maximo = categories.length
            if(maximo > 18) {maximo = 18}
            for (var i = 0; i < maximo; i++) {
                msg += "[ " + (i + 1) + " ]" + categories[i].video.title + " = " + categories[i].video.duration + "\n"
            }
            message.delete();
            const filter = m => m.author.id == message.author.id;
            message.channel.send("Selecione um Número do 1 ao "+maximo+"!\n```css\n" + msg + "```").then(function (sending) {
                message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
                    .then(collected => {
                        var Escolhido = collected.first().content
                        sending.delete();
                        let numero = parseInt(Escolhido)
                        var open = true
                        if (numero < 1) {
                            open = false
                        } else if (numero > maximo) {
                            open = false
                        } else if (isNaN(numero)) {
                            open = false
                        };
                        if (open == true) {
                            let embed = new client.external.Discord.RichEmbed()
                                .setColor(`#ec97ff`)
                                .setAuthor("RedTube video search","https://i.imgur.com/fVgD3rm.jpg")
                                .setDescription(`[${categories[Escolhido].video.title}](${categories[Escolhido].video.url})\nRedTube video search`)
                                .addField(":mag_right: Video stats", `**Views:** ${categories[Escolhido].video.views} - **Rating:** ${categories[Escolhido].video.rating}\n**Ratings:** ${categories[Escolhido].video.ratings} - **Duration:** ${categories[Escolhido].video.duration}\n**Date published:** ${categories[Escolhido].video.publish_date}\n**Url:** ${categories[Escolhido].video.url}\n**Tags:** [ ${categories[Escolhido].video.tags.map(a => a.tag_name).join(' | ')} ]`)
                                .setImage(categories[Escolhido].video.thumb)
                                .setFooter(`${message.author.username} - ${args.slice(0).join(' ')}`, message.author.avatarURL);
                            message.channel.send(embed)
                        } else {
                            message.channel.send(`:no_good: ${message.author.toString()} Selecione um Número correto!`)
                        }
                        collected.first().delete();
                    });
            })
        });
    }
})