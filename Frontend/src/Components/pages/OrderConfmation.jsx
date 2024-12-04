import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useStateValue } from '../../StateProvider';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const OrderConfirmation = ({ basket, setShowModal }) => {
    // const [{ user }, dispatch] = useStateValue();
    const { user, dispatch, state } = useStateValue();
    const { shippingCost } = state;
    const [customerFirstName, setCustomerFirstName] = useState('');
    const [customerLastName, setCustomerLastName] = useState('');
    const [customerEmail, setCustomerEmail] = useState(user?.email || '');
    const [customerPhone, setCustomerPhone] = useState('');
    const [customerAddress, setCustomerAddress] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    const navigate = useNavigate();

    // Update button state when inputs change
    useEffect(() => {
        setIsButtonDisabled(
            !customerFirstName.trim() ||
            !customerLastName.trim() ||

            !customerPhone.trim() ||
            !customerAddress.trim()
        );
    }, [customerFirstName, customerLastName, customerEmail, customerPhone, customerAddress]);

    const handleOrderConfirmation = () => {
        // Calculate total basket price
        const totalBasketPrice = basket.reduce((acc, item) => {
            const itemTotalPrice = (item.price * item.quantity) * (1 - item.discount / 100);
            return acc + itemTotalPrice;
        }, 0).toFixed(2);

        // Add shipping cost to total price
        const totalPriceWithShipping = (parseFloat(totalBasketPrice) + parseFloat(shippingCost)).toFixed(2);


        // Create order details
        const orderDetails = basket
            .map(item => `
                Product: ${item.title}
                Quantity: ${item.quantity}
                Price: ${item.price} Taka
                Color: ${item.color}
                SKU: ${item.sku}
                Discount: ${item.discount}%
                Size: ${item.size}
                Total: ${((item.price * item.quantity) * (1 - item.discount / 100)).toFixed(2)} Taka
            `)
            .join('\n');

        // Combine all information into one message
        const message = `
            New Order Confirmation:
            Customer First Name: ${customerFirstName}
            Customer Last Name: ${customerLastName}
            Customer Email: ${customerEmail || 'Not Provided'}
            Customer Phone: ${customerPhone || 'Not Provided'}
            Customer Address: ${customerAddress}
            Order Details:
            ${orderDetails}
            Total Basket Price: ${totalBasketPrice} Taka
            Shipping Cost: ${shippingCost} Taka
        Total Price (Including Shipping): ${totalPriceWithShipping} Taka
        `;

        // EmailJS Logic
        emailjs
            .send(
                'service_7pzzg5i',
                'template_g7y0gwl',
                {
                    customerFirstName,
                    customerLastName,
                    customerEmail,
                    customerPhone,
                    customerAddress,
                    message,
                },
                'uNVDwlTKVdUoxUjaQ'
            )
            .then(() => {
                toast.success('Thank you for shopping with us! Your order has been confirmed.');
                setShowModal(false);
                dispatch({ type: 'EMPTY_BASKET' });
                localStorage.removeItem('basket'); // Clear basket from localStorage
                navigate('/thankyou'); // Redirect to homepage
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                toast.error('Failed to confirm the order. Please try again.');
            });
    };

    return (<>
    
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-customBg-600 rounded-lg shadow-lg p-4 w-full max-w-md">

            <h2 className="text-2xl font-semibold mb-2 text-center mt-4">Confirm Your Order</h2>

          <div className='px-4'>
          <div className='flex gap-2'>
                <input
                    type="text"
                    value={customerFirstName}
                    onChange={(e) => setCustomerFirstName(e.target.value)}
                    placeholder="Your First Name"
                    className="required w-full mb-4 px-4 py-2 rounded-md border border-[#e49b0f] focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
                <input
                    type="text"
                    value={customerLastName}
                    onChange={(e) => setCustomerLastName(e.target.value)}
                    placeholder="Your Last Name"
                    className="w-full mb-4 px-4 py-2 rounded-md border border-[#e49b0f] focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
            </div>
            <input
                type="email"
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full  mb-4 px-4 py-2 rounded-md border border-[#e49b0f] focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="Enter your phone number"
                className="w-full mb-4 px-4 py-2 rounded-md border border-[#e49b0f] focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
                type="text"
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                placeholder="Enter your Address"
                className="w-full mb-4 px-4 py-2 rounded-md border border-[#e49b0f] focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
          </div>

            <div className="flex justify-end gap-4">
                <button
                    onClick={() => setShowModal(false)}
                    className="bg-rose-900 text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all"
                >
                    Cancel !!
                </button>
                <button
                    onClick={handleOrderConfirmation}
                    disabled={isButtonDisabled}
                    className={`px-4 py-2 rounded-md text-white transition-all ${isButtonDisabled ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e49b0f] hover:bg-customBg-900'
                        }`}
                >
                    Confirm
                </button>
            </div>

        </div>
    </div></>

    );
};

export default OrderConfirmation;
