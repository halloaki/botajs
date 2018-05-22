exports.run = (client, message) => {
  const prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  if (message.content.indexOf("shro")) message.channel.send("It's SCHRÖ!!!");
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);

  if (!cmd) return;
  cmd.run(client, message, args);
};
