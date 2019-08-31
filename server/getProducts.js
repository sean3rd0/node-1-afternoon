const products = require('../products.json');

const getProducts = (request, respond) => {
    if (request.query.price) {
        const items = products.filter(el => el.price >= parseInt(request.query.price)) 
        return respond.status(200).send(items)
    } 
    respond.status(200).send(products)
};

module.exports = getProducts;