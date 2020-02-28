const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.once('ready', () => {
    console.log('client ready!')
});

client.login(process.env.TOKEN_BOT);