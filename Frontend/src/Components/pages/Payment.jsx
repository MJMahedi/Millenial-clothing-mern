import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import {
  getTotal, getItemPriceTotal, getItemDiscountTotal, getBasketDiscountTotal, getBasketPriceTotal, getItemTotal
} from '../../reducer';
import OrderConfirmation from './OrderConfmation';

function Payment() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  // const [showModal, setShowModal] = useState(false);
  const { user, state, dispatch } = useStateValue();  // Destructuring `basket` and `user` directly
  const { basket, shippingCost } = state;
  
  const navigate = useNavigate();



  const updateShippingCost = (area) => {
    const newShippingCost = area === "outsideDhaka" ? 120 : 60;
    dispatch({
      type: "SET_SHIPPING_COST",
      shippingCost: newShippingCost,
    });
  };


  // Show order confirmation modal
  // const handleShowOrderConfirmation = () => {
  //   setShowConfirmation(true);
  // };

  // Handle order confirmation and WhatsApp redirect
  // const handleOrderConfirmation = () => {
  //   dispatch({ type: "EMPTY_BASKET" });  // Clear the basket
  //   // window.location.href = whatsappURL;  // Redirect to WhatsApp
  // };
  return (
    <div>
      <section className="bg-customBg-600 py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl text-center">Complete Order</h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">


            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-4 rounded-lg border bg-customBg-200 p-4 shadow-sm">
                <p className="text-xl font-semibold">Order Summary ({basket?.length} items)</p>
                <dl className="flex items-center justify-between gap-4">
                  <dt>Original price was</dt>
                  <dd>{getBasketPriceTotal(basket)} Tk</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4">
                  <dt className="text-orange-600">Total Discount:</dt>
                  <dd>{getBasketDiscountTotal(basket)} Tk</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 border-t pt-2">
                  <dt>SubTotal:</dt>
                  <dd>{getTotal(basket)} Tk</dd>
                </dl>
                {/* Area Selection */}
                <div className="mt-2 gap-2 flex items-center">
                  <label htmlFor="area" className="flex font-bold">Select Delivery Area</label>
                  <select
                    className="border rounded-md px-4 py-2"
                    onChange={(e) => updateShippingCost(e.target.value)}
                    defaultValue="insideDhaka"
                  >
                    <option value="insideDhaka">Inside Dhaka</option>
                    <option value="outsideDhaka">Outside Dhaka</option>
                  </select>

                </div>

                <dl className="flex items-center justify-between gap-4">
                  <dt>Shipping Cost:</dt>
                  <dd>{shippingCost} Tk</dd>
                </dl>
                <dl className="flex items-center justify-between gap-4 border-t pt-2">
                  <dt>Total:</dt>
                  <dd>{getTotal(basket) + shippingCost} Tk</dd>
                </dl>
                {/* Payment Method */}
                <div className="mt-2 gap-2 flex items-center">
                  <label htmlFor="area" className="flex font-bold">Payment Method</label>
                  <select
                    className="border rounded-md px-4 py-2"
                    // onChange={(e) => updateShippingCost(e.target.value)}
                    defaultValue="cashondelivery"
                  >
                    <option value="insideDhaka">Cash On Delivery Only</option>
                    {/* <option value="outsideDhaka">Outside Dhaka</option> */}
                  </select>

                </div>

                {/* Button to open Order Confirmation */}
                <div className="flex justify-center">
                  <button
                    className="bg-[#e49b0f] text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all"
                    onClick={() => setShowConfirmation(!showConfirmation)} // Trigger rendering of OrderConfirmation
                  >
                    Confirm Order
                  </button>
                </div>

              </div>
                            {/* Conditionally Render Order Confirmation */}

              {showConfirmation && (
                <div className="mt-4">
                <OrderConfirmation
                    basket={basket}
                    shippingCost={shippingCost}
                    setShowModal={setShowConfirmation}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Order Confirmation Modal */}
      {/* {showModal && (
        <OrderConfirmation
          basket={basket}
          shippingCost={shippingCost} // Pass global shipping cost
          setShowModal={setShowModal} // Pass the function to close modal
        />
      )} */}
    </div>
  );
}

// return (
//   <div>
//     <section className="bg-customBg-600 py-8 antialiased dark:bg-gray-900 md:py-16">
//       <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
//         <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl text-center">Complete Order</h2>

//         <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
//           <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
//             <div className="space-y-6">
//               {basket.map(item =>
//                 <div key={item._id} className=" rounded-lg border border-gray-200 bg-customBg-200 p-2 shadow-sm dark:border-gray-700 dark:bg-gray-800 md:p-4">
//                   <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
//                     <a href="#" className="shrink-0 md:order-1">
//                       <img className="h-20 w-20 dark:hidden" src={item.image[0]} alt={item.title} />
//                     </a>
//                     <div className="flex items-center justify-between md:order-3 md:justify-end overflow-hidden">
//                       <div className="flex items-center">
//                         <button onClick={() => dispatch({ type: 'decrement', id: item._id })} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
//                           {/* Decrement SVG */}
//                           <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
//                           </svg>
//                         </button>
//                         <input type="text" className="w-10 shrink-0 border-0 bg-transparent text-center text-sm font-medium text-gray-900 dark:text-white" value={item.quantity} readOnly />
//                         <button onClick={() => dispatch({ type: 'increment', id: item._id })} type="button" id="increment-button" data-input-counter-increment="counter-input"  className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none">
//                           <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
//                             <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
//                           </svg>
//                         </button>
//                       </div>
//                       <div className="text-end md:order-4 md:w-32">
//                         <p className="text-sm text-gray-600 dark:text-white">Price:  {getItemPriceTotal(basket, item._id)} Tk</p>
//                         <p className="text-sm text-orange-500">Discount: {getItemDiscountTotal(basket, item._id)} Tk</p>
//                         <p className="text-sm font-bold text-gray-900">SubTotal: {getItemTotal(basket, item._id)} Tk</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className='text-center border-t-[1px] pt-1'>
//                     <h1 className='text-sm font-semibold'>{item.title}</h1>
//                     {/* <h1 className='text-[12px]'>Description: Lorem ipsum dolor sit amet...</h1> */}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
//             <div className="space-y-4 rounded-lg border border-gray-200 bg-customBg-200 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
//               <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary <span className='text-red-600'>{basket?.length}</span> items</p>

//               <div className="space-y-4">
//                 <div className="space-y-2">
//                   <dl className="flex items-center justify-between gap-4">
//                     <dt className="text-sm font-normal ">Original price: </dt>
//                     <dd className="text-sm font-medium ">{getBasketPriceTotal(basket)} Tk</dd>
//                   </dl>

//                   <dl className="flex items-center justify-between gap-4">
//                     <dt className="text-sm font-normal text-orange-600">Total Discount: </dt>
//                     <dd className="text-sm font-medium text-orange-500">{getBasketDiscountTotal(basket)} Tk</dd>
//                   </dl>

//                   <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
//                     <dt className="text-[14px] font-semibold text-gray-900">SubTotal</dt>
//                     <dd className="text-sm font-semibold text-gray-900">{getTotal(basket)} Tk</dd>
//                   </dl>

//                   <dl className="flex items-center justify-between gap-4">
//                     <dt className="text-sm font-normal text-gray-900">Shipping Cost: </dt>
//                     <dd className="text-sm font-medium text-gray-900">{shipingCost} Tk</dd>
//                   </dl>

//                   <dl className="flex items-center justify-between gap-4">
//                     <dt className="text-sm font-normal text-gray-900">Tax:</dt>
//                     <dd className="text-sm font-medium text-orange-500">Free</dd>
//                   </dl>

//                   <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2">
//                     <dt className="text-base font-bold text-gray-900">Total</dt>
//                     <dd className="text-base font-bold text-gray-900">{getTotal(basket) + shipingCost} Taka</dd>
//                   </dl>
//                 </div>
//               </div>

//               {/* Redirect to WhatsApp */}
//               <button onClick={handleOrderConfirmation} className="flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-md text-sky-50 bg-gradient-to-tr from-pink-600 to-sky-900">
//                 Confirm via WhatsApp
//               </button>

//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   </div>
// );


export default Payment;
