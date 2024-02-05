module.exports.config = {
    name: "upcode",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "PLXT",
    description: "push code",
    commandCategory: "Admin",
    usages: "[reply or text]",
    cooldowns: 0
};

module.exports.run = async function ({ api, event, args }) {
  const axios = require('axios');
const fs = require('fs');
  const permission = ["100001378940139"];
	if (!permission.includes(event.senderID)) return api.sendMessage(".callad có đứa định trộm mdl", event.threadID, event.messageID);
  const request = require('request');
    const cheerio = require('cheerio');
    const { join, resolve } = require("path");
    const { senderID, threadID, messageID, messageReply, type } = event;
    var name = args[0];
    if (type == "message_reply") {
        var text = messageReply.body;
    }
    if(!text && !name) return api.sendMessage('Vui lòng reply link muốn áp dụng code hoặc ghi tên file để up code lên pastebin!', threadID, messageID);
    if(!text && name) {
        var code = fs.readFile(
          `${__dirname}/${args[0]}.js`,
          "utf-8",
          async (err, code) => {
            if (err) return api.sendMessage(`Lệnh ${args[0]} không tồn tại!.`, threadID, messageID);
            const data = (await axios.post('https://API-TPK2.last-namename.repl.co/upcode', {code: code})).data
api.sendMessage(data.url,event.threadID)
          }
        );
        return
    } else if(text && name) {

const code = (await axios.get(text)).data
      fs.writeFile(
        `${__dirname}/${name}.js`,
        code,
        "utf-8",
        function (err) {
            if (err) {
              return api.sendMessage('Lỗi up code về file',event.threadID) 
                     }
            
            return api.sendMessage(' Đã lưu code thành công về mdl ' + name,event.threadID) 
        }
    );
    }
 // var code = 'gggggggg'
  
  
       }