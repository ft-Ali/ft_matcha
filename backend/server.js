const express = require('express');
const cors = require('cors');
require('dotenv').config();

const knexConfig = require('./knexfile').development;
const knex = require('knex')(knexConfig);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'API ft_matcha fonctionne' });
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await knex('users').select('*');
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Serveur Express sur http://localhost:${PORT}`);
});
