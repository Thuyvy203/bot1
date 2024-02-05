module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Chill with Tea",//mod by nhathoang
	description: "Khởi động lại Bot",
	commandCategory: "Tiện ích",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { sendMessage: HakiraSEND } = api;
  const timeStart = Date.now();
  const pidusage = await global.nodemodule["pidusage"](process.pid);
 const permission = ["100059953981036"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("→ 𝗠𝘂𝗼̂́𝗻 𝗿𝗲𝗹𝗼𝗮𝗱 𝘀𝗮𝗼 𝘂̛̀ 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̉ 𝘁𝘂𝗼̂̉𝗶 🧸", event.threadID, event.messageID);
	const { threadID, messageID } = event;
  var nhathoang = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss');
	var time = args.join(" ");
	var rstime = "68";
	if (!time) rstime = "69";
	else rstime = time;
	api.sendMessage({body: `=== [ RELOAD ] ===\n\n[Bot] → Hệ thống sẽ reload bot sau ${rstime} giây nữa!\n⚙️ CPU: ${pidusage.cpu.toFixed(1)}%\n🔗 Ping: ${Date.now() - timeStart}ms`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/reload')).data.url,
method: "GET",
responseType: "stream"
})).data
},threadID);
	return setTimeout(() => { api.sendMessage(`⏰️ Vào lúc: ${nhathoang}\n🦋 Bot đã tiến hành reload thành công\n⚙️ CPU: ${pidusage.cpu.toFixed(1)}%\n🔗 Ping: ${Date.now() - timeStart}ms`,event.threadID,() => process.exit(1) )},	rstime * 1000);  
}