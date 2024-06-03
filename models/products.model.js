const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "please enter product name"]

        },
        quantity: {
            type: Number,
            requird: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        image: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true
    }
)
const Product =mongoose.model("Product",productSchema);

module.exports=Product;