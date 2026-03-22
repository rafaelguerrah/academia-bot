exports.listarHorarios = (req, res) => {
  res.json([
    {
      nome: "Horários de Aulas Segunda a Sexta",
      horarios: [
        { aula: "Musculação", horario: "06:00 - 07:00" },
        { aula: "Yoga Matinal", horario: "07:30 - 08:30" },
        { aula: "Cardio", horario: "12:00 - 13:00" },
        { aula: "Pilates", horario: "18:00 - 19:00" },
        { aula: "Musculação Noturna", horario: "19:30 - 20:30" }
      ]
    },
    {
      nome: "Horários de Aulas Sábado e Domingo",
      horarios: [
        { aula: "Musculação", horario: "09:00 - 10:00" },
        { aula: "Yoga", horario: "10:30 - 11:30" },
        { aula: "Pilates", horario: "15:00 - 16:00" },
        { aula: "Cardio", horario: "16:30 - 17:30" }
      ]
    }
  ]);
};