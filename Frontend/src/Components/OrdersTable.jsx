import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const OrdersTable = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const response = await fetch('/api/orders');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            console.error('Error fetching orders:', error);
        }
    };

    const updateOrderStatus = async (orderId, newStatus) => {
        try {
            const response = await fetch(`/api/orders/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            if (response.ok) {
                alert('Order status updated successfully');
                setOrders(prevOrders =>
                    prevOrders.map(order =>
                        order._id === orderId ? { ...order, status: newStatus } : order
                    )
                );
            } else {
                console.error('Failed to update order status');
            }
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    const deleteOrder = async orderId => {
        if (window.confirm('Are you sure you want to delete this order?')) {
            try {
                const response = await fetch(`/api/orders/${orderId}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    alert('Order deleted successfully');
                    setOrders(prevOrders => prevOrders.filter(order => order._id !== orderId));
                } else {
                    console.error('Failed to delete order');
                }
            } catch (error) {
                console.error('Error deleting order:', error);
            }
        }
    };

    return (
        <div>

            <Link to={'/dashboard'}><h1 className="text-2xl font-bold mb-5 text-center text-yellow-500 underline underline-offset-4 decoration-double decoration-orange-500">Millennial Dashboard</h1></Link>
            <h2 className="text-xl font-semibold mt-4">Orders Table</h2>
            
            <table className="min-w-full border-collapse border border-gray-200 mt-3">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Order ID</th>
                        <th className="border border-gray-300 p-2">User Info</th>
                        <th className="border border-gray-300 p-2">Address</th>
                        <th className="border border-gray-300 p-2">Product Details</th>
                        <th className="border border-gray-300 p-2">Shipping Cost</th>
                        <th className="border border-gray-300 p-2">Total Price</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Date</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order._id} className="bg-white text-[13px] border-b">
                            <td className="border border-gray-300 p-2">{order._id}</td>
                            <td className="border border-gray-300 p-2">
                                <p className='text-[10px] text-red-500'>{order.user ? `UserID: ${order.user.uid}` : 'Name: N/A'}</p>
                                <p>{order.user ? `Email: ${order.user.email}` : 'Email: N/A'}</p>
                            </td>
                            <td className="border border-gray-300 p-2">
                                <p>Phone: {order.address?.phone || 'N/A'}</p>
                                <p>House: {order.address?.house || 'N/A'}</p>
                                <p>Street: {order.address?.street || 'N/A'}</p>
                                <p>City: {order.address?.city || 'N/A'}</p>
                                <p>Postal Code: {order.address?.postalCode || 'N/A'}</p>
                            </td>
                            <td className="border border-gray-300 p-2">
                                {order.basket.length > 0 ? (
                                    <table className="min-w-full border border-gray-200">
                                        <thead>
                                            <tr>
                                                <th className="border border-gray-300 p-1">Title</th>
                                                <th className="border border-gray-300 p-1">Quantity</th>
                                                <th className="border border-gray-300 p-1">Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {order.basket.map((item, index) => (
                                                <tr key={index} className="bg-gray-100">
                                                    <td className="border border-gray-300 p-1">{item.title}</td>
                                                    <td className="border border-gray-300 p-1">{item.quantity}</td>
                                                    <td className="border border-gray-300 p-1">{item.price} Tk</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                ) : (
                                    <p>No items</p>
                                )}
                            </td>
                            <td className="border border-gray-300 p-2">{order.shippingCost}</td>
                            <td className="border border-gray-300 p-2">{order.total}</td>
                            <td className="border border-gray-300 p-2">
                                <select
                                    value={order.status}
                                    onChange={e => updateOrderStatus(order._id, e.target.value)}
                                    className="border border-gray-300 rounded p-1"
                                >
                                    <option value="Processing">Processing</option>
                                    <option value="Shipped">Shipped</option>
                                    <option value="Delivered">Delivered</option>
                                    <option value="Cancelled">Cancelled</option>
                                </select>
                            </td>
                            <td className="border border-gray-300 p-2">{new Date(order.orderDate).toLocaleDateString()}</td>
                            <td className="border border-gray-300 p-2 flex flex-wrap justify-around">
                                <button
                                    onClick={() => deleteOrder(order._id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;
