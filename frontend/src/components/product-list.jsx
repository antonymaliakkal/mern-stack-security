const ProductList = ({products , selectProduct}) => {

    const handleClick = (product) => {
        selectProduct(product)
    } 

    return(
        <div>
            <h3>Products</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id} onClick={() => handleClick(product)}>{ product.name }</li>
                ))}
            </ul>
        </div>
    )

}

export default ProductList;