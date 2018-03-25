const Discord = require("discord.js");
const client = new Discord.Client();

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"


client.login('pNDI1Mzk0OTMyNTgxNDAwNTc2.DZRJxA.8JK3KG_bO9WXjoFQG-3icFyIjGo');
