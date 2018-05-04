const Discord = require("discord.js");
const bot = new Discord.Client({ disableEveryone: true });
const aws = require("aws-sdk");
const aws = require('aws-sdk');
const token = process.env.TOKEN;
const prefix = process.env.prefix;

bot.on("ready", async () => {
  console.log(`Bot is ready! ${bot.user.username}`);
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
  if (!command.startsWith(config.prefix)) return;
  // Commands
  if (command === `${prefix}userinfo`) {
    let embed = new Discord.RichEmbed();
  }
});

bot.login(token);
