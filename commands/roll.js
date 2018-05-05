exports.run = (client, message, args) => {
  message.channel.send("You rolled a " + Math.floor(Math.random() * 6) + 1);
};
