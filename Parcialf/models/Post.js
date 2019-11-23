const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
    personaje: {
        type: String,
        required: true
    },
    tamaño: {
        type: String,
        required: true
    },
    precio: [{
        type: String, require: true 
    }],
    tipo: [
        {type:String}
    ],
}, {
    timestamps: true
});

module.exports = mongoose.model("Post", PostSchema);