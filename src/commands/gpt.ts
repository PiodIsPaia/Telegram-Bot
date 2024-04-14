import Client from "../api/gpt";
import TelegramBot from "node-telegram-bot-api";

export async function gptCommand(bot: TelegramBot) {
    bot.on("message", async (msg) => {
        if (msg.text == null) return;

        const chatId = msg.chat.id;
        const client = new Client(process.env.API_KEY as string);

        try {
            const initialMessage = await bot.sendMessage(chatId, "Aguarde, processando sua solicitação...");

            const context = await client.question(msg.text);

            await bot.editMessageText(context, {
                chat_id: chatId,
                message_id: initialMessage.message_id
            });
        } catch (error) {
            console.error("Erro ao processar a mensagem:", error);
            bot.sendMessage(chatId, "Desculpe, ocorreu um erro ao processar a sua mensagem.");
        }
    });
}
