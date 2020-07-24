const TelegramBot = require('node-telegram-bot-api');
const dialogflow =  require('./dialogflow');

// const token = 'COLE AQUI SEU TOKEN DO TELEGRAM';




const bot = new TelegramBot(token, { polling: true });

bot.on('message', async function (msg) {
    const chatId = msg.chat.id;
    console.log(msg.text);

    const dfResponse = await dialogflow.sendMessage(chatId.toString(), msg.text);

    bot.sendMessage(chatId, dfResponse.text);

})