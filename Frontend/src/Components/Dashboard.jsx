import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrdersTable from './OrdersTable';
import UploadProduct from './UploadProduct';
import UpdatePeoduct from './UpdatePeoduct';


function Dashboard() {

    return (
        <div id='top' className="container mx-auto p-5">
            <h1 className="text-2xl font-bold mb-5 text-center text-yellow-500 underline underline-offset-4 decoration-double decoration-orange-500">Millennial Dashboard</h1>
            <div className='flex flex-col space-y-4'>
            <Link className='btn btn-info' to={'/upload-product'}>Upload product</Link>
            <Link className='btn btn-info' to={'/update-product'}>Update Product</Link>
            <Link className='btn btn-info' to={'/get-products'}>All Products</Link>
            <Link className='btn btn-info' to={'/get-orders'}>Orders</Link>
            </div>
            
            {/* <h2 className="text-xl font-semibold mt-4">add product</h2>
            <UploadProduct />
            
            <h2 className="text-xl font-semibold mt-4">Update Table</h2>
            <UpdatePeoduct />

            <h2 className="text-xl font-semibold mt-4">Orders Table</h2>
            <OrdersTable /> */}
            
        </div>
    );
}

export default Dashboard;


