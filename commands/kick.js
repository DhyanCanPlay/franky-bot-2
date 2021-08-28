const member = member.mentions.users.first()

module.exports = {
    name: 'kick',
    description: "this is a Kick command!",
    execute(message, args){
         if(member) {
            const memberTarger =message.guild.member.cache.get(member.id);
            memberTarger.kick();
            message.chanel.send("User has been kicked!")
        }else{
            message.chanel.send('user is admin i cant kick him!' );
        }
    }
}