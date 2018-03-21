const Discord = require("discord.js");
const client = new Discord.Client();

client.on("message", (message) => {
    let args = message.content.split(" ").slice(1);    
    if (message.content.startsWith(";announce")){    
     client.channels.get("425397615778201630").send({embed: {
            color: 3066993,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            title: "Announcement",
            url: "",
            description: "This is an important announcement",
            fields: [{
                name: "Announcement",
                value: args
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

client.login('pNDI1Mzk0OTMyNTgxNDAwNTc2.DZRJxA.8JK3KG_bO9WXjoFQG-3icFyIjGo');
