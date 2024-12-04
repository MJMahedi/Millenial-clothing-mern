import React, { useEffect, useState } from 'react';
import { useProductValue } from '../../StateProvider';  // Access the ProductContext
import ProductItem from '../products/ProductItem';
import axios from 'axios';
function Winter() {

  // const { products, loading, error } = useProductValue();  // Get products from context
  const [winterProducts, setWinterProducts] = useState([]);
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchP = async () => {
    try {
      const response = await axios.get('/api/products');
      console.log("Fetched Data:", response.data);
      setProducts(response.data)
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false); // Ensure the spinner stops regardless of success or failure
    }
  }

  console.log("Hello from products");
  console.log('products: ', products);

  useEffect(() => {
    fetchP();
  }, []);

  // Filter products for Mina's Dream brand
  useEffect(() => {
    if (!loading && products.length > 0) {
      // const filteredProducts = products.filter(product => product.collection === "winter");
      const filteredProducts = products.filter(product => /winter/i.test(product.session));

      setWinterProducts(filteredProducts);
    }
  }, [products, loading]); // Run the filter on products change

  // Handle loading and error states
  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (

    <div className='bg-customBg bg-opacity-50'>
      <div className="py-2">
        <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
          <legend className="px-6 text-2xl text-center">Our Collections</legend>
        </fieldset>
      </div>


      <h2 className="text-center py-4">All Winter Collection Here</h2>

      <div className="product-list">
        {winterProducts.length > 0 ? (
          <div className='w-full py-6 px-2 md:px-4 flex justify-center'>
            <section
              className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-2 gap-y-4 md:gap-y-4 place-content-center'
            >
              {winterProducts.map(item => (
                <ProductItem key={item._id} item={item} />
              ))}</section>
          </div>
        ) : (
          <p>No products available for Mina's Dream.</p>
        )}
        {/* 
      {filteredProducts.length > 0 ? (
        <div className='w-full py-6 px-2 md:px-4 flex justify-center'>
          <section
            className='w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center'
          >
            {filteredProducts.map(item => (
              <ProductItem key={item._id} item={item} />
            ))}
          </section>
        </div>
      ) : (
        <div className="text-center text-red-500">No products found in this category.</div>
      )} */}
      </div>
    </div>
  )
}

export default Winter