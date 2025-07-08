const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/',(req, res) => {
    res.json({message: 'API ft_matcha fonctionne'});
});

app.get('/api/users', (req,res)  =>{
    res.json([
        {id: 1, name: 'Alice', age: 25},
        {id: 2, name: 'Alicia', age: 28}
    ]);
});

app.post('/api/profile/settings', (req, res) =>{
    const {gender, sexualPreferences, bio, interests} = req.body;
    console.log('Settings received: ', req.body);

    res.json({
        success: true,
        message: 'Paramètres sauvegardés',
        data:  {gender, sexualPreferences, bio, interests}
    });
});

app.listen(PORT,'0.0.0.0',() =>{
    console.log(`serveur express sur http://localhost:${PORT}`)
});