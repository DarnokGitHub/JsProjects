require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const APIURL = 'https://api.thecatapi.com/v1/images/search?limit=30'; //30 images of cats. you can do up to 10 without API KEY
const api_key = process.env.CAT_API_KEY;

app.use(express.json());
app.use(cors());


app.get('/api/data', async (req, res) => {
    try {
        
        const response = await axios.get(APIURL, {
            headers: {
                'x-api-key': api_key 
            }
        });
        res.set('Access-Control-Allow-Origin', '*');
        res.json(response.data); 
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error while downloading data' });
    }
});


app.listen(3000, () => {
    console.log('Not working on port 3000');
});

