
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
		id = message.author.id
		tag = message.author.tag
		console.log(message.author.id)
		console.log(message.author.username)
		username = message.author.username
		//message.guild.channels.find("name", "🚔announcements🚔").send(ClientsWords);
		bot.sendMessage({ to: 🚔announcements🚔, message: txt.replace(':announce ','') });

	}
});

client.on('message', message => {
	var words = message.content.split(' ')
	if (words[0] === ':test') {
		id = message.author.id
		tag = message.author.tag
		console.log(message.author.id)
		console.log(message.author.username)
		username = message.author.username
		client.message.send(author, "Tested");

	}
});

// Log our bot in
client.login(token);
