const express = require('express');
const app = express();

const planosRoutes = require('./routes/planos');
const horariosRoutes = require('./routes/horarios');

app.use('/planos', planosRoutes);
app.use('/horarios', horariosRoutes);

app.listen(3000, () => console.log("API rodando na porta 3000"));