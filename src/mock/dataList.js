const resMock = {
	// 状态码，0为成功，非0为失败。可能有5%概率返回失败
	status: 0,
	// 总数
	total: 60,
	// 列表
	list: [
		{
			// 标题
			title: '加总价比还',
			// 内容
			content:
				'然矿存条而带除增克众文较。风便物离放布所布导受感建成构题。命调式或则收算几比每思育产业。新结位阶现论通众构规真亲天龙证。青还龙容认商具山主角由带段。运她般系准任面研那保列定候听三深名火。例节山极市身分有次品你观者验。',
		},
		{
			title: '转亲去新算',
			content:
				'白最物两力日达例把老由置按除些接。将理关参将如物等务打场直消事王保参世。音快何论群部照观总门花量工。车不须单号表龙积太面存证。',
		},
		{
			title: '区切列构取',
			content:
				'圆难共管与心历如技七并复在接美三包。还据军济南需做民业最断府点领。员记看其社问行历物即五共备万民拉。果万问克相被实将步看己劳型社集。始那型无米山规油把改用花构三。他便低题数准美两元你没同斗必马方。',
		},
	],
};
function random(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
function getDataList() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const data =
				random() >= 5 ? Object.assign(resMock, { status: 1 }) : resMock;
			resolve(data);
		}, 1000);
	});
}
export default getDataList