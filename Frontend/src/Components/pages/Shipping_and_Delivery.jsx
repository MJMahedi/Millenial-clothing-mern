import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import AboutImg from './../../assets/banner4.jpg'
import AboutImg from './../../assets/banner6.jpg';
const Shipping_and_Delivery = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track which collapsible is open

    const handleToggle = (index) => {
        // If the same index is clicked, collapse it; otherwise, open the clicked one
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <>
            <style jsx>{`
                p {
                    color: #4a4a4a;
                    font-weight:normal;
                }
                table {
                    color: #4a4a4a;
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

                <div className="bg-customBg bg-opacity-40 max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
                    <div className="relative">
                        <img
                            src={AboutImg}
                            alt="Our Team PNG"
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-4xl text-white font-semibold">Shipping and Delivery </h1>
                        </div>
                    </div>
                    <div className="p-2">
                        <h1 className="text-3xl text-center font-bold mb-4 animate-pulse">Shipping and Delivery Policy – <Link to="/" className="text-orange-500 hover:underline">
                            Millennial Clothing
                        </Link></h1>
                        <p>
                            "At <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>, we provide fast and reliable shipping across Bangladesh. Whether you are in Dhaka city or outside of Dhaka, we offer a range of shipping options to suit your needs. Please note that we currently do not have any physical outlets outside Dhaka."
                        </p>
                        <h2 className="text-2xl text-center font-bold my-4">Shipping Options</h2>
                        <div className="w-[100%] space-y-1">
                            {/* question 1 */}
                            <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                                <input type="checkbox" checked={openIndex === 1} onChange={() => handleToggle(1)} className="peer" />
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base	">Standard Shipping (Within Bangladesh)</h3></div>
                                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                                    <hr className="py-1" />
                                    <p>
                                        Delivery within Dhaka City: Estimated 3-4 business days <br />
                                        Delivery Outside Dhaka: Estimated 4-7 business days.
                                    </p>
                                </div>
                            </div>
                            {/* question 2 */}
                            <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                                <input type="checkbox" checked={openIndex === 2} onChange={() => handleToggle(2)} className="peer" />
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Express Shipping (Only for Dhaka City)</h3></div>
                                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                                    <hr className="py-1" />
                                    <p>
                                        Delivery Time: 24-48 hours.
                                    </p>
                                </div>
                            </div>

                        </div>
                        <h2 className="text-2xl text-center font-bold my-4">Shipping Costs</h2>
                        <div className="w-[100%] space-y-1">

                            {/* question 3 */}
                            <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                                <input type="checkbox" checked={openIndex === 3} onChange={() => handleToggle(3)} className="peer" />
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Shipping Cost Details</h3></div>
                                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                                    <hr className="py-1" />
                                    <table class="w-full border-separate border-spacing-2 border border-customBg-800 rounded-md ...">
                                        <thead>
                                            <tr>
                                                <th class="border border-customBg-700 ...">Shipping categories</th>
                                                <th class="border border-customBg-700 ...">Shipping time</th>
                                                <th class="border border-customBg-700 ...">Shipping cost</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="border border-slate-300 ...">Standard shipping (within Dhaka)</td>
                                                <td class="border border-slate-300 ...">Estimated 3-4 business days</td>
                                                <td class="border border-slate-300 ...">BDT 60</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-300 ...">Standard shipping (outside of Dhaka)</td>
                                                <td class="border border-slate-300 ...">Estimated 4-7 business days</td>
                                                <td class="border border-slate-300 ...">BDT 120</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-300 ..."> Standard shipping (Sub-Urban Dhaka)</td>
                                                <td class="border border-slate-300 ...">Estimated 4-7 business days</td>
                                                <td class="border border-slate-300 ...">BDT 80</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-300 ...">Express shipping (within Dhaka metropolitan area), </td>
                                                <td class="border border-slate-300 ...">24-48 hours</td>
                                                <td class="border border-slate-300 ...">BDT 120</td>
                                            </tr>
                                            <tr>
                                                <td class="border border-slate-300 ...">Not applicable for Lawn and Gardening items</td>
                                                <td class="border border-slate-300 ..."> </td>
                                                <td class="border border-slate-300 ..."> </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-2xl text-center font-bold my-4">Important Notes:</h2>
                        <div className="w-[100%] space-y-1">

                            {/* question 4 */}
                            <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                                <input type="checkbox" checked={openIndex === 4} onChange={() => handleToggle(4)} className="peer" />
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base"> Split Orders:</h3></div>
                                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                                    <hr className="py-1" />
                                    <p>
                                        If your order is split into multiple shipments, the total shipping charge will be divided among the invoices based on the individual invoice value. However, the total shipping cost for the order will remain the same.
                                    </p>
                                </div>
                               

                            </div>
                            {/* question 5 */}
                            <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                                <input type="checkbox" checked={openIndex === 5} onChange={() => handleToggle(5)} className="peer" />
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base"> Split Orders:</h3></div>
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Additional Weight Charges: </h3></div>
                                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                                    <hr className="py-1" />
                                    <p>
                                        For standard shipping within Bangladesh, the listed cost covers up to the first 1 kg. For each additional kilogram, a fee of BDT 40 will be added to the shipping charge.
                                    </p>
                                </div>
                               

                            </div>
                        </div>
                        <h2 className="text-2xl text-center font-bold my-4">Why Choose Millennial Clothing for Shipping in Bangladesh?</h2>
                        <div className="w-[100%] space-y-1">

                            {/* question 6 */}
                            <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                                <input type="checkbox" checked={openIndex === 6} onChange={() => handleToggle(6)} className="peer" />
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base"> Fast Delivery: </h3></div>
                                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                                    <hr className="py-1" />
                                    <p>
                                    Express shipping options available for Dhaka city, ensuring delivery within 24-48 hours.
                                    </p>
                                </div>
                               

                            </div>
                            {/* question 7*/}
                            <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                                <input type="checkbox" checked={openIndex === 7} onChange={() => handleToggle(7)} className="peer" />
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base"> Nationwide Shipping:</h3></div>
                               
                                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                                    <hr className="py-1" />
                                    <p>
                                    We deliver to all areas of Bangladesh, including rural and suburban regions.
                                    </p>
                                </div>
                               

                            </div>
                            {/* question 8*/}
                            <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                                <input type="checkbox" checked={openIndex === 8} onChange={() => handleToggle(8)} className="peer" />
                                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Affordable Rates: </h3></div>
                               
                                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                                    <hr className="py-1" />
                                    <p>
                                    Competitive and transparent shipping costs for all delivery locations.
                                    </p>
                                </div>
                               

                            </div>
                        </div>
                        <p className="text-center py-6">For more details on your order's status, visit our Order Tracking page or contact our customer support team.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shipping_and_Delivery
