const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-'



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Zaxis Community  `,"https://www.twitch.tv/dggamingbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.login(process.env.BOT_TOKEN);

client.on('message', message => {
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("**Usage: !bc [message]**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' Server', `${message.guild.name}`, true)
          .addField(' Sender ', `${message.author.username}!${message.author.discriminator}`, true)
          .addField(' Message ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const unknown = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| the messege is loading ')
      .addBlankField(true)
      .addField('♨| i got sended to  ', message.guild.memberCount , true)
      .addField('📝| the message ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});

client.on('message', message => {
var prefix = "!";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});

client.on('message', message => {
var prefix = "-"
    if (message.content.startsWith(prefix + 'clear')) {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ليس لديك برمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✏️✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });

  client.on("message", (message) => {
    if (message.content.startsWith("-ban")) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('⚠ليست لديك صلاحية ');
        var member= message.mentions.members.first();
         if (message.mentions.users.size < 1) return message.reply("**المرجوا اختيار الشخص الذي تريد تبنيده **");
        member.ban().then((member) => {
            message.channel.send(member.displayName + " BANNED 👋 ");
        }).catch(() => {
            message.channel.send("⁉ Error 404 -_-");
            //يجب وضع رول البوت الفوق
        });
    }
});

client.on('message', message=> {
    if (message.author.bot) return;
    if (message.isMentioned(client.user))
    {
    message.reply("Hello, I'm Zaxis Community bot, My Prefix is ``-``");
    }
});

client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**https://cdn.discordapp.com/attachments/498625534549295114/498825358682882059/kick_metion.png**");
  if(!reason) return message.reply ("**https://cdn.discordapp.com/attachments/498625534549295114/498825956983701514/kick_reson.png**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**This User Is Have High Role**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**Kicked By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});

client.on('message', message => {
    if(message.content.includes('discord.gg')){
                                            if(!message.channel.guild) return message.reply('** advertising me on DM ? 🤔   **');
        if (!message.member.hasPermissions(['ADMINISTRATOR'])){
        message.delete()
    return message.reply(`**ممنوع نشر الروابط :angry: !**`)
    }
}
});

const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "-";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**!~[ التاريخ ]~! **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( ""+ Day + "-" + Month + "-" + Year + "")
             message.channel.sendEmbed(Date15);
    }
});

client.on('message',async msg => {
  var p = "!";
  if(msg.content.startsWith(p + "ocount")) {
  if(!msg.guild.member(msg.author).hasPermissions('MANAGE_CHANNELS')) return msg.reply('❌ **No Permissions**');
  if(!msg.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return msg.reply('❌ **البوت لا يمتلك صلاحية**');
  msg.guild.createChannel(`loading :[]` , 'voice').then(time => {
    time.overwritePermissions(msg.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  setInterval(() => {
      var currentTime = new Date(),
Year = currentTime.getFullYear(),
Month = currentTime.getMonth() + 1,
Dat = currentTime.getDate()
      time.setName(`Members : → ${msg.guild.members.size} ←`);
 },1000);
  });
  }
});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

client.on('message', message => {

  if (message.author.bot) return;

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

  if (command === "say") {

          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

  

 


if (command == "embed") {

    let say = new Discord.RichEmbed()

    .setDescription(args.join(" "))

    .setColor(0x23b2d6)

    message.channel.sendEmbed(say);

    message.delete();

  }



});
