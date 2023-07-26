const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    cusine:{
        type: String,
        required:true
    }
    });
 mongoose.model('Menu', MenuSchema);