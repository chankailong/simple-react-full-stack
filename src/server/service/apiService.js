const fetch = require('node-fetch');
const express = require('express');
const router = express.Router();

router.get('/dynamodbget', async (req, res) => {
    const result = await fetch('https://unqre4zxoa.execute-api.us-west-2.amazonaws.com/prd',
    { method: 'GET' })
    const json = await result.json()
    res.send(json)
});

router.get('/mysqlget', async (req, res) => {
    const result = await fetch('https://clrra7ls38.execute-api.us-west-2.amazonaws.com/prd',
    { method: 'GET' })
    const json = await result.json()
    res.send(json)
});

module.exports = router;