const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}

 
client.once("ready", () => {
     console.log(`${client.user.tag} Has Logged in!`)
 });

 client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
     
    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } 

    if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args);
    } 

    if(command === 'poweroff'){
        client.commands.get('poweroff').execute(message, args);
    } 
});

client.login('ODgwMDkyNjI2MTk4NjE4MTgz.YSZQIQ.R4S1FYjmEz0_4EvEqUISWOjdFL4')

