exports.run = (client, message, args) => {
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
};
