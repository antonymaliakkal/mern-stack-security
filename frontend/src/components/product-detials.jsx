const ProductDetial = ({product}) => {

    if(!product) {
        return (
            <div>
                <h3>Select a product</h3>
            </div>
        )
    }

    return(
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
        </div>
    )

}

export default ProductDetial;  