module.exports.config = {
	name: "upt",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "tpk", 
	description: "",
	commandCategory: "Tiện ích",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  const moment = require("moment-timezone");
  const tow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
	var { threadID, messageID } = event;
	if (event.body.indexOf("upt")==0 ||
 (event.body.indexOf("Bot onl","Uptime","Upt","dawn","Nhhoang")==0)) {    
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    const time = process.uptime();
		 var hours = Math.floor(time / (60 * 60));
		var minutes = Math.floor((time % (60 * 60)) / 60);
	var seconds = Math.floor(time % 60);
    const { commands } = global.client;
  axios.get('https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/mp40videoanime').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let count = res.data.count;
  let callback = function () {
          api.sendMessage({
            body: `======『 𝗨𝗣𝗧𝗜𝗠𝗘 𝗥𝗢𝗕𝗢𝗧 』======\n\n→ 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗕𝗼𝘁 𝗰𝘂̉𝗮 𝗩𝗼̃ 𝗡𝗵𝗮̣̂𝘁 𝗛𝗼𝗮̀𝗻𝗴 đ𝗮̃ 𝗵𝗼𝗮̣𝘁 đ𝗼̣̂𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 ${hours} 𝗴𝗶𝗼̛̀  ${minutes} 𝗽𝗵𝘂́𝘁 ${seconds} 𝗴𝗶𝗮̂𝘆\n━━━━━━━━━━━━━━━━━━\n→ 𝗣𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗵𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗰𝘂̉𝗮 𝗯𝗼𝘁: ${global.config.version}\n→ 𝗧𝗼̂̉𝗻𝗴 𝗹𝗲̣̂𝗻𝗵: ${commands.size}\n→ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴: ${global.data.allUserID.length}\n→ 𝗧𝗼̂̉𝗻𝗴 𝗻𝗵𝗼́𝗺: ${global.data.allThreadID.length}\n━━━━━━━━━━━━━━━━━━\n⏰=====『 ${tow} 』=====⏰`,
            attachment: fs.createReadStream(__dirname + `/noprefix/remix.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/noprefix/remix.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/noprefix/remix.${ext}`)).on("close", callback);
      })}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                                                                                                                                                                                                                                                                                                                              }