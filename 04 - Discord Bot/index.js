const { Client, Events, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();
const token = process.env.discord_token; 
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });


client.on('messageCreate', message =>{
    
    if(message.author.bot) return 
    // console.log(message.content);

    message.reply({
        content : "hi form Brook !",
    })
})
client.login(token)