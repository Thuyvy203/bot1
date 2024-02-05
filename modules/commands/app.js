const axios = require('axios');
const fse = require('fs-extra');
const DownLoad = async (url, file, ext) => {
var array = [];
  for (var i = 0; i < url.length; i++) {
const dest = __dirname + `/cache/${file}_${i}.${ext}`; 
await require('image-downloader').image({ url: url[i], dest }); 
 array.push(fse.createReadStream(dest));
//fse.unlinkSync(dest);
  };
return array;
}
const config = {
	name: 'app',
	version: '1.1.1',
	hasPermssion: 0,
	credits: 'TáoTpk',
	description: 'Như tên',
	commandCategory: 'THÀNH VIÊN',
	usages: 'Hướng dẫn cách dùng những app có trên bot',
	cooldowns: 5
};
const run = async function ({ api, event }) {
const { threadID: tid, messageID: mid, senderID: sid, type, args, body, isGroup, messageReply: mR, mentions } = event;
const UID = sid
  
      const images = ['https://i.imgur.com/HoAs6By.jpeg',
'https://i.imgur.com/q3vS3Di.jpeg',
'https://i.imgur.com/71nODfO.jpeg'];
      const pn = args[0][0] + config.name
      api.sendMessage({body: "===『𝗔𝗣𝗣 𝗦𝗧𝗢𝗥𝗘』===\n━━━━━━━━━━━━━━━\n→ 𝗖𝗮́𝗰𝗵 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝗰𝗮́𝗰 𝗮𝗽𝗽 𝗰𝗼́ 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n===== 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 =====\n→ !𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝘃𝗶𝗱𝗲𝗼 + 𝗹𝗶𝗻𝗸 𝘃𝗶𝗱𝗲𝗼 𝗰𝗮̂̀𝗻 𝘁𝗮̉𝗶\n→ !𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗺𝘂𝘀𝗶𝗰 + 𝗹𝗶𝗻𝗸\n===== 𝗜𝗡𝗦𝗧𝗔𝗚𝗥𝗔𝗠 =====\n→ !𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗶𝗻𝗳𝗼𝘂𝘀𝗲𝗿 < 𝘁𝗲̂𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 >: 𝗫𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴\n→ !𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗶𝗺𝗮𝗴𝗲 < 𝘀𝗮𝗼 𝗰𝗵𝗲́𝗽 𝗹𝗶𝗲̂𝗻 𝗸𝗲̂́𝘁 >: 𝗧𝗮̉𝗶 𝗮̉𝗻𝗵\n→ !𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝘃𝗶𝗱𝗲𝗼 < 𝘀𝗮𝗼 𝗰𝗵𝗲́𝗽 𝗹𝗶𝗲̂𝗻 𝗸𝗲̂́𝘁 >: 𝗧𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼\n→ !𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺 𝗽𝗼𝘀𝘁𝘂𝘀𝗲𝗿 < 𝘁𝗲̂𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 >: 𝗫𝗲𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝗯𝗮̀𝗶 đ𝗮̆𝗻𝗴 𝗰𝘂̉𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴\n===== 𝗧𝗜𝗞𝗧𝗢𝗞 =====\n→ !𝘁𝗶𝗸𝘁𝗼𝗸 𝗶𝗻𝗳𝗼 < 𝗜𝗗 >: 𝗫𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴\n→ !𝘁𝗶𝗸𝘁𝗼𝗸 𝘃𝗶𝗱𝗲𝗼 < 𝘀𝗮𝗼 𝗰𝗵𝗲́𝗽 𝗹𝗶𝗲̂𝗻 𝗸𝗲̂́𝘁 >: 𝗧𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼\n→ !𝘁𝗶𝗸𝘁𝗼𝗸 𝗺𝘂𝘀𝗶𝗰 < 𝘀𝗮𝗼 𝗰𝗵𝗲́𝗽 𝗹𝗶𝗲̂𝗻 𝗸𝗲̂́𝘁 >: 𝗧𝗮̉𝗶 𝗮̂𝗺 𝘁𝗵𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝘃𝗶𝗱𝗲𝗼\n→ !𝘁𝗶𝗸𝘁𝗼𝗸 𝘀𝗲𝗮𝗿𝗰𝗵 < 𝘁𝘂̛̀ 𝗸𝗵𝗼́𝗮 >: 𝗧𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝘃𝗶𝗱𝗲𝗼 𝘁𝗵𝗼̂𝗻𝗴 𝗾𝘂𝗮 𝘁𝘂̛̀ 𝗸𝗵𝗼𝗮́\n→ !𝘁𝗶𝗸𝘁𝗼𝗸 𝘁𝗿𝗲𝗻𝗱𝗶𝗻𝗴: 𝗥𝗮𝗻𝗱𝗼𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝘃𝗶𝗱𝗲𝗼 𝘁𝗿𝗲𝗻𝗱𝗶𝗻𝗴\n→ !𝘁𝗶𝗸𝘁𝗼𝗸 𝗽𝗼𝘀𝘁 < 𝗜𝗗 >: 𝗫𝗲𝗺 𝗻𝗵𝘂̛̃𝗻𝗴 𝗯𝗮̀𝗶 𝗱̶𝗮̆𝗻𝗴 𝗰𝘂̉𝗮 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴", attachment: await DownLoad(images, sid, 'png')}, tid, mid);
}
module.exports = {config,run}