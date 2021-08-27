module.exports = {
    name: 'poweroff',
    description: "this is a Youtube command!",
    execute(message, args){
        message.channel.send('poweroff in 1 min');
    }
}