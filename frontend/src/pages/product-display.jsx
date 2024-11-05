import { useEffect, useState } from "react"
import ProductList from "../components/product-list"
import ProductDetial from "../components/product-detials"

const Products = () => {

    const [products,setProducts] = useState([])
    const [selectedProduct,setSelectedProduct] = useState(null)

    useEffect(() => {
        
        const mockProducts = [
            { id: 1, name: 'Product 1', description: 'Description for Product 1' },
            { id: 2, name: 'Product 2', description: 'Description for Product 2' },
            { id: 3, name: 'Product 3', description: 'Description for Product 3' },
        ];
          
        setProducts(mockProducts);

    } , [])

    const handleProductSelection = (product) => {
        setSelectedProduct(product)
    };

    


    return(
        <div>
            <ProductList products={products} selectProduct={handleProductSelection}></ProductList>
            <ProductDetial product={selectedProduct}></ProductDetial>
        </div>
    )

}

export default Products;