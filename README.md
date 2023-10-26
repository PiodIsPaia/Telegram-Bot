# Telegram Bot Integrado à API da OpenAI

Este é um bot para o Telegram integrado à API da OpenAI usando Node.js. O bot usa o modelo GPT-3.5 Turbo para responder às mensagens dos usuários no Telegram. Ele processa as mensagens dos usuários usando a API da OpenAI e envia respostas geradas de volta aos usuários.

## Pré-requisitos

Antes de começar, você precisará de:

- Node.js instalado no seu sistema.
- Uma chave de API da OpenAI. Você pode obter isso registrando-se no site da OpenAI.

## Instalação

1. Clone este repositório em sua máquina local usando: 

- git clone https://github.com/PiodIsPaia/Ilusion-Telegram-Bot

2. Acesse o diretório do projeto

3. Instale as dependências usando npm ou yarn:

- npm install | yarn install

4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave de API da OpenAI:

- API_KEY=SuaChaveDeAPIAqui
- BOT_TOKEN=SeuTokenDoTelegramAqui


5. Inicie o bot:

- npm run dev


O bot agora está pronto para receber mensagens no Telegram e gerar respostas usando a API da OpenAI.

## Como Usar

Basta enviar mensagens para o bot no Telegram e aguardar as respostas geradas pela OpenAI.

## Configurações Adicionais

- O bot usa o modelo `gpt-3.5-turbo` da OpenAI com uma temperatura de 0.2 para geração de texto. Você pode ajustar esses parâmetros no arquivo `index.ts` conforme necessário.

## Contribuindo

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir problemas e enviar solicitações de pull.

---

**Nota:** Este projeto é apenas um exemplo educacional e pode estar sujeito a limitações de uso da API da OpenAI. Certifique-se de seguir os termos de serviço da OpenAI ao usar este projeto em produção.
