exports.run = (client, message, args) => {
    try {
        var euro = args * 0.029;
        message.channel.send(`It should be worth around ${euro} Euros`);
    } catch (error) {
        message.channel.send(`Sorry, I can't convert that.`);
    }
};
