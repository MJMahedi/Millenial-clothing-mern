import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProductForm = () => {
    const [formData, setFormData] = useState({
        productId: "",
        title: "",
        session: "regular",
        category: "Men",
        subCategory: "",
        productType: "",
        size: [],
        description: [],
        features: [],
        image: [],
        discount: 0,
        price: "",
        color: [],
        ratings: 0,
        brand: "",
        quantity: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleArrayChange = (name, value) => {
        setFormData({ ...formData, [name]: value.split(",").map((item) => item.trim()) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/products", formData);
            alert("Product added successfully!");
            console.log(response.data);
        } catch (error) {
            console.error(error);
            alert("Failed to add product.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <Link to={'/dashboard'}><h1 className="text-2xl font-bold mb-5 text-center text-yellow-500 underline underline-offset-4 decoration-double decoration-orange-500">Millennial Dashboard</h1></Link>
            {/* <h2 className="text-xl font-semibold mt-4">add product</h2> */}
            
            <h1 className="text-2xl font-bold mb-6 text-center">Add a New Product</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Product ID */}
                <div>
                    <label className="block text-gray-700">Product ID:</label>
                    <input
                        type="number"
                        name="productId"
                        value={formData.productId}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Title */}
                <div>
                    <label className="block text-gray-700">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Session */}
                <div>
                    <label className="block text-gray-700">Session:</label>
                    <select
                        name="session"
                        value={formData.session}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="winter">Winter</option>
                        <option value="summer">Summer</option>
                        <option value="fall">Fall</option>
                        <option value="spring">Spring</option>
                        <option value="regular">Regular</option>
                    </select>
                </div>

                {/* Category */}
                <div>
                    <label className="block text-gray-700">Category:</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                        <option value="Kids">Kids</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Couple Goals">Couple Goals</option>
                    </select>
                </div>

                {/* Sub-Category */}
                <div>
                    <label className="block text-gray-700">Sub-Category:</label>
                    <input
                        type="text"
                        name="subCategory"
                        value={formData.subCategory}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Product Type */}
                <div>
                    <label className="block text-gray-700">Product Type:</label>
                    <input
                        type="text"
                        name="productType"
                        value={formData.productType}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Sizes */}
                <div>
                    <label className="block text-gray-700">Sizes (comma-separated):</label>
                    <input
                        type="text"
                        onBlur={(e) => handleArrayChange("size", e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-gray-700">Description (comma-separated):</label>
                    <input
                        type="text"
                        onBlur={(e) => handleArrayChange("description", e.target.value)}
                        required
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Features */}
                <div>
                    <label className="block text-gray-700">Features (comma-separated):</label>
                    <input
                        type="text"
                        onBlur={(e) => handleArrayChange("features", e.target.value)}
                        required
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Images */}
                <div>
                    <label className="block text-gray-700">Images (comma-separated URLs):</label>
                    <input
                        type="text"
                        onBlur={(e) => handleArrayChange("image", e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Discount */}
                <div>
                    <label className="block text-gray-700">Discount (%):</label>
                    <input
                        type="number"
                        name="discount"
                        value={formData.discount}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Price */}
                <div>
                    <label className="block text-gray-700">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Colors */}
                <div>
                    <label className="block text-gray-700">Colors (comma-separated):</label>
                    <input
                        type="text"
                        onBlur={(e) => handleArrayChange("color", e.target.value)}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Ratings */}
                <div>
                    <label className="block text-gray-700">Ratings (0-5):</label>
                    <input
                        type="number"
                        name="ratings"
                        min="0"
                        max="5"
                        step="0.1"
                        value={formData.ratings}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Brand */}
                <div>
                    <label className="block text-gray-700">Brand:</label>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Quantity */}
                <div>
                    <label className="block text-gray-700">Quantity:</label>
                    <input
                        type="number"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full mt-1 p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                    >
                        Submit Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProductForm;
