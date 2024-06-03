const express=require('express');
const router =express.Router();
const {allProduct, addProduct, productUsingId, updatingProduct, deletingProduct} = require('../controller/product.controller')

router.post('/' , addProduct)
router.get('/',allProduct)
router.get('/:id',productUsingId)
router.put('/:id',updatingProduct)
router.delete('/:id',deletingProduct)

module.exports = router;