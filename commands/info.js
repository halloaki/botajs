exports.run = (client, message, args) => {
  let embed = new Discord.RichEmbed()
    .setAuthor(client.author.username)
    .setDescription("Info that could help you in our SotA server!")
    .setColor("#FF0000")
    .addField(
      "SotA scoreboard",
      `https://docs.google.com/spreadsheets/u/1/d/1jQLQ0UCiREzdjlxLOZa_2AYo3eZ1x1LqZv1F7ONoLxM/edit#gid=1876499924`
    )
    .addField(
      "SotA sheet",
      "https://docs.google.com/spreadsheets/d/1Y1NcZ9_sfXHXlS_H4sYtqjjoQLH0hvZ6kcdaygxojGg/edit#gid=0"
    )
    .addField("Mee6 Scoreboard", " https://mee6.xyz/levels/252510569968435200")
    .addField("ID: ", `${message.author.id}`)
    .addField("Created At: ", `${message.author.createdAt}`);
};
