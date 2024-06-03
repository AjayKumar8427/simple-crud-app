const Product=require('../models/products.model')

// to add product
const addProduct =async(req,res)=>{
    try {
        const product = await Product.create(req.body);
        res.status(200).json({ product })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// to display all products
const allProduct =async (req, res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json({ product })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// to display product using id
const productUsingId =async (req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json({ product })
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
}
// to update product using id
const updatingProduct =async (req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({ updatedProduct })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

// to delete a product using id
const deletingProduct =async (req, res)=>{
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "product not found" })
        }
        res.status(200).json({ message: "product deleted successfully" })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports={addProduct,allProduct,productUsingId,updatingProduct,deletingProduct}