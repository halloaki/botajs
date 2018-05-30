exports.run = (client, message, args) => {
    message.react("🇹🇼");
    message.react("🇬🇧");
    const collector = message
      .createReactionCollector(
        (reaction, user) =>
          (user.id === message.author.id && reaction.emoji.name === "🇹🇼") ||
          (user.id === message.author.id && reaction.emoji.name === "🇬🇧")
      )
      .once("collect", reaction => {
        const chosen = reaction.emoji.name;
        if (chosen === "🇹🇼") {
          var pound = args[0] * 34.89;
          pound = parseFloat(pound).toFixed(2);
          message.channel.send(`It should be worth around ${pound} TWD`);
        } else if (chosen === "🇬🇧") {
          var euro = args[0] * 0.88;
          euro = parseFloat(euro).toFixed(2);
          message.channel.send(`It should be worth around ${euro} Pounds`);
        } else {
          // Stop navigating pages
        }
        collector.stop();
      });
  };