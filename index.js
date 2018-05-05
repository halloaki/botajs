const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const aws = require("aws-sdk");
const token = process.env.TOKEN;
const prefix = process.env.prefix;
g;
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
      .addField(
        "Full Username: ",
        `${message.author.username}${message.author.discriminator}`
      )
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
  } else if (command === `${prefix}eightball` || `${prefix}8ball`) {
    var possibleResponses = [
      "Doesn't look like it",
      "Probably not",
      "I can only see so far in the future",
      "It is likely",
      "Perhaps",
      "If I say yes, will you leave me alone?",
      "Yes, no, maybe...",
      "Do I look like a magical ball that tells the future? Oh wait...",
      "Yes",
      "No"
    ];
    var randomNumber = Math.floor(Math.random() * possibleResponses.length);
    message.channel.send(possibleResponses[randomNumber]);
  } else if (command === `${prefix}roll`) {
    message.channel.send(Math.floor(math.random() * 6) + 1);
  }
});

bot.login(token);
