import React, { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductValue } from '../../StateProvider'; // For fetching products
import { useStateValue } from '../../StateProvider'; // For managing basket
import sizeGuideImage from "../../assets/sizeguidefull.webp"; // Adjust the path as needed
import axios from 'axios';

function Product() {
  const { id } = useParams(); // Get product ID from URL
  const { dispatch } = useStateValue(); // Global state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Find the product
  const product = products.find(item => String(item._id) === String(id));

  // State for selected options
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);


  const toggleSizeGuide = () => setShowSizeGuide(!showSizeGuide);

  // Initialize selected options when product is found
  useEffect(() => {
    if (product) {
      setSelectedSize(product.size?.[0] || null);
      setSelectedImage(product.image?.[0] || null);
    }
  }, [product]);

  // Handle loading, error, or missing product states
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  // Calculate discount
  const discountAmount = product.price && product.discount
    ? Math.round((product.price * product.discount) / 100)
    : 0;
  const finalPrice = product.price ? product.price - discountAmount : 0;

  // Add to Basket
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        _id: product._id,
        title: product.title,
        image: product.image,
        price: product.price,
        color: product.color,
        productId: product.productId,
        discount: product.discount,
        quantity: 1,
        size: selectedSize,
      },
    });
  };

  // const { id } = useParams(); // Get the product ID from the URL
  // const { products, loading, error } = useProductValue(); // Get products from the context
  // const { dispatch } = useStateValue(); // Get dispatch from global state


  // // Handle loading or error state
  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  // // Find the product by ID (parse ID to number if necessary)
  // const product = products && products.find(item => item._id === parseInt(id));
  // const [selectedSize, setSelectedSize] = useState(product.size[0]); // Default to the first size
  // const [showSizeGuide, setShowSizeGuide] = useState(false);

  // const toggleSizeGuide = () => setShowSizeGuide(!showSizeGuide);

  // // State to store the selected image
  // const [selectedImage, setSelectedImage] = useState(product.image[0]);
  // if (!product) {
  //   return <div>Product not found</div>; // Handle the case where the product is not found
  // }
  // const discountAmount = Math.round((product.price * product.discount) / 100);
  // const finalPrice = product.price - discountAmount;
  // const addToBasket = () => {
  //   // Push the item into the data layer
  //   dispatch({
  //     type: "ADD_TO_BASKET",
  //     item: {
  //       _id: product._id,
  //       title: product.title,
  //       image: product.image,
  //       price: product.price,  // Make sure price is included here
  //       color: product.color,  // Make sure Color is included here
  //       sku: product.sku,  // Make sure sku is included here
  //       discount: product.discount,  // If relevant
  //       quantity: 1, // Or whatever logic you need for quantity
  //       size: selectedSize, // Pass the selected size
  //     }
  //   });
  // };

  return (  <div>
      <main className="py-3 lg:py-6 bg-customBg-500">
        <div className="container  mx-auto px-4 flex flex-col md:flex-row">

          {/* Left Section - Image Previews Only For Large device */}
          <div className="hidden lg:block w-full lg:w-3/4">
            <div className="grid lg:grid-cols-2 gap-8 relative">

              {/* All Image Preview Section */}
              <div className='grid gap-2 grid-cols-2'>
                {product.image.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(image)} // Update selected image on click
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `center`
                    }}
                    className={`my-5 aspect-[3/4] w-15 h-20 md:w-27 md:h-36 rounded-md shadow-md cursor-pointer 
        transition-transform duration-200 ease-in-out 
        hover:scale-105 ${selectedImage === image ? 'border-2 border-blue-500 shadow-lg' : 'border border-transparent'}
      `}
                  >
                  </div>
                ))}
              </div>

              {/* Right Side - Main Image Preview */}
              <div
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  width: '340px',  // Custom width
                  height: '452px'   // Custom height
                }}
                className="flex justify-center items-center w-full max-w-sm aspect-[3/4] rounded-lg shadow-lg z-10"
              >
              </div>
            </div>
          </div>
          {/* Left Section - Image Previews Only For Small & Medium device */}
          <div className="block lg:hidden w-full md:w-1/2 px-4  bg-customBg-400 rounded-xl">
            <div className="flex flex-wrap justify-around">
              {/* Main Image Preview */}
              <div
                style={{
                  backgroundImage: `url(${selectedImage})`,
                  backgroundSize: `cover`,
                  backgroundPosition: `center`,
                  width: '300px',  // Custom width
                  height: '400px'   // Custom height
                }}
                className="flex justify-center items-center  pl-0  max-w-sm aspect-[3/4] rounded-lg shadow-lg z-10"
              >
              </div>
              {/* All Image Preview Section */}

              <div className='flex flex-row gap-2 md:grid md:grid-cols-3 md:gap-4 items-center ml-0 z-10'>
                {product.image.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(image)} // Update selected image on click
                    style={{
                      backgroundImage: `url(${image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                    className={`my-5 aspect-[3/4] w-15 h-20 md:w-27 md:h-36 rounded-md shadow-md cursor-pointer 
        transition-transform duration-200 ease-in-out 
        hover:scale-105 ${selectedImage === image ? 'border-2 border-blue-500 shadow-lg' : 'border border-transparent'}
      `}
                  >
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* Right Section - Product Details */}
          <div className="p-4 rounded-xl shadow-lg bg-customBg-300 w-full md:w-1/2  mt-0">
            <h1 className="">{product.title}</h1>
            <h3 className="">ProductID : {product.productId}</h3>
            {/* Price section  */}

            {/* <div className='p-2 bg-yellow-200 rounded-2xl'>
              <p className="text-md text-gray-700 font-semibold">Original Price: {product.price} Tk</p>
              <p className="text-sm text-gray-600 cursor-auto font-semibold">Discount: {product.discount}% finalPrice :{finalPrice} </p>
            </div> */}

            <div className="p-2 bg-customBg-100 rounded-2xl border shadow-lg">
              {/* <p className="">Original Price : <span className="line-through ">{product.price} </span>Tk <span className="text-red-600 text-xs font-semibold tracking-tight">
                {product.discount}% OFF
              </span>
              </p> */}
              <p className="flex items-start space-x-2">
                <span>Original Price: </span>
                <span className="line-through">{product.price} </span>Tk
                <span className="text-red-600 text-xs font-semibold tracking-tight self-start">
                  {product.discount}% OFF
                </span>
              </p>

              <div className="flex items-start space-x-2">
                <span className="">Discounted Price : {finalPrice} Tk</span>
                <span className="text-green-600 text-xs font-semibold tracking-tight self-start">
                  [Save: {(product.price - finalPrice)} TK]
                </span>
              </div>

            </div>






            {/* Sizes */}
            {/* <div className="mb-4">
              <h3 className="font-bold text-xl">Available Sizes:</h3>
              <div className="flex space-x-2">
                {product.sizes.map((size, index) => (
                  <span
                    key={index}
                    className="border rounded-md px-3 py-1 bg-gray-200"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div> */}

            {/* <div className="mt-2 ">
              <label htmlFor="size" className="block text-xl  font-bold">Size</label>
              <select id="size" className="block w-full mt-2 p-2 border border-gray-300 text-sm rounded-lg">
                {product.size.map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
            </div> */}



            {/* color  */}
            <div className="mt-2 ">
              <h3 className="text-md">Color : {product.color}</h3>
              {/* <h3 className="text-md">Product Code : {product.sku}</h3> */}

            </div>
            {/* SIZE */}
            <div className="flex items-center space-x-4">
              <label htmlFor="size" className="text-lg">Size</label>
              <select
                id="size"
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="block w-[25%] p-1 border border-[#e49b0f] text-sm rounded-lg text-center"
              >
                {product.size.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </select>

              <button
                onClick={toggleSizeGuide}
                className="px-2 py-1 border border-[#e49b0f] text-sm rounded-lg text-center  font-semibold rounded-full hover:bg-customBg-900 hover:text-white transition-all duration-300 ease-in-out"
              >
                Size Guide
              </button>

            </div>

            {/* Full-Screen Overlay for Size Guide Image */}
            {showSizeGuide && (
              <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
                <div className="relative w-full h-full flex justify-center items-center">
                  {/* Close Button */}
                  <button
                    onClick={toggleSizeGuide}
                    className="absolute top-4 left-4 lg:left-20 bg-red-500 text-white px-2 py-1 rounded-full text-xs hover:bg-red-700"
                  >
                    Close
                  </button>
                  {/* Image */}
                  <img
                    src={sizeGuideImage} // Use the imported image or public path
                    alt="Size Guide"
                    className="w-auto h-full object-contain" // Adjust width and height for full screen
                  />
                </div>
              </div>
            )}



            <div className="flex justify-center items-center mt-4">
              <Link to={`/shoping-cart`} onClick={addToBasket}>
                <button className="w-[230px] animate-bounce bg-[#e49b0f] text-white py-[10px] font-bold px-4 rounded-lg hover:bg-customBg-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                  <p className='animate-pulse tracking-widest'>Buy Now</p>
                </button>
              </Link>
            </div>

            {/* Description */}
            {/* <p className=" text-sm text-gray-600 mt-2">{product.description}</p> */}
            {/* Dynamic Description Section */}
            <div className="mb-1">
              <h3 className="text-lg">Specification:</h3>
              <ul className="list-disc ml-5">
                {product.description?.map((desc, index) => (
                  <li className="text-sm" key={index}>{desc}</li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg">Features:</h3>
              <ul className="list-disc ml-5">
                {product.features && product.features.map((feature, index) => (
                  <li className="text-sm" key={index}>{feature}</li>
                ))}
              </ul>
            </div>



          </div>
        </div>

        {/* Product Description */}
        <div className="container mx-auto px-4 mt-12 text-sm">
          <div className="bg-gradient-to-tr from-sky-50 to-sky-600 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900">Product Description</h2>
            <p className="text-gray-700 mt-4">{product.description}</p>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900">Customer Reviews</h3>
              <div className="mt-4">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-500">★★★★☆</span>
                  <p className="text-gray-700">"Great product! Really happy with my purchase."</p>
                </div>
                <div className="flex items-center space-x-2 mt-4">
                  <span className="text-yellow-500">★★★☆☆</span>
                  <p className="text-gray-700">"Good quality & i'm satisfy."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>

  );
}

export default Product;
