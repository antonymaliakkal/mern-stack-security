const ProductList = ({ products, selectProduct }) => {
  const handleClick = (product) => {
    selectProduct(product);
  };

  return (
    <div>
      <div>
        <aside
          id="default-sidebar"
          className="top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-white-50 dark:bg-gray-800 shadow-md">
            <ul className="space-y-2 font-medium">

            {products.map((product) => (
          <li className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group" key={product.id} onClick={() => handleClick(product)}>
            {product.name}
          </li>
        ))} 
            </ul>
          </div>
        </aside>
      </div>    
    </div>
  );
};

export default ProductList;
