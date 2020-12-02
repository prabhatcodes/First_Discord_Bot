require('dotenv').config() // loads files from .env variables in process.env variable

const Discord = require('discord.js')
const client = new Discord.Client();

client.on('ready', () => {
    console.log("Our Bot is ready to go!");
})

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg,reply('Pong!')
    }
});

client.login(process.env.BOT_TOKEN);