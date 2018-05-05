const sql = require("./mysql")
exports.run = (client, message) => {
  const prefix = client.config.prefix;
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  addpoints(message);
  if (message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, message, args);
};
function addpoints(message){
sql.query(`select * from members where discord_ID = "${message.author.id}"`,function (error, results, fields){
  if (error) throw error;
  if(!results[0]) sql.query(`insert into members('discord_ID','Name','XP') values(${message.author.id}, "${message.author.username}", 0) `);
  else if(results[0]) sql.query(`update members set XP = ${results[0].XP + 1} where discord_ID = "${message.author.id}"`);
});
}
