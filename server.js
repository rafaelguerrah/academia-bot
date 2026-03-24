const express = require('express');
const bot = require('./bot'); // Importa o bot
const app = express();

const planosRoutes = require('./routes/planos');
const horariosRoutes = require('./routes/horarios');

app.use('/planos', planosRoutes);
app.use('/horarios', horariosRoutes);

// --- Configuração Webhook (Vercel) ---
// Rota onde o Telegram enviará as atualizações
app.use(bot.webhookCallback('/webhook'));

// Rota utilitária para definir o Webhook automaticamente
app.get('/set-webhook', async (req, res) => {
  const url = `https://${req.get('host')}/webhook`;
  await bot.telegram.setWebhook(url);
  res.send(`Webhook configurado com sucesso para: ${url}`);
});

// Exporta o app para a Vercel (Serverless)
module.exports = app;

// Inicia o servidor apenas se o arquivo for executado diretamente (modo local)
if (require.main === module) {
  // Se for local, deletamos o webhook para usar Polling (evita conflitos)
  bot.telegram.deleteWebhook().then(() => {
    bot.launch();
    console.log("Bot iniciado em modo Polling (Local)");
  });
  app.listen(3000, () => console.log("API rodando na porta 3000"));
}