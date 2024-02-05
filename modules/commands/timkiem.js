module.exports.config = {
  name: "timkiem",
  version: "2.0.8",
  hasPermssion: 0,
  credits: "Leiam Nash",
  description: "internet source",
  commandCategory: "study",
  usages: `Please ask me anything\n\nHow to use?\n${global.config.PREFIX}ask <question>\n\nExample:\n${global.config.PREFIX}ask using a otg can harm your device?\n`,
  cooldowns: 5,
  dependencies: {
        "openai": ""
    }
};
module.exports.run = async function({ api, event, args }) {
const { Configuration, OpenAIApi } = require("openai");
  const configuration = new Configuration({
                                apiKey: "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",
                            });
                            const openai = new OpenAIApi(configuration);
  let data = args.join(" ");
                            if (data.length < 2) {
                                return api.sendMessage({body: `🤖=== [ 𝗠𝗜𝗥𝗔𝗜 𝗕𝗢𝗧 ] ===🤖
━━━━━━━━━━━━━━━━━━
👋🏻 𝗰𝗵𝗮̀𝗼 𝗯𝗮̣𝗻 𝘁𝗼̂𝗶 𝗹𝗮̀ 𝗺𝗶𝗿𝗮𝗶 𝗯𝗼𝘁 𝗻𝗵𝗵𝗼𝗮𝗻𝗴
💓 𝗯𝗮̣𝗻 𝗵𝗮̃𝘆 𝗱𝘂̀𝗻𝗴 ${global.config.PREFIX}𝘁𝗶𝗺𝗸𝗶𝗲𝗺 + đ𝗶𝗲̂̀𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗵𝗼̉𝗶 
🌸 𝗧𝗼̂𝗶 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗰𝗮́𝗰 𝗺𝗼̂𝗻 𝗵𝗼̣𝗰, 𝗹𝗮̀𝗺 𝗯𝗮̀𝗶 𝗹𝘂𝗮̣̂𝗻 𝗰𝗵𝗼 𝗯𝗮̣𝗻, 𝗴𝗶𝘂́𝗽 𝗯𝗮̣𝗻 𝘃𝗶𝗲̂́𝘁 𝗺𝗮̃ 𝘃𝗮̀ 𝗵𝗼̛𝗻 𝘁𝗵𝗲̂́ 𝗻𝘂̛̃𝗮`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/robot')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID);
                            } else {
                                try {
                                    const completion = await openai.createCompletion({
                                        model: "text-davinci-002",
                                        prompt: args.join(" "),
                                        temperature: 0.5,
                                        max_tokens: 2000,
                                        top_p: 0.3,
                                        frequency_penalty: 0.5,
                                        presence_penalty: 0.0,
                                    });
                                    api.sendMessage(completion.data.choices[0].text, event.threadID, event.messageID);
                                }
                                catch (error) {
                                    if (error.response) {
                                        console.log(error.response.status);
                                        console.log(error.response.data);
                                    } else {
                                        console.log(error.message);
                                        api.sendMessage(error.message, event.threadID);
                                    }
                                }
                            }
}