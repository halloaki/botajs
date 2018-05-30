exports.run = (client, message, args) => {
  message.react("🇹🇼");
  message.react("🇬🇧");
  message.react("🇪🇺");
  const collector = message
    .createReactionCollector(
      (reaction, user) =>
        (user.id === message.author.id && reaction.emoji.name === "🇹🇼") ||
        (user.id === message.author.id && reaction.emoji.name === "🇬🇧") ||
        (user.id === message.author.id && reaction.emoji.name === "🇪🇺")
    )
    .once("collect", reaction => {
      const chosen = reaction.emoji.name;
      if (chosen === "🇹🇼") {
        var twd = char[0];
        const collector2 = message
          .createReactionCollector(
            (reaction, user) =>
              (user.id === message.author.id && reaction.emoji.name === "🇬🇧") ||
              (user.id === message.author.id && reaction.emoji.name === "🇪🇺")
          )
          .once("collect", reaction => {
            const chosen = reaction.emoji.name;
            if (chosen === "🇬🇧") {
              var pound = twd * 0.025;
              pound = parseFloat(pound).toFixed(2);
              message.channel.send(`It should be worth around ${pound} Pounds`);
            } else if (chosen === "🇪🇺") {
              var euro = twd * 0.029;
              euro = parseFloat(euro).toFixed(2);
              message.channel.send(`It should be worth around ${euro} Euros`);
            }
            collector2.stop();
          });
      } else if (chosen === "🇬🇧") {
        var pound = char[0];
        const collector2 = message
          .createReactionCollector(
            (reaction, user) =>
              (user.id === message.author.id && reaction.emoji.name === "🇹🇼") ||
              (user.id === message.author.id && reaction.emoji.name === "🇪🇺")
          )
          .once("collect", reaction => {
            const chosen = reaction.emoji.name;
            if (chosen === "🇹🇼") {
              var twd = pound * 39.74;
              twd = parseFloat(pound).toFixed(2);
              message.channel.send(`It should be worth around ${twd} TWD`);
            } else if (chosen === "🇪🇺") {
              var euro = pound * 1.14;
              euro = parseFloat(euro).toFixed(2);
              message.channel.send(`It should be worth around ${euro} Euros`);
            } else {
              // Stop navigating pages
            }
            collector2.stop();
          });
      } else if (chosen === "🇪🇺") {
        var euro = char[0];
        const collector2 = message
      .createReactionCollector(
        (reaction, user) =>
          (user.id === message.author.id && reaction.emoji.name === "🇹🇼") ||
          (user.id === message.author.id && reaction.emoji.name === "🇬🇧")
      )
      .once("collect", reaction => {
        const chosen = reaction.emoji.name;
        if (chosen === "🇹🇼") {
          var twd = euro * 34.89;
          twd = parseFloat(twd).toFixed(2);
          message.channel.send(`It should be worth around ${twd} TWD`);
        } else if (chosen === "🇬🇧") {
          var pound = euro * 0.88;
          pound = parseFloat(pound).toFixed(2);
          message.channel.send(`It should be worth around ${pound} Pounds`);
        } else {
          // Stop navigating pages
        }
        collector2.stop();
      });
      }
      collector.stop();
    });
};
