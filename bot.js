// Don't touch anything without asking GeneratedScript#3909 first. \\

const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const website = "http://xyz.potato-host.com/puddingWhitelistCheck.php?key="
const website2 = "http://xyz.potato-host.com/puddingAddWhitelist.php?Key="
const blacklistws = "http://xyz.potato-host.com/puddingAddBlacklist.php?Key="
var PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('3a3f03696725a46033929f7ca868f1f4');

// Post update

client.on("ready", () => {
    client.channels.get("425397615778201630").send({embed: {
        color: 3066993,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },	
        title: "Bot Update!",
        url: "https://discord.gg/BpjrRK",
        description: "SynexMC Bot has updated!",
        fields: [{
            name: "Added announcement command.",
            value: "The owner can now announce things through the bot!"
          },
          {
            name: " ",
            value: " "
          },
          {
              name: " ",
              value: " "
          },
          {
            name: " ",
            value: " "
        }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: " "
        }
      }
    });
});

// Begin Commands function \\

client.on('unhandledRejection', err => console.error(`Uncaught Promise Rejection: \n${err.stack}`));

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
client.login("pNDI1Mzk0OTMyNTgxNDAwNTc2.DZRJxA.8JK3KG_bO9WXjoFQG-3icFyIjGo");
