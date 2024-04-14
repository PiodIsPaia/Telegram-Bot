import OpenAI, { ClientOptions } from "openai";

export default class Client extends OpenAI {

    constructor(token: string){
        const options: ClientOptions = {
            apiKey: token
        };
        super(options);
    }

    async question(content: string): Promise<string> {
        try {
            const response = await this.chat.completions.create({
                messages: [{ role: "user", content: content }],
                model: "gpt-3.5-turbo",
                temperature: 0.9,
            });

            if (response && response.choices && response.choices.length > 0) {
                const replyMessage = response.choices[0].message.content as string;
                return replyMessage;
            } else {
                throw new Error("No response received from OpenAI");
            }
        } catch (error: any) {
            throw new Error("Error while communicating with OpenAI: " + error.message);
        }
    }
}
