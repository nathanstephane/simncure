const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/api', async (req,res) => {
    try {
        const fetchedUsers = await axios.get('https://randomuser.me/api/');
        res.setHeader("Access-Control-Request-Headers","X-Requested-With, accept, content-type");
        res.setHeader("Access-Control-Allow-Methods","GET, POST");
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(fetchedUsers.data)  
    }
    catch (error)
    {
        console.error(`The following error occured during API call to fetch single user: ${error}`);
        
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.get('/api/users', async (req,res) => {
    try {
        const fetchedUsers = await axios.get('https://randomuser.me/api/?results=5');
        res.setHeader("Access-Control-Request-Headers","X-Requested-With, accept, content-type");
        res.setHeader("Access-Control-Allow-Methods","GET, POST");
        res.setHeader("Access-Control-Allow-Origin","*");
        res.json(fetchedUsers.data)  
    }
    catch (error)
    {
        console.error(`The following error occured while fetching multiple users: ${error}`);
        
        res.status(500).json({error: 'Internal Server Error'});
    }
});

app.listen(PORT,() => {console.log(`Server running on localhost:${PORT}`)});