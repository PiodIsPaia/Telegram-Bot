import TelegramBot from "node-telegram-bot-api";
import OpenAI from "openai";
import "dotenv/config";

const openai = new OpenAI({ apiKey: process.env.API_KEY });
const token = process.env.BOT_TOKEN as string;
const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text as string;

    try {
        // Enviar mensagem inicial
        const loadingMessage = await bot.sendMessage(chatId, "⚙️ Carregando a mensagem, aguarde uns segundos...");

        // Chamar a API da OpenAI
        const response = await openai.chat.completions.create({
            messages: [{ role: "user", content: messageText }],
            model: "gpt-3.5-turbo",
            temperature: 0.2,
        });

        if (response && response.choices && response.choices.length > 0) {
            const replyMessage = response.choices[0].message.content as string;

            // Aguardar 5 segundos antes de enviar a resposta
            setTimeout(async () => {
                // Atualizar a mensagem inicial com a resposta da OpenAI
                await bot.editMessageText(replyMessage, {
                    chat_id: chatId,
                    message_id: loadingMessage.message_id,
                });
            }, 5000); // 5000 milissegundos = 5 segundos
        }
    } catch (error) {
        console.error("Erro ao chamar a API da OpenAI:", error);
        bot.sendMessage(chatId, "Desculpe, ocorreu um erro ao processar sua solicitação.");
    }
});

console.log("\x1b[32mBot Online ✅");