import TelegramBot from "node-telegram-bot-api";
import "dotenv/config";
import { gptCommand } from "./commands/gpt";

const token = process.env.BOT_TOKEN as string;
const bot = new TelegramBot(token, { polling: true });

gptCommand(bot);