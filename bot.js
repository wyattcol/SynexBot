
const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'NDI1Mzk0OTMyNTgxNDAwNTc2.DZGzbA.tjZdqwyGTNlK-jlRbXKvfPnoInI';

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':announce') {
		var ClientsWords = words
		console.log(message.author.id)
		console.log(message.author.username)
		username = message.author.username
		id = message.author.id
		tag = message.author.tag
		message.guild.channels.find("name", "announcements").send(message.content);

	}
});

// Log our bot in
client.login(token);
