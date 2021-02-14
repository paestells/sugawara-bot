const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Logged in as ${client.user.tag}?');
    client.user.setActivity('volleyball games with my baby', { type: 'WATCHING' });
});


client.on('message', message => {
    const args = message.content.split(" ").slice(1);
    if(message.content.startsWith('sw!say') && message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) {
        message.delete()
        var saytext = args.join(" ");
        message.channel.send(saytext);
    }
  });
client.login(process.env.BOT_TOKEN);
