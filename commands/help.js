exports.run = (client, message, args) => {
    var str = "";
    client.commands.forEach(element => {
        str += element;
    });
    message.channel.send(str);
}