module.exports.config = {
    name: 'goibotv2',
    version: '1.1.1',
    hasPermssion: 0,
    credits: 'DC-Nam',//mod thêm by tpk
    description: 'Trò truyện cùng simi chat',
    commandCategory: 'Giải trí',
    usages: '[hey simi]',
    cooldowns: 2,
};
const {
    post
} = require('axios');
const CN = `https://TPK2-API-2.manh10.repl.co/simi/get`
module.exports.run = () => {};
module.exports.handleEvent = function( {
    api, event
}) {
    if (['Bot êy','Bot ơiii', 'bot ới', 'bot', 'hi bot','bot đâu','bot off','bot ơi','bot xịn','kêu mọi người lên tương tác đi bot','Chào bot','hello bot','sim','sim ơi','bye bot'].includes(event.body.toLowerCase())) {
       api.sendMessage((t=['kêu bot có gì hok 💓', 'ơi bot nghe nè','ơi anh/chị bot nghe 🌸','có gì hog bot nè','bot nè','kêu em có gì không','💞 em nghe','em đây'], t[Math.random()*t.length<<0]), event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
    };
};
module.exports.handleReply = async function({
    handleReply: $, api, event
}) {
    const res = await post(`${CN}`, {
        ask: event.body
    });
   if (res.data.status != 201) return api.sendMessage(`${res.data.message}`, event.threadID, (err, data) => global.client.hhandleReply.push({
       name: this.config.name,
       messageID: data.messageID,
       ask: event.body
   }), event.messageID); else api.sendMessage({body: `🤖====「 𝗦𝗜𝗠 𝗦𝗜𝗠 𝗥𝗘𝗣𝗟𝗬 」====🤖\n\n💬 𝗕𝗼𝘁 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶: ${res.data.answer}\n\n→ 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗲̂́𝗽 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝗶𝗲̂́𝗽 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-hr.maiyeuhtt1.repl.co/images/robot')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, data) => global.client.handleReply.push({
        name: this.config.name, messageID: data.messageID
    }), event.messageID);
};