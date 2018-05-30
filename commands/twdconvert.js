exports.run = (client, message, args) => {
  message.react("🇬🇧");
  message.react("🇪🇺");
    const collector = message
      .createReactionCollector(
        (reaction, user) =>
          (user.id === message.author.id &&
            reaction.emoji.name === "🇬🇧") || (user.id === message.author.id &&
              reaction.emoji.name === "🇪🇺")
      )
      .once("collect", reaction => {
        const chosen = reaction.emoji.name;
        if (chosen === "🇬🇧") {
          var pound = args[0] * 0.025;
          pound = parseFloat(pound).toFixed(2);
          message.channel.send(`It should be worth around ${pound} Pounds`);
        } else if (chosen === "🇪🇺") {
          var euro = args[0] * 0.029;
          euro = parseFloat(euro).toFixed(2);
          message.channel.send(`It should be worth around ${euro} Euros`);
        } else {
          // Stop navigating pages
        }
        collector.stop();
      });
    /*var util = require("util");
    var euro = args[0] * 0.029;
    euro = parseFloat(euro).toFixed(2);
    message.channel.send(`It should be worth around ${euro} Euros`);*/
};
