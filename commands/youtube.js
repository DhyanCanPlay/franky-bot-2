module.exports = {
    name: 'youtube',
    description: "this is a Youtube command!",
    execute(message, args){
        message.channel.send('https://www.youtube.com/channel/UCNnOQIrLBRO9Thdxybo_xJQ');
    }
}