const products = [
    {
        id : 1,
        name : 'Benedick Bedwyr',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dignissim lectus magna, eget molestie risus bibendum quis. Cras venenatis tincidunt ultricies. '
    },
    {
        id : 2,
        name : 'Sméagol Pellinore',
        description : 'Phasellus felis libero, varius sit amet ultrices a, ornare et urna. Nunc at odio lectus. In placerat risus sapien, eu ultricies purus dictum eget.'
    },
    {
        id : 3,
        name : 'Lancelot Sacripante',
        description : 'Etiam vehicula sapien magna, eget fermentum mauris rhoncus vitae. In in dolor eu ipsum ultrices imperdiet. Nam aliquet nisl et dui venenatis, vel semper mauris vestibulum.'
    }
]

const getProductList = (req,res) => {
    
    console.log('eneter get product name')
    const productList = products.map(product => ({id : product.id , name : product.name}));
    console.log(productList)
    res.status(200).json({productList : productList})

}

const getProductdetials = (req,res) => {

    const productId = parseInt(req.params.id , 10)
    const product = products.find((p) => p.id === productId);

    if(product) {
        res.status(200).json({product : product});
    }
    else{
        res.status(404).json({message : 'Product not found'})
    }

}

module.exports = { getProductList , getProductdetials }