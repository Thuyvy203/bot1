module.exports.config = {
  name: "demngayyeu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MạnhG",
  description: "Đếm ngày yêu nhau",
  commandCategory: "Tiện Ích",
  cooldowns: 5
}

module.exports.onLoad = () => {
  const fs = global.nodemodule["fs-extra"];
  const request = global.nodemodule["request"];
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "demngayyeu.mp4")) request("https://i.imgur.com/ox1tqK2.mp4").pipe(fs.createWriteStream(dirMaterial + "demngayyeu.mp4"));
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  const fs = global.nodemodule["fs-extra"];
  //let name = await Users.getNameUser(event.senderID);
  var { threadID, messageID, body, senderID } = event;
  if (senderID == api.getCurrentUserID()) return;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
	//Thay số ngày yêu nhau ở đây, trừ đi 1 tháng
  let dateBegin = new Date(2022, 01, 27, 00, 00, 00).getTime()
  let dateNow = Date.now()
  let Time = dateNow - dateBegin
  let parseDays = Math.floor(Time / (1000 * 60 * 60 * 24))
  let parseHours = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let parseMinutes = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24) - parseHours * (1000 * 60 * 60)) / (1000 * 60))
  let parseSeconds = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24) - parseHours * (1000 * 60 * 60) - parseMinutes * (1000 * 60)) / (1000))
  //trả lời
  var msg = {
    body: `[💓] → Đ𝗮̃ 𝘆𝗲̂𝘂 𝗵𝘇𝗶𝗶 đ𝘂̛𝗼̛̣𝗰 🧸\n${parseDays} 𝗻𝗴𝗮̀𝘆 ${parseHours} 𝘁𝗶𝗲̂́𝗻𝗴 ${parseMinutes} 𝗽𝗵𝘂́𝘁 ${parseSeconds} 𝗴𝗶𝐚̂𝘆 `,
    attachment: fs.createReadStream(__dirname + `/noprefix/demngayyeu.mp4`)
  }
  // Gọi bot
  var arr = ["Demngayyeu", "Đếm ngày yêu", "số ngày yêu hzii", "yeuuhzii:33"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) return out(msg)
  });
};

module.exports.run = function ({ event, api }) {
	//Thay số ngày yêu nhau ở đây, trừ đi 1 tháng
  let dateBegin = new Date(2022, 01, 27, 00, 00, 00).getTime()
  let dateNow = Date.now()
  let Time = dateNow - dateBegin
  let parseDays = Math.floor(Time / (1000 * 60 * 60 * 24))
  let parseHours = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  let parseMinutes = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24) - parseHours * (1000 * 60 * 60)) / (1000 * 60))
  let parseSeconds = Math.floor((Time - parseDays * (1000 * 60 * 60 * 24) - parseHours * (1000 * 60 * 60) - parseMinutes * (1000 * 60)) / (1000))
  return api.sendMessage(`[💓] → Đ𝗮̃ 𝘆𝗲̂𝘂 𝗵𝘇𝗶𝗶 đ𝘂̛𝗼̛̣𝗰 🧸\n\n ${parseDays} 𝗻𝗴𝗮̀𝘆 ${parseHours} 𝘁𝗶𝗲̂́𝗻𝗴 ${parseMinutes} 𝗽𝗵𝘂́𝘁 ${parseSeconds} 𝗴𝗶𝐚̂𝘆 `, event.threadID, event.messageID);

}