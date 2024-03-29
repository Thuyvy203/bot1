module.exports.config = {
  name: "acp",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "NTKhang",
  description: "Kết bạn qua id Facebook",
  commandCategory: "Tiện ích",
  usages: "uid",
  cooldowns: 0
};


module.exports.handleReply = async ({ handleReply, event, api }) => {
  const { author, listRequest } = handleReply;
  if (author != event.senderID) return;
  const args = event.body.replace(/ +/g, " ").toLowerCase().split(" ");
  
  const form = {
    av: api.getCurrentUserID(),
		fb_api_caller_class: "RelayModern",
		variables: {
      input: {
        source: "friends_tab",
        actor_id: api.getCurrentUserID(),
        client_mutation_id: Math.round(Math.random() * 19).toString()
      },
      scale: 3,
      refresh_num: 0
		}
  };
  
  const success = [];
  const failed = [];
  
  if (args[0] == "add") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestConfirmMutation";
    form.doc_id = "3147613905362928";
  }
  else if (args[0] == "del") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestDeleteMutation";
    form.doc_id = "4108254489275063";
  }
  else return api.sendMessage("Vui lòng chọn <add | del > <số thứ tự | hoặc \"all\">", event.threadID, event.messageID);
  let targetIDs = args.slice(1);
  
  if (args[1] == "all") {
    targetIDs = [];
    const lengthList = listRequest.length;
    for (let i = 1; i <= lengthList; i++) targetIDs.push(i);
  }
  
  const newTargetIDs = [];
  const promiseFriends = [];
  
  for (const stt of targetIDs) {
    const u = listRequest[parseInt(stt) - 1];
    if (!u) {
      failed.push(`Không tìm thấy stt ${stt} trong danh sách`);
      continue;
    }
    form.variables.input.friend_requester_id = u.node.id;
    form.variables = JSON.stringify(form.variables);
    newTargetIDs.push(u);
    promiseFriends.push(api.httpPost("https://www.facebook.com/api/graphql/", form));
		form.variables = JSON.parse(form.variables);
  }
  
  const lengthTarget = newTargetIDs.length;
  for (let i = 0; i < lengthTarget; i++) {
    try {
      const friendRequest = await promiseFriends[i];
      if (JSON.parse(friendRequest).errors) failed.push(newTargetIDs[i].node.name);
      else success.push(newTargetIDs[i].node.name);
    }
    catch(e) {
      failed.push(newTargetIDs[i].node.name);
    }
  }
  
  api.sendMessage(`𝗧𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 ${args[0] == 'add' ? 'chấp nhận' : 'xóa'} 𝗹𝗼̛̀𝗶 𝗺𝗼̛̀𝗶 𝗸𝗲̂́𝘁 𝗯𝗮̣𝗻 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴 𝗰𝘂̉𝗮 ${success.length} 𝗻𝗴𝘂̛𝗼̛̀𝗶:\n${success.join("\n")}${failed.length > 0 ? `\n» Thất bại với ${failed.length} người: ${failed.join("\n")}` : ""}`, event.threadID, event.messageID);
};


module.exports.run = async ({ event, api }) => {
  const moment = require("moment-timezone");
	const axios = require("axios"), fs = require("fs-extra")
  const form = {
    av: api.getCurrentUserID(),
  	fb_api_req_friendly_name: "FriendingCometFriendRequestsRootQueryRelayPreloader",
  	fb_api_caller_class: "RelayModern",
  	doc_id: "4499164963466303",
  	variables: JSON.stringify({input: {scale: 3}})
  };
  const listRequest = JSON.parse(await api.httpPost("https://www.facebook.com/api/graphql/", form)).data.viewer.friending_possibilities.edges;
  let msg = "";
  let i = 0;
	var attachment = [], files = []
  for (const user of listRequest) {
    i++;
    msg += (`\n${i}. 𝗧𝗲̂𝗻: ${user.node.name}`
         + `\n📔 𝗜𝗗: ${user.node.id}`
         + `\n🌐 𝗨𝗥𝗟: ${user.node.url.replace("www.facebook", "fb")}`
         + `\n⏰ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${moment(user.time*1009).tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY HH:mm:ss")}\n━━━━━━━━━━━━━━━━━━\n`);
  }
	for (ID of listRequest) {
		var
			path= __dirname + `/cache/Accept${i++}.jpg`,
			url = (await axios.get(`https://graph.facebook.com/${ID.node.id}/picture?height=1500&width=1500&access_token=1449557605494892|aaf0a865c8bafc314ced5b7f18f3caa6`, {responseType: "arraybuffer"})).data
		fs.writeFileSync(path, Buffer.from(url, "utf-8"))
		attachment.push(fs.createReadStream(path))
		files.push(path)
	}
  api.sendMessage({body:`${msg}\n📌 𝐏𝐡𝐚̉𝐧 𝐡𝐨̂̀𝐢 𝐭𝐢𝐧 𝐧𝐡𝐚̆́𝐧 𝐧𝐚̀𝐲 𝐯𝐨̛́𝐢 𝐧𝐨̣̂𝐢 𝐝𝐮𝐧𝐠: < 𝗮𝗱𝗱/𝗱𝗲𝗹 > + 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝗵𝗼𝗮̣̆𝗰 < 𝗮𝗹𝗹 > 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝘂̛̣𝗰 𝗵𝗶𝗲̣̂𝗻 `, attachment },event.threadID, (e, info) => {
		for (var file of files) {fs.unlinkSync(file)}
      global.client.handleReply.push({
        name: this. config. name,
        messageID: info.messageID,
        listRequest,
        author: event.senderID
      });
    }, event.messageID);
};