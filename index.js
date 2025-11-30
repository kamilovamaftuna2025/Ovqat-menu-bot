import TelegramBot from "node-telegram-bot-api";
import { config } from "dotenv";

config()

const TOKEN = process.env.BOT_TOKEN
const bot = new TelegramBot(TOKEN, { polling: true })

bot.on("message", (msg) => {

    const chatId = msg.chat.id
    const firstName = msg.chat.first_name
    const text = msg.text



    if (text == "/start") {
        console.log("Start... ");
        
        console.log(msg);
  
        bot.sendMessage(chatId, `🍽 Assalomu alaykum ${firstName}!
Bot orqali oson va tez ovqat tanlashingiz mumkin.

👇 Quyidagilardan birini tanlang:
`, {
            reply_markup: {
                keyboard: [
                    [{ text: "Milliy taomlar 🇺🇿" }],
                    [{ text: "Fast Food 🍔" }],
                    [{ text: "Ichimliklar 🥤" }]
                ],
                resize_keyboard: true
            }

        })
    } else if (text == "Milliy taomlar 🇺🇿") {
        bot.sendMessage(chatId, "Milliy taomlar:", {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🍛 Osh", callback_data: "osh" },
                        { text: "🥟 Somsa", callback_data: "somsa" }
                    ],
                    [
                        { text: "🍲 Manti", callback_data: "manti" }
                    ]
                ]
            }
        })
    } else if (text == "Fast Food 🍔") {
        bot.sendMessage(chatId, "Fast Foodlar:", {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: "🍔 Burger", callback_data: "burger" },
                        { text: "🌯 Lavash", callback_data: "lavash" }
                    ],
                    [
                        { text: "🌭 Hot-dog", callback_data: "hotdog" }
                    ]
                ]
            }
        })
    } else if (text == "Ichimliklar 🥤") {
        bot.sendMessage(chatId, "Ichimliklar:", {
            reply_markup: {
    inline_keyboard: [
      [
        { text: "🥤 Cola", callback_data: "cola" },
        { text: "☕ Choy", callback_data: "choy" }
      ],
      [
        { text: "🍹 Sharbat", callback_data: "sharbat" }
      ]
    ]
  }
        })
    }else{
        bot.sendMessage(chatId, "😕 Kechirasiz, men sizning habaringizga tushunmadim. \n\n Botdan foidalanish uchun /start buyruqini bosing!")
    }
})
bot.on("callback_query", (query) => {
    const chatId = query.message.chat.id;
    const data = query.data;  

    if (data == "osh") {
        bot.sendMessage(chatId, "🍛 Osh — 25 000 so‘m");
    } else if (data == "somsa") {
        bot.sendMessage(chatId, "🥟 Somsa — 12 000 so‘m");
    } else if (data == "manti") {
        bot.sendMessage(chatId, "🍲 Manti — 18 000 so‘m");
    } else if (data == "burger") {
        bot.sendMessage(chatId, "🍔 Burger — 35 000 so‘m");
    } else if (data == "lavash") {
        bot.sendMessage(chatId, "🌯 Lavash — 20 000 so‘m");
    } else if (data == "hotdog") {
        bot.sendMessage(chatId, "🌭 Hot-dog — 15 000 so‘m");
    } else if (data == "cola") {
        bot.sendMessage(chatId, "🥤 Cola — 10 000 so‘m");
    } else if (data == "choy") {
        bot.sendMessage(chatId, "☕ Choy — 17 000 so‘m");
    } else if (data == "sharbat") {
        bot.sendMessage(chatId, "🍹 Sharbat — 5 000 so‘m");
    }
});

