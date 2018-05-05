exports.run = (client, message, args) => {
  message.channel.send(
    message.author.username + " gave a cookie to " + args[0]
  );
};
