module.exports.config = {
  name: "qrs",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Khoa x Nam",
  description: "Đọc qrcode",
  commandCategory: "Tiện ích",
  usages: "",
  cooldowns: 0,
  dependencies: {
    "jimp": "",
    "qrcode-reader": "",
    "image-downloader": ""
  }
};

module.exports.run = async function({ api, event, args }) {
  const fs = require('fs');
  const jimp = require('jimp');
  const QrCode = require('qrcode-reader');
  const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "qrs.jpeg")) request("https://i.imgur.com/aqzbpzY.jpeg").pipe(fs.createWriteStream(dirMaterial + "qrs.jpeg"));
  const path = __dirname + "/cache/qrcode.png";

  const { threadID, messageID, type, messageReply } = event;
  if (type != "message_reply" || messageReply.attachments.length > 1) return api.sendMessage("Bạn phải phản hồi ảnh qrcode cần quét", threadID, messageID);

  if (messageReply.attachments[0].type == 'photo') {
    await require("image-downloader").image({ url: messageReply.attachments[0].url, dest: path })
    const img = await jimp.read(fs.readFileSync(path));
    const qr = new QrCode();
    const value = await new Promise((resolve, reject) => {
      qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
      qr.decode(img.bitmap);
    });
    return api.sendMessage({body: `=====「 𝗤𝗨𝗘́𝗧 𝗠𝗔̃ 𝗤𝗥 」=====
━━━━━━━━━━━━━━━━━━
💓 𝗕𝗼𝘁 𝘃𝘂̛̀𝗮 𝗾𝘂𝗲́𝘁 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗺𝗮̃ 𝗾𝗿 
🖨️ 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉: ${value.result}`, attachment: fs.createReadStream(__dirname + `/noprefix/qrs.jpeg`)}, event.threadID, event.messageID);
  }
  return api.sendMessage("Đã xảy ra lỗi khi thực hiện lệnh", threadID, messageID);
}