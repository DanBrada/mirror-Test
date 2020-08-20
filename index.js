const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()
const chalk = require("chalk")

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
		status:"online",
		activity:{
			type:"LISTENING",
			name:"&everyone"
		}
	})
});

client.on('message', msg => {
  if (msg.content === '&everyone') {
    for(let i=0;i<50;i++) {
	    console.log(`[${chalk.red("Everyoner bot")}] Pinging people`)
	    msg.channel.send("@everyone")
    }
  }
});

client.login(process.env.CLIENT_SECRET);
