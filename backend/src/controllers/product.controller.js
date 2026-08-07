export const getProducts = async (req, res) => {
    try{
        res.json({
            message: "All products"
        })
    }
    catch(err){
        res.status(500).json({
            message: "Error fetching products"
        })
    }
}

export const createProduct = async (req, res) => {
    try{
        res.json({
            message : "create product",
            body: req.body
        })
    }
    catch(err){
        res.status(500).json({
            message: "Error creating product"
        })
    }
}