const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const aws = require("aws-sdk");
const fun = require("fun.js")
const token = process.env.TOKEN;
const prefix = process.env.prefix;

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);
  console.log(token);
  console.log(prefix);
});

bot.on("message", async message => {
  // Security
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  // Splitting shit
  let messageArray = message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);
  // More security
  if (!command.startsWith(prefix)) return;
  // Commands
  if (command === `${prefix}userinfo`) {
    let embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setDescription("Info about the user")
      .setColor("#FF0000")
      .addField("Full Username: ", `${message.author.username}${message.author.discriminator}`)
      .addField("ID: ", `${message.author.id}`)
      .addField("Created At: ", `${message.author.createdAt}`);

    message.channel.sendEmbed(embed);
  } else if (command === `${prefix}say`) {
    var str = "";
    for (var i = 0; i < args.length; i++) {
      str += args[i] + " ";
    }
    message.channel.send(str);
    message.delete();
  }
});

bot.login(token);
