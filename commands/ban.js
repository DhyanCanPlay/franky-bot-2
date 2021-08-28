module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message, args){
        const member = member.mentions.users.first();
        if(member) {
            const memberTarger = message.guild.member.cache.get(member.id);
            memberTarger.ban();
            message.chanel.send("User has been baned!")
        }else{
            message.chanel.send('user is admin i cant ban him!' );
        }
    }
}