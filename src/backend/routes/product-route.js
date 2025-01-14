import express from 'express';
import productService from '../services/product-service.js';

const router = express.Router();

router.get('/newproducts', async (req, res) => {
    try {
        const products = await productService.NewProducts();
        
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

router.get('/products', async (req, res) => {
    try {
        const products = await productService.AllProducts();
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/products/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product1s = await productService.ProductByID(id);
        const categoryName = product1s.recordsets[0][0].CategoryName;
        
        const product2s = await productService.ProductByCategoryName( categoryName);

        const response = {
            product1: product1s.recordsets[0],
            product2: product2s.recordsets[0]
        };

        return res.json(response);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }

});

router.get('/category/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const products = await productService.ProductByCategoryName(type);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/categorytype/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const products = await productService.ProductByCategory(type);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/producttags', async (req, res) => {
    try {
        const products = await productService.ProductByTags();
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/producttag/:type', async (req, res) => {
    const type = req.params.type;
    try {
        const products = await productService.ProductByTagName(type);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/search/:name', async (req, res) => {
    const name = req.params.name;
    try {
        const products = await productService.SearchProductByName(name);
        return res.json(products.recordsets[0]);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


export default router;
