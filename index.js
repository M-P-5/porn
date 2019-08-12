const command = require("command-discord");
const client = command.Client({
    token: "NjA5MTAyMTU1MjUyNzYwNTkx.XVEZ5g._l9Dyuxec1J0ub15zfbULSntuwM", // Token Bot
    color: "65535", //optional color for  embeds in decimal (65535 default)
    path: "./commands", // path for commands folder, (./commands default)
    prefix: "x", // prefix can be an array, (! default)
    logErrors: true, // true default, if you dont want to console log errors in command false
    // you can get errors using the commandError event
    // prefix can be an array if you need multiple prefix, (! default)
    commandExists: false,
    commandExistsContent: {
        embed: {
            color: "16711680",
            description: "We dont have this command yet!"
        }
    },
    prefixConfig: { // ~ The Bot only needs a one name to work (useUsername)
        useUsername: true, // Example: mee6 help
        useMention: true, // Example: @mee6 help
    },
    external: [ // Dependencies and Consts
        { key: "Discord", value: require("discord.js") },
        { key: "Owners", value: ["279638999398612994"] },
        { key: "Support", value: "https://discord.gg/jKdBNXM" },
        { key: "request", value: require('request') },
        { key: "randomPuppy", value: require('random-puppy') },
        { key: "superagent", value: require('snekfetch') }
    ] // external variables to use instead of doing global variables

}, {
        //client options for discordjs (https://discord.js.org/#/docs/main/stable/typedef/ClientOptions)
    });

client.on("commandError", function (command, error) {
    console.error(`Error ${error.toString()} in command ${command.name}`)
    //this log is automatic if you dont disable the logErrors option
})

function clean(text) {
    if (typeof(text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
        return text;
   };
  
   client.on("message", message => {
    const args = message.content.split(" ").slice(1);
    if (message.content.startsWith(client.prefix+"eval")) {
        if (client.external.Owners.indexOf(message.author.id) == -1) return message.channel.send(`:no_good: ${message.author.toString()} You are not allowed to use this command`);
        try {
            const code = args.join(" ");
            let evaled = eval(code);
            if (typeof evaled !== "string")
                evaled = require("util").inspect(evaled);
            message.channel.send(clean(evaled), { code: "xl" });
        } catch (err) {
            message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        }
    }
});

// Playing
client.on("ready", async () => {
    console.log('on')
    const phrases = [`${client.prefix}help - Ayudando a ${client.users.size} pajeros`,`${client.prefix}help - I see XVideos for 24h`,`${client.prefix}help - i'm in ${client.guilds.size} Guilds`, `${client.prefix}help - ${client.users.size} People Know Me!`, `Use ${client.prefix}help to view my Commands`, `Want to Invite Me to Your Server? Use ${client.prefix} invitation! `]
    setInterval(() => {
        var selected = phrases[Math.floor(Math.random() * phrases.length)]
        if (selected == null) selected = phrases[Math.floor(Math.random() * phrases.length)]
        client.user.setPresence({ game: { name: `${selected}` } })
    }, 5 * 60 * 1000)
    client.user.setPresence({ game: { name: phrases[0] } })
});

client.start(); // you can pass token here, if you dont want to pass options
