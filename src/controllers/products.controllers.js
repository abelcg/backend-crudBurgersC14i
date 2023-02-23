
const showProducts = (req, res) => {
    res.send('listar todos  los productos')
};

const getOneProduct = (req, res) => {
    res.send('se encontró el producto')
}

const createProduct = (req, res) => {
    res.send('se creó el producto')
}

const updateProduct = (req, res) => {
    res.send('se actualizó el producto')
}

const deleteProduct = (req, res) => {
    res.send('se borró el producto')
}


export { showProducts, createProduct, getOneProduct, updateProduct, deleteProduct}
