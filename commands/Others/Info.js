var moment = require('moment/moment'); moment.locale('pt-BR');
module.exports = new (class cmd {
    constructor() {
        this.name = "info";
        this.category = "others";
        this.help = "I show my informations";
        this.cooldown = 5;
        this.cdMessage = "Wait 5 seconds to use this again";
        this.aliases = []
    }
    run({ message, buildMessage, client, args }) {
        var Arguments = ''
        if(args[0]){
            Arguments = args[0].toLowerCase()
        }
        if (Arguments == "bot") {
            const embed = new client.external.Discord.RichEmbed()
                .setColor(`#602bff`)
                .setAuthor(client.user.username, client.user.avatarURL)
                .setDescription("**About me**\nHello my name is " + client.user.username + ", I was programmed by a Nigerian named Jayce\nMy Prefix is ``[ " + client.prefix + " ]``!")
                .addField("<:server:412263453550575627> Servers:", "```js\n" + client.guilds.size + "```", true)
                .addField("<:pessoas:412266233845645312> Users:", "```js\n" + client.users.size + "```", true)
                .addField("<:canal:412265582541406208> Channels:", "```js\n" + client.channels.size + "```", true)
                .addField("<:ping:412266860667731970> Ping:", "```js\n" + Math.floor(client.ping) + " Ms```", true)
                .addField("<:memoria:412267464605433877> Ram:", "```js\n" + Math.floor(process.memoryUsage().rss / 1024 / 1000) + ' Mb' + '```', true)
                .addField("<:temporeal:412273857433436171> I stayed online:", "```js\n" + moment(client.readyAt).format('LT L') + "```", true)
                .addField(":computer: Creators", client.external.Owners.map(a => "<@"+client.users.get(a).id+">"), true)
                .addField("<:links:505518935886659616> Links:", "**[Support](" + client.external.Support + ")\n[Invite](https://discordapp.com/oauth2/authorize?client_id=" + client.user.id + "&permissions=999999999&scope=bot)**", true)
            message.reply(embed)
        } else if (Arguments == "server") {
            if (!message.guild) return message.reply("This command does not work here! if you need help, log in to the Support Server:\n"+client.external.Support)
            let online = message.guild.members.filter(a => a.presence.status == "online").size;
            let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
            let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
            let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
            let bot = message.guild.members.filter(a => a.user.bot).size;
            let totalmembros = message.guild.memberCount;
            let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
            let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;

            let a = new client.external.Discord.RichEmbed()
                .addField("• Server Name", `${message.guild.name}`, true)
                .addField("• :crown: Owner", `${message.guild.owner}`, true)
                .addField("• :earth_americas: Region", `${message.guild.region}`, true)
                .addField("• Total Channels", `\`\`${canaistexto}\`\` Texto /\`\`${canaisvoz}\`\` Voz`, true)
                .addField("• Total Members", `\`\`${totalmembros}\`\` Current Member!`, true)
                .addField("• Total Bots", `\`\`${bot}\`\` Current Bots!`, true)
                .addField("• :calendar: Created Day", `\`\`${moment(message.guild.createdAt).format("LL")}\`\``, true)
                .addField("•:id: Service IDr", `\`\`${message.guild.id}\`\``, true)
                .addField("• Level of Verification", `\`\`${message.guild.verificationLevel}\`\``, true)
                .addField("• Member Status", `\`\`${ocupado}\`\` DoNotDisturb [<:DND:525424905928441857>] - \`\`${ausente}\`\` Idle [<:Idle:527926220986384394>]\n\`\`${offline}\`\` Offline [<:Offline:527926221028327424>] - \`\`${online}\`\` Online [<:Online:527926221124927528>]`, true)
                .setFooter(`${message.author.username} -> ServerInfo`, message.author.avatarURL)
            message.channel.send(a)
        } else {
            const embed = new client.external.Discord.RichEmbed()
                .setColor(`#602bff`)
                .setDescription("**Módulos Disponiveis:**\n``" + client.prefix + "info bot\n" + "" + client.prefix + "info server``")
                .setAuthor(client.user.username, client.user.avatarURL)
                .setThumbnail(client.user.avatarURL)
            message.reply(embed)
        }
    }
})