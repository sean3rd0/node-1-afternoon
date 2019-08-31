const express = require('express');
const products = require('../products.json');/*why do there need to be TWO periods before the slash in '../products.json'? apparently ./ is in the same directory, ../ is one directory up, and plain-old / is the root directory. */
const getProducts = require('./getProducts')
const getProduct = require('./getProduct')
const pbExpressServerApp = express();
const port = 5000;
pbExpressServerApp.listen(port, () => {
    console.log(`shabbat shalom`)
});

pbExpressServerApp.get('/api/products', getProducts);

pbExpressServerApp.get('/api/product/:id', getProduct);