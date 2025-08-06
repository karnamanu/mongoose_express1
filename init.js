const mongoose = require("mongoose");
const chat = require("./models/chat.js");
main()
	.then(() => {
		console.log("connection succesfull");
	})
	.catch((err) => console.log(err));

async function main() {
	await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
let allChats = [
	{
		from: "neha",
		to: "priya",
		msg: "hi how are you",
		created_at: new Date(),
	},
	{
		from: "rithu",
		to: "mani",
		msg: "i am fine ",
		created_at: new Date(),
	},
	{
		from: "manu",
		to: "gundu",
		msg: "life is beautifull",
		created_at: new Date(),
	},
	{
		from: "bantu",
		to: "komali",
		msg: "everthy is fine",
		created_at: new Date(),
	},
	{
		from: "martha",
		to: "abi",
		msg: "where are you",
		created_at: new Date(),
	},
];
chat.insertMany(allChats);
