const { MessageEmbed } = require('discord.js')
const algebrite        = require('algebrite')

let calccmd = async (message, args, client, _, __) => {
  const data = args.join(" ");
  if(!data) return message.reply("`Give me a formula.`")
  
  try { 
    let res = algebrite.eval(data);
    let resp = new MessageEmbed()
    .setTitle("***sarah math***")
    .setDescription(`The result of \`${data}\`\nis:**${res}**`)
    .setColor("DARKGREEN")
    .setThumbnail(message.guild.iconURL())
    .setTimestamp();
    return message.reply({ embeds: [resp] })
  } catch(e) {
    message.reply("`I'm sorry, I couldn't eval your formula`");
  }
}
