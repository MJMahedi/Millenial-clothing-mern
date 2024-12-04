import React,{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useStateValue, useProductValue } from '../../StateProvider'
import ProductItem from './ProductItem';
import axios from 'axios';



function Category_products() {

  const { category } = useParams(); // Get category from URL
  // console.log(category)


  // const { products, loading, error } = useProductValue();
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


  if (loading) {
    return <div>Loading...</div>; // Show a loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Handle any potential errors
  }

  // const [{ basket }, dispatch] = useStateValue();
  const { user, state, dispatch } = useStateValue();

  // const product = {
  //   id: 1,
  //   title: "rd shirt product 1",
  //   image: "image",
  //   price: 100,
  //   discount: 50,
  //   rating: 5,
  //   quantity: 1
  // };

  // Filter products based on the selected category
  const filteredProducts = products.filter(item => item.category.toLowerCase() === category.toLowerCase());

  // Filter the products based on the category from URL
  // const filteredProducts = products.filter((item) => {
  //   // Ensure item.category exists and is a string before using toLowerCase
  //   return item.category && typeof item.category === 'string' &&
  //     item.category === category;
  // });
  if (filteredProducts.length === 0) {
    return <p>No products found for {category}</p>;
  }
  // const filteredProducts = products.filter(product => 
  //   product.category && product.category.toLowerCase() === category.toLowerCase()
  // );


  const addToBasket = () => {
    // Push the item into the data Layer

    dispatch({
      type: "ADD_TO_BASKET",
      item: product
    });
  };


  return (
    // <div className='bg-sky-50'>

    //   <div class="py-6">
    //     <fieldset class="border-t-2 mx-2 border-gray-600 rounded-xl">
    //       <legend class="px-6 text-2xl text-center">{category} Collections</legend>
    //     </fieldset>
    //   </div>

    //   <article id="container" className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 flex justify-center">
    //     <section id="Projects"
    //       className="w-full  grid grid-cols-2 sm:grid-cols-3  lg:grid-cols-5 justify-items-center justify-center gap-x-2 md:gap-x-4 gap-y-2 md:gap-y-4 place-content-center">

    //       {filteredProducts.length > 0 ? (
    //         filteredProducts.map(item => (
    //           <ProductItem key={item._id} item={item} addToBasket={() => addToBasket(item)} />
    //         ))
    //       ) : (
    //         <p>No products found in this category.</p>
    //       )}
    //     </section>
    //   </article>
    // </div>
    <div className='bg-customBg bg-opacity-50'>
      {/* <h1 className='text-center text-2xl font-semibold'>{category}</h1> */}
      <h1 className='text-center text-2xl font-semibold'>
        {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}


      </h1>

      {filteredProducts.length > 0 ? (
        <div className='w-full py-6 px-1 md:px-8 lg:px-12 flex justify-center'>
          <section
            className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center justify-center gap-x-2 gap-y-4 place-content-center'
          >
            {filteredProducts.map(item => (
              <ProductItem key={item._id} item={item} />
            ))}
          </section>
        </div>
      ) : (
        <div className="text-center text-red-500">No products found in this category.</div>
      )}
    </div>
  )
}

export default Category_products
