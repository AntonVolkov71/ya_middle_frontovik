// server.js
const express = require('express');
const path = require('path');
const router = express.Router();
const app = express();
const PORT = 4000;

router.get('/',function(req,res){
    res.sendFile('D:\\1. Develop\\yandex\\sprint_1\\dist\\index.html');
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});