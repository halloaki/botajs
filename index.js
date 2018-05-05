const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const aws = require("aws-sdk");
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
  } else if (command === `${prefix}eightball` || command === `${prefix}8ball`) {
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
    message.channel.send("You rolled a " + Math.floor(Math.random() * 6) + 1);
  } else if (command === `${prefix}cookie`) {
    message.channel.send(
      message.author.username + " gave a cookie to " + args[0]
    );
  } else if (command === `${prefix}water`) {
    var phrases = [
      "the shaman made it rain, hopefully it isn't acid rain like last time",
      "you manage to scavenge water in the back of Miraz home <:water:438082707688259584>",
      "sorry we don't have water for everybody today...",
      "sorry maybe the shaman will make it rain tomorrow...",
      "the well has dried up!"
    ];
    message.channel.send(phrases[Math.floor(Math.random() * phrases.length)]);
  }
});

bot.login(token);
