exports.run = (client, message, args) => {
  var phrases = [
    "the shaman made it rain, hopefully it isn't acid rain like last time",
    "you manage to scavenge water in the back of Miraz home <:water:438082707688259584>",
    "sorry we don't have water for everybody today...",
    "sorry maybe the shaman will make it rain tomorrow...",
    "the well has dried up!"
  ];
  message.channel.send(phrases[Math.floor(Math.random() * phrases.length)]);
};
