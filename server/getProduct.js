const products = require('../products.json');

/* the following is the code that I wrote, but it only worked for all the numbers if I removed the else-statement. If I left the else-statement on, it only worked for the first item in the array... and I think it's because it only GOT to the first item in the for-loop and then sent the res.status(200/500).send(product/error-message)?*/
// const getProduct = (req, res, next) => {
//     const convertedNumberFromURLString = parseInt(req.params.id);
//     for (let i = 0; i < products.length; i++){
//         if (products[i].id === convertedNumberFromURLString){
//             res.status(200).send(products[i])} else {
//                 res.status(500).send('Item not in list')
//             }
//     };



//here is the solution's code, but I wrote it my own way, so there are tiny differences, but it still works:
const getProduct = (req, res) => {
    const item = products.find(el => el.id === parseInt(req.params.id))
    if (!item){
        return res.status(500).send('Item not in list')
    } else {return res.status(200).send(item)}
};

module.exports = getProduct;