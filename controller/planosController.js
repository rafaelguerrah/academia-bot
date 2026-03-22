exports.listarPlanos = (req, res) => {
  res.json([
    {
      categoria: "💪 Musculação",
      planos: [
        { tipo: "Mensal", preco: 100 },
        { tipo: "Trimestral", preco: 270 },
        { tipo: "Anual", preco: 900 }
      ]
    },
    {
      categoria: "🧘 Yoga",
      planos: [
        { tipo: "Mensal", preco: 80 },
        { tipo: "Trimestral", preco: 220 },
        { tipo: "Anual", preco: 800 }
      ]
    },
    {
      categoria: "🤸 Pilates",
      planos: [
        { tipo: "Mensal", preco: 90 },
        { tipo: "Trimestral", preco: 250 },
        { tipo: "Anual", preco: 850 }
      ]
    },
    {
      categoria: "🏃 Cardio",
      planos: [
        { tipo: "Mensal", preco: 85 },
        { tipo: "Trimestral", preco: 230 },
        { tipo: "Anual", preco: 820 }
      ]
    },
    {
      categoria: "👨‍🏫 Personal Trainer",
      planos: [
        { tipo: "Sessão básica", preco: 150 },
        { tipo: "Pacote 4 sessões", preco: 500 },
        { tipo: "Pacote 12 sessões", preco: 1400 }
      ]
    }
  ]);
};