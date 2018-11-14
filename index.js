const express = require('express');
const port = 3001;
const api = require('./server/api/account');
const app = express();



app.use('/api', api);

app.get('/bank', (req, res) => {
    res.json({"address":"TC7CPPKFKQSU245TLAAFYUS2YBHI5W4Y7CCOUQ7Y"});
})


app.listen(port, (err) => {
    if(err) {
        return console.error(err);
    }
    console.log(`Listening to ${port}`);
});