const { Telegraf } = require('telegraf');
const axios = require('axios');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

console.log('Bot iniciado...');

bot.start((ctx) => {
  ctx.reply('Bem-vindo à Academia! 💪 Use /menu para começar.');
});

bot.command('menu', (ctx) => {
  ctx.reply('Bem-vindo à Academia! 💪 Escolha uma opção:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: "💳 Planos", callback_data: "planos" }],
        [{ text: "📅 Horários", callback_data: "horarios" }],
        [{ text: "ℹ️ Sobre", callback_data: "sobre" }],
        [{ text: "📞 Contato", callback_data: "contato" }]
      ]
    }
  });
});

bot.hears(['oi', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'hello', 'hi'], (ctx) => {
  if (ctx.chat.type === 'group' || ctx.chat.type === 'supergroup') {
    ctx.reply('Bem-vindo à Academia! 💪 Escolha uma opção:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "💳 Planos", callback_data: "planos" }],
          [{ text: "📅 Horários", callback_data: "horarios" }],
          [{ text: "ℹ️ Sobre", callback_data: "sobre" }],
          [{ text: "📞 Contato", callback_data: "contato" }]
        ]
      }
    });
  }
});

bot.on('callback_query', async (ctx) => {
  const data = ctx.callbackQuery.data;

  if (data === 'planos') {
    ctx.reply('� Escolha uma modalidade:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "💪 Musculação", callback_data: "musculacao" }],
          [{ text: "🧘 Yoga", callback_data: "yoga" }],
          [{ text: "🤸 Pilates", callback_data: "pilates" }],
          [{ text: "🏃 Cardio", callback_data: "cardio" }],
          [{ text: "👨‍🏫 Personal Trainer", callback_data: "personal" }],
          [{ text: "⬅️ Voltar", callback_data: "menu" }]
        ]
      }
    });
  }

  if (data === 'horarios') {
    ctx.reply('� Horários de Aulas:\n\n🔹 Segunda a Sexta:\n• 06:00 Musculação\n• 07:30 Yoga Matinal\n• 12:00 Cardio\n• 18:00 Pilates\n• 19:30 Musculação\n\n🔹 Sábado e Domingo:\n• 09:00 Musculação\n• 10:30 Yoga\n• 15:00 Pilates\n• 16:30 Cardio', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Voltar", callback_data: "menu" }]
        ]
      }
    });
  }

  if (data === 'sobre') {
    ctx.reply('ℹ️ Sobre a Academia:\n\nSomos uma academia completa dedicada à sua saúde e bem-estar. Oferecemos:\n\n✅ Equipamento moderno\n✅ Instrutores qualificados\n✅ Aulas variadas (Musculação, Yoga, Pilates, Cardio)\n✅ Personal Training especializado\n✅ Ambiente acolhedor e seguro\n\nVenha nos visitar!', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Voltar", callback_data: "menu" }]
        ]
      }
    });
  }

  if (data === 'contato') {
    ctx.reply('📞 Entre em Contato:\n\n📍 Endereço: Avenida Principal, 456 - Aracaju, SE\n📱 WhatsApp: (79) 98765-4321\n📞 Telefone: (79) 3333-4444\n📧 Email: contato@academia.com\n\n🕐 Horário de Atendimento:\nSegunda a Sexta: 06:00 - 22:00\nSábado e Domingo: 09:00 - 18:00\n\nNos vamos adotar!', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Voltar", callback_data: "menu" }]
        ]
      }
    });
  }

  if (data === 'capcut') {
    ctx.reply('🎬 CapCut Pro\n\n• Anual por R$30\n• Vitalício por R$50', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Voltar", callback_data: "planos" }]
        ]
      }
    });
  }

  if (data === 'musculacao') {
    ctx.reply('💪 Musculação\n\n• Mensal por R$100\n• Trimestral por R$270\n• Anual por R$900', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🛒 Comprar", callback_data: "comprar_musculacao" }],
          [{ text: "⬅️ Voltar", callback_data: "planos" }]
        ]
      }
    });
  }

  if (data === 'yoga') {
    ctx.reply('🧘 Yoga\n\n• Mensal por R$80\n• Trimestral por R$220\n• Anual por R$800', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🛒 Comprar", callback_data: "comprar_yoga" }],
          [{ text: "⬅️ Voltar", callback_data: "planos" }]
        ]
      }
    });
  }

  if (data === 'pilates') {
    ctx.reply('🤸 Pilates\n\n• Mensal por R$90\n• Trimestral por R$250\n• Anual por R$850', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🛒 Comprar", callback_data: "comprar_pilates" }],
          [{ text: "⬅️ Voltar", callback_data: "planos" }]
        ]
      }
    });
  }

  if (data === 'cardio') {
    ctx.reply('🏃 Cardio\n\n• Mensal por R$85\n• Trimestral por R$230\n• Anual por R$820', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🛒 Comprar", callback_data: "comprar_cardio" }],
          [{ text: "⬅️ Voltar", callback_data: "planos" }]
        ]
      }
    });
  }

  if (data === 'personal') {
    ctx.reply('👨‍🏫 Personal Trainer\n\n• Sessão básica por R$150\n• Pacote 4 sessões por R$500\n• Pacote 12 sessões por R$1400', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🛒 Comprar", callback_data: "comprar_personal" }],
          [{ text: "⬅️ Voltar", callback_data: "planos" }]
        ]
      }
    });
  }

  if (data === 'menu') {
    ctx.reply('Bem-vindo à Academia! 💪 Escolha uma opção:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "💳 Planos", callback_data: "planos" }],
          [{ text: "📅 Horários", callback_data: "horarios" }],
          [{ text: "ℹ️ Sobre", callback_data: "sobre" }],
          [{ text: "📞 Contato", callback_data: "contato" }]
        ]
      }
    });
  }

  if (data === 'comprar_musculacao') {
    ctx.reply('💪 Musculação - Escolha a duração:\n\nQual plano você deseja?', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Mensal (R$100)", callback_data: "confirmacao_musculacao_mensal" }],
          [{ text: "Trimestral (R$270)", callback_data: "confirmacao_musculacao_trim" }],
          [{ text: "Anual (R$900)", callback_data: "confirmacao_musculacao_anual" }],
          [{ text: "⬅️ Voltar", callback_data: "musculacao" }]
        ]
      }
    });
  }

  if (data === 'comprar_yoga') {
    ctx.reply('🧘 Yoga - Escolha a duração:\n\nQual plano você deseja?', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Mensal (R$80)", callback_data: "confirmacao_yoga_mensal" }],
          [{ text: "Trimestral (R$220)", callback_data: "confirmacao_yoga_trim" }],
          [{ text: "Anual (R$800)", callback_data: "confirmacao_yoga_anual" }],
          [{ text: "⬅️ Voltar", callback_data: "yoga" }]
        ]
      }
    });
  }

  if (data === 'comprar_pilates') {
    ctx.reply('🤸 Pilates - Escolha a duração:\n\nQual plano você deseja?', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Mensal (R$90)", callback_data: "confirmacao_pilates_mensal" }],
          [{ text: "Trimestral (R$250)", callback_data: "confirmacao_pilates_trim" }],
          [{ text: "Anual (R$850)", callback_data: "confirmacao_pilates_anual" }],
          [{ text: "⬅️ Voltar", callback_data: "pilates" }]
        ]
      }
    });
  }

  if (data === 'comprar_cardio') {
    ctx.reply('🏃 Cardio - Escolha a duração:\n\nQual plano você deseja?', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Mensal (R$85)", callback_data: "confirmacao_cardio_mensal" }],
          [{ text: "Trimestral (R$230)", callback_data: "confirmacao_cardio_trim" }],
          [{ text: "Anual (R$820)", callback_data: "confirmacao_cardio_anual" }],
          [{ text: "⬅️ Voltar", callback_data: "cardio" }]
        ]
      }
    });
  }

  if (data === 'comprar_personal') {
    ctx.reply('👨‍🏫 Personal Trainer - Escolha o pacote:\n\nQual plano você deseja?', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Sessão Básica (R$150)", callback_data: "confirmacao_personal_basica" }],
          [{ text: "4 Sessões (R$500)", callback_data: "confirmacao_personal_4" }],
          [{ text: "12 Sessões (R$1400)", callback_data: "confirmacao_personal_12" }],
          [{ text: "⬅️ Voltar", callback_data: "personal" }]
        ]
      }
    });
  }

  // Confirmações
  if (data.startsWith('confirmacao_')) {
    ctx.reply('✅ Compra confirmada!\n\n📞 Entre em contato conosco para finalizar a matrícula:\n\n📱 WhatsApp: (79) 98765-4321\n📞 Telefone: (79) 3333-4444\n📧 Email: contato@academia.com\n\nNos vemos em breve! 💪', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "⬅️ Voltar", callback_data: "menu" }]
        ]
      }
    });
  }
});

bot.launch();