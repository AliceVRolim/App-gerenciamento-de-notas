//modelo do bd
const mongoose = require("mongoose");


const schema = mongoose.Schema;

const notaSchema = new schema({

    title: { type: String,
        required: true
    },
    content: { type: String,
        required: false
    },
    createAt: {
        type: Date,
        default: Date.now, 
    },


},
 { collection: "notas" });

module.exports =mongoose.model("notas", notaSchema);