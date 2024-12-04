import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../../StateProvider'
import { getTotal, getBasketDiscountTotal, getBasketPriceTotal, getItemTotal, getItemPriceTotal, getItemDiscountTotal } from '../../reducer';

function Shopping_cart() {
  // const shippingCost = 60;
  const { user, state, dispatch } = useStateValue();
  const { basket } = state;
  // console.log('this is current busket', basket)

  return (
    <div>
      <section className="bg-customBg-500 py-8 antialiased dark:bg-gray-900 md:py-16">
        <p className="text-center ">You are Sign In From : {user ? user.email : "No user logged in"}</p>
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl text-center font-semibold text-gray-900 dark:text-white sm:text-2xl">Shopping Cart</h2>
          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">

            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {basket.map((item) => (
                  <div
                    key={item._id}
                    className=" rounded-lg border border-gray-200 bg-customBg-600 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                  >

                    <div className="flex md:flex-row items-start md:items-center justify-between gap-4">
                      {/* Product Image */}
                      <a href="#" className="shrink-0">
                        <img
                          className="h-28 w-24 rounded-md object-cover"
                          src={item.image[0]}
                          alt={item.title}
                        />
                      </a>

                      {/* Product Details for Medium & Large Device */}
                      <div className="hidden md:block space-y-2 md:ml-4">
                        <a
                          href="#"
                          className="text-lg font-bold text-gray-900 hover:underline dark:text-white"
                        >
                          {item.title}
                        </a>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                          Size: <span className="font-semibold">{item.size || "N/A"}</span>
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                          Color: <span className="font-semibold">{item.color || "N/A"}</span>
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-400">
                          Product Code: <span className="font-semibold">{item.sku}</span>
                        </p>
                      </div>

                      {/* Pricing and Quantity */}
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 w-full md:w-auto">
                        {/* Price Details */}
                        <div className="text-end">
                          <div>
                            <p className="text-base font-bold text-gray-900 dark:text-white">
                              New Price: {getItemPriceTotal(basket, item._id)} Tk
                            </p>
                            <p className="text-sm font-semibold text-orange-500">
                              Discount: {getItemDiscountTotal(basket, item._id)}%
                            </p>

                          </div>
                          {/* Quantity Details  */}
                          <div>
                            <div className="flex items-center justify-around">
                              <label className="">Quantity:</label>
                              <div className="flex items-center">
                                <button onClick={() => dispatch({ type: 'decrement', id: item._id })} type="button" id="decrement-button" data-input-counter-decrement="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                  {/* Decrement SVG */}
                                  <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                  </svg>
                                </button>

                                <input type="text" id="counter-input" data-input-counter className="w-5 shrink-0 border-0 bg-transparent text-center text-sm font-bold text-gray-900 focus:outline-none focus:ring-0 dark:text-white" value={item.quantity} required />
                                <button onClick={() => dispatch({ type: 'increment', id: item._id })} type="button" id="increment-button" data-input-counter-increment="counter-input" className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                                  {/* Increment SVG */}
                                  <svg className="h-2.5 w-2.5 text-gray-900 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                  </svg>
                                </button>
                              </div>

                              <button onClick={() => dispatch({ type: 'REMOVE_FROM_BASKET', item })} type="button" className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500">
                                {/* Remove SVG */}
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Product Details Only For Small Device */}
                    <div className="md:hidden block md:ml-4">
                      <a
                        href="#"
                        className="text-lg font-bold text-gray-900 hover:underline dark:text-white"
                      >
                        {item.title}
                      </a>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Size: <span className="font-semibold">{item.size || "N/A"}</span>
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Color: <span className="font-semibold">{item.color || "N/A"}</span>
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-400">
                        Product Code: <span className="font-semibold">{item.sku}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>



            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-customBg-600 p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <p className="text-xl font-semibold text-gray-900 dark:text-white">Order summary <span className='text-red-600'>{basket.length}</span> items</p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal dark:text-gray-400">Original price : </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{getBasketPriceTotal(basket)} Tk</dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal  dark:text-gray-400">Total discount : </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{getBasketDiscountTotal(basket)} Tk</dd>
                    </dl>


                    {/* <dl className="flex items-center justify-between gap-4">
                      <dt className="text-sm font-normal  dark:text-gray-400">Shipping fee : </dt>
                      <dd className="text-sm font-medium text-gray-900 dark:text-white">{shippingCost} Tk</dd>
                    </dl> */}

                    <hr className="border-gray-300 dark:border-gray-600" />

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-semibold text-gray-900 dark:text-white">Total amount : </dt>
                      <dd className="text-base font-semibold text-gray-900 dark:text-white">{getBasketPriceTotal(basket) - getBasketDiscountTotal(basket) } Tk</dd>
                    </dl>
                  </div>
                </div>

                {/* <div className="flex justify-center items-center mt-4">
                  <Link to="/payment" >
                    <button className="w-[100%] animate-bounce bg-[#e49b0f] text-white py-[10px] font-bold px-4 rounded-lg hover:bg-customBg-900 focus:outline-none focus:ring-2 focus:ring-blue-600">
                      <p className='animate-pulse tracking-widest'>Checkout</p>
                    </button>
                  </Link>
                </div> */}
                <div className="flex justify-center items-center mt-4">
                  <Link to="/payment">
                    <button
                      className={`w-[100%] ${basket.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e49b0f]'} text-white py-[10px] font-bold px-4 rounded-lg hover:bg-customBg-900 focus:outline-none focus:ring-2 focus:ring-blue-600`}
                      disabled={basket.length === 0}
                    >
                      <p className='animate-pulse tracking-widest'>{basket.length === 0 ? 'No items in cart' : 'Checkout'}</p>
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shopping_cart;