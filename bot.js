const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDI1Mzk0OTMyNTgxNDAwNTc2.DZrplQ.iGfza2lZiT6tse-t6zcaMFSdBHo';





ScriptLink = "http://fasttory.com/CnbU"
GameLink = "https://www.roblox.com/games/13822889/Lumber-Tycoon-2"
VideoLink = ""






client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':runmessage') {
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "A new exploit from End Gaming!",
    url: VideoLink,
    description: "Here are some instructions to go along with the exploit",
    fields: [{
        name: "Link to script",
        value: ScriptLink
      },
      {
        name: "Game Link",
        value: GameLink
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: " "
    }
  }
});

	}
});

client.login(token);
