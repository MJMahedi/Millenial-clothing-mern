import React, { useState, useEffect } from 'react';
import { useStateValue, useProductValue } from '../../StateProvider';
import ProductItem from './ProductItem';
import Spinner from '../pages/Spinner'; // Import the Spinner component
import axios from 'axios';

const Collections = () => {
    const { state, dispatch } = useStateValue();
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
    
    // State to control "Show More" for each category
    const [showMoreMen, setShowMoreMen] = useState(false);
    const [showMoreWomen, setShowMoreWomen] = useState(false);
    const [showMoreCombo, setShowMoreCombo] = useState(false);
    const [showMoreKids, setShowMoreKids] = useState(false);
    const [showMoreMinasDream, setShowMoreMinasDream] = useState(false);


    const addToBasket = (product) => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: product,
        });
    };

    // Unique categories are already being logged if needed for future use
    // const uniqueCategories = [...new Set(products.map(item => item.category))];
    // console.log(uniqueCategories);

    // Function to get the displayed products based on the showMore state
    const getDisplayedProducts = (categoryProducts, showMore) => (
        showMore ? categoryProducts : categoryProducts.slice(0, 5)
    );

    // Show a spinner while loading
    if (loading) {
        return <Spinner />;
    }

    // Handle any errors (you can replace this with your custom error handling)
    if (error) {
        return <div className="text-red-500 text-center">Error: {error}</div>;
    }

    return (
        <div className='bg-customBg-600'>
            <div className="py-2">
                <fieldset className="text-black border-t-2 mx-4 md:mx-8 lg:mx-12 border-gray-600 rounded-xl">
                    <legend className="px-6 text-2xl text-center">Our Collections</legend>
                </fieldset>
            </div>

            {/* Updated Section for Improved Responsiveness */}
            {/* { title: 'Kids', category: 'kids', showMore: showMoreKids, setShowMore: setShowMoreKids }, */}

            {[{ title: 'Men', category: 'Men', showMore: showMoreMen, setShowMore: setShowMoreMen },
            { title: 'Women', category: 'Women', showMore: showMoreWomen, setShowMore: setShowMoreWomen },
            { title: 'Couple Goals', category: 'Couple Goals', showMore: showMoreCombo, setShowMore: setShowMoreCombo },

            { title: "Mina's Dream", category: null, brand: "Mina's Dream", showMore: showMoreMinasDream, setShowMore: setShowMoreMinasDream }]
                .map((section, index) => (
                    <div key={index}>
                        <h1 className='text-center text-xl py-1 text-black font-semibold underline underline-offset-8'>
                            {section.title}
                        </h1>
                        <div className="w-full py-2 px-2 md:px-4 lg:px-6 flex justify-center">
                            <section
                                className="grid w-full max-w-screen-xl gap-2 md:gap-4
                                           grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5"
                            >
                                {getDisplayedProducts(
                                    section.category
                                        ? products.filter(item => item.category.toLowerCase() === section.category.toLowerCase())
                                        : products.filter(item => item.brand.toLowerCase() === section.brand.toLowerCase()),
                                    section.showMore
                                ).map(item => (
                                    <div
                                        key={item._id}
                                        className="flex justify-center"
                                    >
                                        <ProductItem
                                            item={item}
                                            addToBasket={addToBasket}
                                            className="flex items-center"
                                        />
                                    </div>
                                ))}
                            </section>
                        </div>
                        <div className="flex justify-end px-4 md:px-6 lg:px-8">
                            <button
                                onClick={() => section.setShowMore(!section.showMore)}
                                className="btn btn-sm bg-[#e49b0f]  text-white px-4 rounded-md shadow-md hover:bg-customBg-900 transition-all
                                           text-sm md:text-base"
                            >
                                {section.showMore ? 'Show Less' : 'Show More'}
                            </button>
                        </div>
                    </div>
                ))}
        </div>
        //     );
        // }

        // export default Collections;


        // <div className='bg-customBg bg-opacity-50'>
        //     <div className="py-2 ">
        //         <fieldset className="border-t-2 mx-2 border-gray-600 rounded-xl">
        //             <legend className="px-6 text-2xl text-center">Our Collections</legend>
        //         </fieldset>
        //     </div>

        //     {/* Men Category */}
        //     <h1 className='text-center text-xl py-4 text-sky-600 font-semibold underline underline-offset-8'>Men</h1>
        //     <div className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 lg:px-6 flex justify-center">
        //         <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 place-content-center">
        //             {getDisplayedProducts(products.filter(item => item.category === 'Men'), showMoreMen)
        //                 .map(item => <ProductItem key={item._id} item={item} addToBasket={addToBasket} />)}
        //         </section>
        //     </div>
        //     <div className="flex justify-center py-2">
        //         <button
        //             onClick={() => setShowMoreMen(!showMoreMen)}
        //             className="bg-sky-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition-all"
        //         >
        //             {showMoreMen ? 'Show Less' : 'Show More'}
        //         </button>
        //     </div>

        //     {/* Women Category */}
        //     <h1 className='text-center text-xl py-4 text-sky-600 font-semibold underline underline-offset-8'>Women</h1>
        //     <div className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 lg:px-6 flex justify-center">
        //         <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 place-content-center">
        //             {getDisplayedProducts(products.filter(item => item.category === 'Women'), showMoreWomen)
        //                 .map(item => <ProductItem key={item._id} item={item} addToBasket={addToBasket} />)}
        //         </section>
        //     </div>
        //     <div className="flex justify-center py-2">
        //         <button
        //             onClick={() => setShowMoreWomen(!showMoreWomen)}
        //             className="bg-sky-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition-all"
        //         >
        //             {showMoreWomen ? 'Show Less' : 'Show More'}
        //         </button>
        //     </div>

        //     {/* Kids Category */}
        //     <h1 className='text-center text-xl py-4 text-sky-600 font-semibold underline underline-offset-8'>Kids</h1>
        //     <div className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 lg:px-6 flex justify-center">
        //         <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 place-content-center">
        //             {getDisplayedProducts(products.filter(item => item.category === 'kids'), showMoreKids)
        //                 .map(item => <ProductItem key={item._id} item={item} addToBasket={addToBasket} />)}
        //         </section>
        //     </div>
        //     <div className="flex justify-center py-2">
        //         <button
        //             onClick={() => setShowMoreKids(!showMoreKids)}
        //             className="bg-sky-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition-all"
        //         >
        //             {showMoreKids ? 'Show Less' : 'Show More'}
        //         </button>
        //     </div>

        //     {/* Mina's Dream Brand */}
        //     <h1 className='text-center text-xl py-4 text-sky-600 font-semibold underline underline-offset-8'>Mina's Dream</h1>
        //     <div className="w-full py-2 md:py-4 lg:py-6 px-2 md:px-4 lg:px-6 flex justify-center">
        //         <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-4 place-content-center">
        //             {getDisplayedProducts(products.filter(item => item.brand === "Mina's Dream"), showMoreMinasDream)
        //                 .map(item => <ProductItem key={item._id} item={item} addToBasket={addToBasket} />)}
        //         </section>
        //     </div>
        //     <div className="flex justify-center py-2">
        //         <button
        //             onClick={() => setShowMoreMinasDream(!showMoreMinasDream)}
        //             className="bg-sky-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-sky-700 transition-all"
        //         >
        //             {showMoreMinasDream ? 'Show Less' : 'Show More'}
        //         </button>
        //     </div>
        // </div>
    );
}

export default Collections;
