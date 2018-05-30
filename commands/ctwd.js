exports.run = (client, message, args) => {
  try {
    var util = require("util");
    var euro = args[0] * 0.029;
    euro = parseFloat(euro).toFixed(2);
    message.channel.send(`It should be worth around ${euro} Euros`);
  } catch (error) {
    message.channel.send(`Sorry, I can't convert that.`);
  }
};
