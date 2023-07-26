const request = require('request');
const mongoose = require('mongoose');
const order = mongoose.model('Orderdetail');


const orderdetailsCreate = (req, res) => {
    const { userName, userAddress, products } = req.body;
    let orders = [];
    let orderId = createGuid();
    for (product in products) {
        let productId = products[product]._id;
        let cost = calculateTotal(products);
        orders.push({ userName, userAddress, cost, productId, orderId });
    }


    order.insertMany(orders)
        .then(order => {
         res.send({ orderId: orderId });
        })
        .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
        });
}

function calculateTotal(products) {
    let total = 0.0;
    for (product in products) {
        total += parseFloat(products[product].price);
    }
    return total.toString()
}

function createGuid() {
    function _p8(s) {
        var p = (Math.random().toString(16) + "000000000").substr(2, 8);
        return s ? "-" + p.substr(0, 4) + "-" + p.substr(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
}


const orderdetailsDeleteOne = (req, res) => {
    const orderId = req.params.orderdetailsid;
    if (orderId) {
        order.deleteMany({ orderId: orderId })
            .then(order => {
                res.send(null);
            })
            .catch(err => {
                console.log(err);
                res.status(404).send("unable to find order");
            });
    }
};


const orderdetailsUpdateOne = (req, res) => {
    const orderId = req.params.orderdetailsid;
    const { userName, userAddress } = req.body;
    order.updateMany({ orderId: orderId }, { $set: { userName: userName, userAddress: userAddress } }, { multi: true })
        .then(order => {
            console.log(order);
            return res.json({ success: true });
        })
        .catch(err => {
            return res.json({ msg: "Unable to Update", err: true });
        });
}

const orderdetailsReadOne = (req, res) => {
    const orderId = req.params.orderdetailsid;
    order
        .findOne({ orderId: orderId })
        .then(order => {
            return res.json({ order: order });
        })
        .catch(err => {
            return res.json({ msg: "Unable to get order details", err: true });
        });
}
module.exports = {
    orderdetailsCreate,
    orderdetailsDeleteOne,
    orderdetailsUpdateOne,
    orderdetailsReadOne
};