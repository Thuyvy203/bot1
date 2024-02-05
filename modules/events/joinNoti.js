module.exports.config = {
	name: "joinNoti",
	eventType: ["log:subscribe"],
	version: "1.0.1",
	credits: "HĐGN",//Update by nhathoang
	description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": "",
		"pidusage": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "joinGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "joinGif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}


module.exports.run = async function({ api, event, Users }) {
	const { join } = global.nodemodule["path"];
	const { threadID } = event;
	if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
		 api.sendMessage("[ 𝗞𝗜𝗘̂̉𝗠 𝗗𝗨𝗬𝗘̣̂𝗧 ] - Tiến hành kiểm tra danh sách phê duyệt...", threadID, () => {
  setTimeout(function(){
       if (!(JSON.parse(require("fs-extra").readFileSync(__dirname + "/../commands/cache/approvedThreads.json"))).find(n => n == threadID)) api.sendMessage(`➝ ${event.logMessageBody}\n━━━━━━━━━━━━━━━━━━\n𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̂́𝗧 𝗕𝗔̣𝗜\n━━━━━━━━━━━━━━━━━━\n➝ Nhóm bạn chưa được duyệt để gửi yêu cầu ` + global.config.PREFIX + `request\n➝ Hiện tại mình đang có ${client.commands.size} lệnh có thể sử dụng được.\n➝ Prefix hiện tại khả dụng là: ` + global.config.PREFIX + `\n➝ Liên hệ admin qua\n➝ Fb : https://www.facebook.com/Trungkiendepzaiqua?mibextid=ZbWKwL`, threadID)
else api.sendMessage(`➝ ${event.logMessageBody}\n━━━━━━━━━━━━━━━━━━\n𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚\n━━━━━━━━━━━━━━━━━━\n➝ Hiện tại mình đang có ${client.commands.size} lệnh có thể sử dụng được.\n➝ Prefix hiện tại khả dụng là: ` + global.config.PREFIX + `\n➝ Dùng ` + global.config.PREFIX + `\n menu để xem nhóm lệnh\n➝ ` + global.config.PREFIX + `help để xem chi tiết\n➝ Liên hệ admin qua\n➝ Fb : https://www.facebook.com/Trungkiendepzaiqua?mibextid=ZbWKwL`, threadID)
     }, 5000);
   })
  }
	else {
		try {
			const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
			let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
			const threadData = global.data.threadData.get(parseInt(threadID)) || {};
			const path = join(__dirname, "cache", "joinGif");
			const pathGif = join(path, `${threadID}.gif`);

			var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;
			
			for (id in event.logMessageData.addedParticipants) {
		const userName = event.logMessageData.addedParticipants[id].fullName;    iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
				nameArray.push(userName);
				mentions.push({ tag: userName, id: event.senderID });
				memLength.push(participantIDs.length - i++);
        console.log(userName)
			}
			memLength.sort((a, b) => a - b);		
		(typeof threadData.customJoin == "undefined") ? msg = "=== [ 𝗧𝗵𝗲̂𝗺 𝗧𝘃𝗺 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 ] ===\n━━━━━━━━━━━━━━━━━━━━━\n\n→ [💓] 𝗖𝗵𝗮̀𝗼 𝗺𝘂̛̀𝗻𝗴 {name} 𝘁𝗼̛́𝗶 𝘃𝗼̛́𝗶 𝗻𝗵𝗼́𝗺 {threadName}\n→ [🌐] 𝗨𝗿𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘃𝗮̀𝗼: https://www.facebook.com/profile.php?id={iduser}\n→ [🧸] {type} 𝗹𝗮̀ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝘁𝗵𝘂̛́ {soThanhVien} 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺\n→ [🐰] Đ𝘂̛𝗼̛̣𝗰 𝘁𝗵𝗲̂𝗺 𝘃𝗮̀𝗼 𝗻𝗵𝗼́𝗺 𝗯𝗼̛̉𝗶: {author}\n→ [🌼] 𝗨𝗿𝗹 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝘁𝗵𝗲̂𝗺: https://www.facebook.com/profile.php?id={id}\n━━━━━━━━━━━━━━━━━━━━━\n→ [🦋] 𝗡𝗵𝗼̛́ 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰 đ𝗮̂̀𝘆 đ𝘂̉ 𝗻𝗵𝗮́ 𝗯𝗯𝗶 𝘁𝗵𝘂̛́ {soThanhVien} 𝗰𝘂̉𝗮 𝗯𝗼𝘁\n→ [⏰️] 𝗧𝗵𝗼̛̀𝗶 𝗚𝗶𝗮𝗻 𝗩𝗮̀𝗼 𝗡𝗵𝗼́𝗺: [ {time} ]": msg = threadData.customJoin;
      var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "Người dùng tự vào" : getData.name
			msg = msg
      .replace(/\{iduser}/g, iduser.join(', '))
			.replace(/\{name}/g, nameArray.join(', '))
			.replace(/\{type}/g, (memLength.length > 1) ?  '𝗖𝗮́𝗰 𝗯𝗮̣𝗻 𝗹𝗮̀' : '𝗕𝗮̣𝗻 𝗹𝗮̀')
			.replace(/\{soThanhVien}/g, memLength.join(', '))
			.replace(/\{threadName}/g, threadName)
      .replace(/\{author}/g, nameAuthor)
      .replace(/\{time}/g, time)
      .replace(/\{id}/g,event.author);

			if (existsSync(path)) mkdirSync(path, { recursive: true });

			const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

			if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
			else if (randomPath.length != 0) {
				const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
				formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
			}
			else formPush = { body: msg, mentions }

			return api.sendMessage(formPush, threadID);
		} catch (e) { return console.log(e) };
	}
  }