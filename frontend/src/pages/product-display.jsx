import { useEffect, useState } from "react"
import ProductList from "../components/product-list"
import ProductDetial from "../components/product-detials"
import Navi from "../components/navbar"
import axios from "../axios/axios"

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

    const handleProductSelection = async (product) => {
        setSelectedProduct(product)

        try {
            
            const response = await axios.get("/get-product-name");
            console.log('hii' , response.data)

        } catch (error) {
            
        }

    };

    


    return(
        <div className="flex h-screen">
            <ProductList className="flex-none" products={products} selectProduct={handleProductSelection}></ProductList>
            <div className="flex flex-col flex-grow">
                <Navi className="flex-none" ></Navi>
                <main className="flex-grow p-4 overflow-auto">
                <ProductDetial product={selectedProduct}></ProductDetial>
                </main>
            </div>
            
        </div>


    )

}

export default Products;