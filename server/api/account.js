const express = require('express');
const router = express.Router();
const simpleJsonStore = require('simple-json-store');

const storeAccount = new simpleJsonStore('./accounts.json', {accounts: []});

router.get('/',(req, res) => {
    let accounts = storeAccount.get('accounts');
    res.json(accounts);
})

router.get('/:merchantId', (req, res) => {
    let account = {};
    const accounts = storeAccount.get('accounts');
    account = accounts.find(accounts => accounts.merchantId == req.params.merchantId);

    if(account){
        res.json(account);
    
    }else{
        res.json({'error':'account not found!'});
    }
})

module.exports = router;