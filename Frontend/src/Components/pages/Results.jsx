import React from 'react';
import { useLocation } from 'react-router-dom';
import { useProductValue } from '../../StateProvider';
import ProductItem from '../products/ProductItem';
const Results = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const { products } = useProductValue();

    // Filter products based on the search query
    const filteredResults = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
    );
    const addToBasket = () => {
        // Push the item into the data Layer

        dispatch({
            type: "ADD_TO_BASKET",
            item: product
        });
    }
    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Search Results for: "{query}"</h2>
            {filteredResults.length > 0 ? (

                < div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {filteredResults.map(item => (
                        <ProductItem key={item._id} item={item} addToBasket={addToBasket} />

                    ))}
                </div>

            ) : (
                <p className="text-gray-500">No results found</p>
            )
            }
        </div>
    );
};

export default Results;
