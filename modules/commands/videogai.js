module.exports.config = {
  name: "videogai",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nhhoang",
  description: "Video gái",
  commandCategory: "Thành Viên",
  usages: "video gái",
  cooldowns: 0
};
module.exports.run = async ({ api, event }) => {
  const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
 var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
  if (thu == 'Sunday') thu = '𝗖𝗵𝘂̉ 𝗻𝗵𝗮̣̂𝘁'
  if (thu == 'Monday') thu = '𝗧𝗵𝘂̛́ 𝗵𝗮𝗶'
  if (thu == 'Tuesday') thu = '𝗧𝗵𝘂̛́ 𝗯𝗮'
  if (thu == 'Wednesday') thu = '𝗧𝗵𝘂̛́ 𝘁𝘂̛'
  if (thu == "Thursday") thu = '𝗧𝗵𝘂̛́ 𝗻𝗮̆𝗺'
  if (thu == 'Friday') thu = '𝗧𝗵𝘂̛́ 𝗦𝗮́𝘂'
  if (thu == 'Saturday') thu = '𝗧𝗵𝘂̛́ 𝗯𝗮̉𝘆'
  const res = await axios.get(`https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/thinh`);
var thinh = res.data.url;
  axios.get('https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/videogaiii').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
          api.sendMessage({
            body: `===== 『 𝗩𝗜𝗗𝗘𝗢 𝗚𝗔́𝗜 』 =====\n━━━━━━━━━━━━━━━━━━\n\n[🚬] → 𝗦𝗼̂́ 𝘃𝗶𝗱𝗲𝗼 𝗴𝗮́𝗶 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗸𝗵𝗼 𝗹𝗮̀: ${res.data.count}\n[🌟] → 𝗛𝗼̂𝗺 𝗻𝗮𝘆 𝗹𝗮̀ ${thu} 💓\n[💓] → 𝗧𝗵𝗶́𝗻𝗵: ${thinh}\n━━━━━━━━━━━━━━━━━━\n⏰️===== [ ${gio} ] =====⏰️`,
            attachment: fs.createReadStream(__dirname + `/cache/vidgai.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/vidgai.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/vidgai.${ext}`)).on("close", callback);
      })
}