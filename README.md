# 💪 Academia Bot - Telegram

Um bot interativo para Telegram que oferece informações sobre planos, horários e serviços de uma academia, com suporte a compras e navegação intuitiva.

## 📋 Características

✅ Menu interativo em camadas  
✅ Informações sobre planos e modalidades  
✅ Horários de aulas  
✅ Sistema de compra integrado  
✅ Contato direto via WhatsApp  
✅ Suporte em grupos do Telegram  

## 🚀 Instalação

### Pré-requisitos
- Node.js v14 ou superior
- npm
- Token de um bot do Telegram (obtido via @BotFather)

### Passos

1. **Clone ou baixe o projeto**
```bash
cd academia-bot
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:
```
BOT_TOKEN=seu_token_aqui_do_botfather
PORT=3000
```

> ⚠️ **Importante**: Nunca commit o arquivo `.env` no git. Ele está no `.gitignore`

4. **Inicie o servidor API**

Em um terminal:
```bash
npm start
```

Você verá: `API rodando na porta 3000`

5. **Inicie o bot**

Em outro terminal:
```bash
npm run bot
```

Você verá: `Bot iniciado...`

## 📱 Como Usar

### No Telegram

1. **Encontre o bot** no Telegram: `@AracajuEstudoBot`
2. **Em um grupo**, escreva:
   - `oi` ou `bom dia` → Abre o menu principal
   - `/menu` → Abre o menu
   - `/start` → Mensagem de boas-vindas

### Navegação do Menu

```
🎯 Menu Principal
├── 💳 Planos
│   ├── 💪 Musculação → 🛒 Comprar
│   ├── 🧘 Yoga → 🛒 Comprar
│   ├── 🤸 Pilates → 🛒 Comprar
│   ├── 🏃 Cardio → 🛒 Comprar
│   └── 👨‍🏫 Personal Trainer → 🛒 Comprar
├── 📅 Horários
│   └── Seg-Sex e Sábado-Domingo
├── ℹ️ Sobre
│   └── Informações da academia
└── 📞 Contato
    └── WhatsApp, Telefone, Email
```

### Fluxo de Compra

1. Clique em "💳 Planos"
2. Escolha uma modalidade
3. Clique em "🛒 Comprar"
4. Escolha a duração/plano
5. Confirme a compra
6. Receberá instruções de contato

## 📦 Estrutura do Projeto

```
academia-bot/
├── bot.js                    # Bot principal do Telegram
├── server.js                 # Servidor Express API
├── package.json              # Dependências
├── .env                      # Variáveis de ambiente (não commit)
├── .gitignore                # Arquivos ignorados pelo git
├── controller/
│   ├── planosController.js   # Dados de planos/modalidades
│   └── horariosController.js # Dados de horários de aulas
└── routes/
    ├── planos.js             # Rota da API /planos
    └── horarios.js           # Rota da API /horarios
```

## 💰 Planos e Preços

### Modalidades (com 3 opções de duração)

| Modalidade | Mensal | Trimestral | Anual |
|-----------|--------|-----------|-------|
| 💪 Musculação | R$100 | R$270 | R$900 |
| 🧘 Yoga | R$80 | R$220 | R$800 |
| 🤸 Pilates | R$90 | R$250 | R$850 |
| 🏃 Cardio | R$85 | R$230 | R$820 |

### Personal Trainer

| Pacote | Preço |
|--------|-------|
| Sessão Básica | R$150 |
| 4 Sessões | R$500 |
| 12 Sessões | R$1400 |

## 🕐 Horários de Aulas

### Segunda a Sexta
- **06:00 - 07:00** → Musculação
- **07:30 - 08:30** → Yoga Matinal
- **12:00 - 13:00** → Cardio
- **18:00 - 19:00** → Pilates
- **19:30 - 20:30** → Musculação Noturna

### Sábado e Domingo
- **09:00 - 10:00** → Musculação
- **10:30 - 11:30** → Yoga
- **15:00 - 16:00** → Pilates
- **16:30 - 17:30** → Cardio

## 📞 Contato

📍 **Endereço**: Avenida Principal, 456 - Aracaju, SE  
📱 **WhatsApp**: (79) 98765-4321  
📞 **Telefone**: (79) 3333-4444  
📧 **Email**: contato@academia.com  

**Horário de Atendimento**:
- Segunda a Sexta: 06:00 - 22:00
- Sábado e Domingo: 09:00 - 18:00

## 🛠️ Endpoints da API

### Planos
```
GET http://localhost:3000/planos
```
Retorna lista de modalidades com seus planos.

### Horários
```
GET http://localhost:3000/horarios
```
Retorna horários de aulas por período.

## 🔧 Tecnologias

- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **Telegraf** - Biblioteca do Telegram
- **Axios** - Cliente HTTP
- **Dotenv** - Gerenciador de variáveis de ambiente

## 📝 Scripts Disponíveis

```bash
npm start      # Inicia o servidor API
npm run bot    # Inicia o bot do Telegram
npm test       # Executa testes (não configurado)
```

## 🔐 Segurança

- ✅ Arquivo `.env` protegido no `.gitignore`
- ✅ Token do bot não é exposto
- ✅ Variáveis de ambiente isoladas
- ✅ Validação de grupo no bot

## 📚 Possíveis Melhorias

- [ ] Integração com banco de dados
- [ ] Sistema de pagamento real (Stripe, PagSeguro)
- [ ] Histórico de compras do usuário
- [ ] Notificações automáticas
- [ ] Admin dashboard
- [ ] Testes automatizados
- [ ] Deploy em produção

## 🐛 Troubleshooting

### Bot não responde no grupo
- Certifique-se que o bot foi adicionado ao grupo
- Verifique as permissões do bot
- Reinicie o bot com `npm run bot`

### Erro: "Cannot find module"
```bash
npm install
```

### Porta 3000 já em uso
Mude a PORT no `.env` ou finalize o processo:
```bash
npm start -- --port 3001
```

### Token inválido
- Verifique o token no arquivo `.env`
- Obtenha um novo token no @BotFather

## 📄 Licença

Este projeto é de uso livre para fins educacionais.

## 👨‍💻 Autor

Desenvolvido para demonstração de bot Telegram com Node.js

---

💪 **Bem-vindo à Academia!** Continue visitando conosco!
