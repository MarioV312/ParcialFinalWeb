const moongose = require('mongoose'),
    Schema = moongose.Schema;

var FunkoSchema = Schema({
    personaje: {
        type: String,
        required: true,
        unique: true
    },

    tamaño:{
        type: String,
        required: true
    } ,

    precio: {
        type: Number,
        required: true
    },

    tipo : {
        type: String,
        required: true
    }
});

module.exports = moongose.model('Funko', FunkoSchema);