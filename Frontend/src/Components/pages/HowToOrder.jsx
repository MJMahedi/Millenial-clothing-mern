import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from './../../assets/banner5.jpg';

const HowToOrder = () => {
    return (<>
        {/* CSS-in-JS style block */}
        <style jsx>{`
                p {
                    color: #4a4a4a;
                    margin-bottom: 1.5rem;
                    line-height: 1.6;
                    font-size: 16px;
                    font-weight:normal;
                }
                 li {
                         color: #4a4a4a; 
                          margin-bottom: 0.5rem; 
                          font-weight:normal; 
                         padding-left: 1.2rem; 
                     }
            `}</style>

        <div className="bg-customBg bg-opacity-80 min-h-screen py-6 px-6 sm:px-12">
            <div className=" bg-customBg bg-opacity-40 max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                    <img
                        src={AboutImg}
                        alt="How To Order"
                        className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl text-center text-white font-semibold">How To Order</h1>
                    </div>
                </div>
                <div className="py-4 px-12">
                    <div className="order-info py-2">

                        <h1 className="leading-relaxed text-xl">
                            Order <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing </Link> via <span> <a
                                    href="https://www.facebook.com/profile.php?id=61565149320686"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Messenger
                                </a>
                            </span>, <span>
                                <a
                                    href="https://wa.me/01317201109"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:underline"
                                >
                                    WhatsApp
                                </a>
                            </span>
                            ,  <Link to="/" className="text-purple-500 hover:underline">
                                Website
                            </Link>
                            , or Visit Our Store in Dhaka.
                        </h1>








                        <p>
                            Shopping for <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> is now easier than ever! You can place your orders through Messenger, WhatsApp,
                            Our Website, or by visiting our Outlet in Dhaka. Here's how:
                        </p>

                        <section>
                            <h1 className='text-xl'>How to Place an Order on Messenger for <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>?</h1>
                            <ol className="list-disc list-inside mb-4">
                                <li>
                                    <strong>Message Us on Messenger:</strong> Visit our <a
                                    href="https://www.facebook.com/profile.php?id=61565149320686"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                > Facebook page
                                </a> and send us a message.
                                </li>
                                <li>
                                    <strong>Browse Our Clothing Collection:</strong> Let us know what items you’re interested in! We’ll help you
                                    choose the perfect size, color, and quantity.
                                </li>
                                <li>
                                    <strong>Confirm Your Order Details:</strong> After selecting your items, we’ll confirm your order details,
                                    including shipping information.
                                </li>
                                <li>
                                    <strong>Payment Options for Messenger Orders:</strong> Pay using Debit Card, Credit Card, bKash, or Nagad.
                                </li>
                                <li>
                                    <strong>Order Confirmation & Tracking:</strong> Once payment is processed, we’ll send you a confirmation
                                    message and your tracking details.
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className='text-xl'>How to Shop <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> via WhatsApp?</h2>
                            <ol className="list-disc list-inside mb-4">
                                <li>
                                    <strong>Send Us a WhatsApp Message:</strong> Start a chat at <a
                                    href="https://wa.me/+8801317201109"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-500 hover:underline"
                                >
                                    01317201109
                                </a>
                                </li>
                                <li>
                                    <strong>Select Your Apparel:</strong> Share your preferences, and we’ll guide you through selecting items
                                    from our clothing and fashion collection.
                                </li>
                                <li>
                                    <strong>Confirm Your Order & Complete Payment:</strong> We’ll confirm your order and send you a payment link.
                                    Pay via Debit Card, Credit Card, bKash, or Nagad.
                                </li>
                                <li>
                                    <strong>Get Your Order Confirmation:</strong> After completing payment, you’ll receive a confirmation
                                    message along with shipping information.
                                </li>
                            </ol>
                        </section>

                        <section>
                            <h2 className='text-xl'>How to Order <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> on Our Website?</h2>
                            <ul className="list-disc list-inside mb-4">
                                <li>
                                    <strong>Visit the <Link to="/" className="text-orange-500 hover:underline">
                                        Millennial Clothing
                                    </Link> Website:</strong> Go to{" "}
                                    <a href="https://millennial-clothing.com" target="_blank" rel="noopener noreferrer">
                                        our website
                                    </a>{" "}
                                    and explore our latest fashion collection.
                                </li>
                                <li>
                                    <strong>Add Items to Your Cart:</strong> Choose the styles, sizes, and colors that suit you best. Add them to
                                    your shopping cart.
                                </li>
                                <li>
                                    <strong>Proceed to Checkout:</strong> Enter your shipping details and choose your payment method: Debit
                                    Card, Credit Card, bKash, or Nagad.
                                </li>
                                <li>
                                    <strong>Receive Order Confirmation:</strong> After completing the payment process, you’ll receive an order
                                    confirmation email with tracking details.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-xl'>Visit the <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> Physical Store in Dhaka</h2>
                            <p>
                                Prefer an in-person shopping experience? Visit our <Link to="/" className="text-orange-500 hover:underline">
                                    Millennial Clothing
                                </Link> Shop/Outlet in Dhaka to browse and try
                                on items from our latest collection.
                            </p>
                            <address >
                                <p>
                                    <strong>Address:</strong> House:5-6, Lane-1, Avenue-5, Block-C, Mirpur-11, Dhaka-1216
                                </p>
                                <p>
                                    <strong>Opening Hours:</strong> 10:00 AM to 08:00 PM
                                </p>
                                <p>
                                    <strong>Payment Methods:</strong> In-store, you can pay using Debit Card, Credit Card, bKash, or Nagad.
                                </p>
                            </address>
                            <p>
                                In-store, you can enjoy personalized assistance and try out different styles before making your purchase.
                            </p>
                        </section>

                        <section>
                            <h2 className='text-xl'>Why Shop <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>?</h2>
                            <ul className="list-disc list-inside mb-3">
                                <li>
                                    <strong>High-Quality Fashion:</strong> We offer a variety of styles for men, women, and unisex fashion
                                    lovers.
                                </li>
                                <li>
                                    <strong>Multiple Payment Options:</strong> Pay easily using Debit Card, Credit Card, bKash, or Nagad across
                                    all our platforms.
                                </li>
                                <li>
                                    <strong>Local & International Shipping:</strong> Fast shipping options to ensure you receive your items
                                    quickly.
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='text-xl'>Need Help with Your Order?</h2>
                            <p>
                                Our team is always available to assist you with any questions. Whether you’re shopping on Messenger, WhatsApp,
                                our Website, or visiting our Shop in Dhaka, feel free to reach out for help.
                            </p>
                        </section>
                    </div>
                </div>

            </div>
        </div>

    </>
    )
}

export default HowToOrder
