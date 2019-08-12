module.exports = new (class cmd {
    constructor() {
        this.name = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
        this.category = ";-;"
        this.help = "Hentai Femdom";
        this.cooldown = 0;
        this.cdMessage = "Wait 0 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args}){
        if (message.channel.nsfw == false) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.");
        client.external.request.get('https://gelbooru.com/index.php?page=dapi&s=post&q=index&json=1&cid=1&limit=100' + (args.length >= 1 ? '&tags=' + args.join('+').substring(0, 100) : ''), function (res) {
            var b = '';
            res.on('data', function (chunk) {
                b += chunk;
            });
            res.on('end', function () {
                if (!Boolean(b)) return message.channel.send("**Não foi encontrado!**");
                b = JSON.parse(b);
                if (!b[0] || b.length < 1) return message.channel.send("**Não foi encontrado!**");
                const hentaiz = new client.external.Discord.RichEmbed()
                    .setColor(`RANDOM`)
                    .setImage(b[Math.floor(Math.random() * b.length)].file_url)
                    .setFooter(`${message.author.username} - ${args.slice(0).join(' ')}`, message.author.avatarURL)
                message.channel.send(hentaiz)
                //message.reply(b[Math.floor(Math.random() * b.length)].file_url)
            });
        });
    }
})