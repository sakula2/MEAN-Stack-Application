const mongoose = require('mongoose');


const OrderdetailsSchema = mongoose.Schema({
    cost: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    userAddress: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        'default': Date.now
    },
    productId: {
        type: String,
        required: true
    },
    orderId:{
        type: String,
        required:true
    }
});


mongoose.model('Orderdetail', OrderdetailsSchema);