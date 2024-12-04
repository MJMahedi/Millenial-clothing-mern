import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (<>
      


            <div className="hidden footer sm:grid grid-cols-3 justify-items-center  bg-customBg-600 text-black text-md p-6">
                <div className="bg-customBg pt-4 px-4 rounded-md">
                    <h3 className="flex items-center text-sky-900 text-md font-semibold  gap-2"> <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20"
                            height="20" className="fill-[#e49b0f]">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                    </a>
                        Get Special Discount In Your Inbox</h3>
                    <div className="flex justify-center items-center w-full leading-tight mb-1">
                        <form className="flex flex-col items-center md:flex-cols-2 w-full md:leading-tight gap-2">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md border border-[#e49b0f] focus:outline-none focus:ring-2 focus:ring-sky-400 w-full  md:w-2/3"
                            />
                            <button
                                type="submit"
                                className="bg-[#e49b0f] text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all w-full   md:w-2/3"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                    <h3 className="flex items-center text-sky-900 text-md font-semibold  gap-2 leading-tight mb-1"> <a href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-[#e49b0f]" width="20"
                            height="20"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" /></svg>
                    </a>
                        For Any Help You May Call Us At <br />
                    </h3>
                    <p className="text-center text-sky-900 font-medium md:text-sm mt-[-12px] leading-tight">
                        +8801317201109 <br />
                        Open 24 Hours a Day, 7 Days a Week
                    </p>

                </div>

                <nav className=''>
                    <h6 className="footer-title text-info text-lg">Millennial Clothing</h6>
                    <Link to={"/about-us"} className="link link-hover">About us</Link>
                    <Link to={"/terms-conditions"} className="link link-hover">Terms & Conditions</Link>
                    <Link to={"/privacy-policy"} className="link link-hover">Privacy Policy</Link>
                    <Link to={"/return-policy"} className="link link-hover">Return & Cancellation Policy</Link>
                    <Link to={"/career"} className="link link-hover">Career</Link>



                </nav>
                <nav className=''>
                    <h6 className="footer-title text-info text-lg">Top Categories</h6>


                    <Link to={"/category-products/men"} className="link link-hover">Men's Fashion</Link>
                    <Link to={"/category-products/women"} className="link link-hover">Women's Fashion</Link>
                    <Link to={"/category-products/kids"} className="link link-hover">Kid's Fashion</Link>
                    <Link to={"/minas-dream"} className="link link-hover">Mina's Dream Collections</Link>
                    <Link to={"/"} className="link link-hover">Season's Pick</Link>


                </nav>
                <nav>
                    <h6 className="footer-title text-info text-lg">Customer Service</h6>
                    <Link to={"/howtoorder"} className="link link-hover">How to Order</Link>
                    <Link to={"/Shipping_and_Delivery"} className="link link-hover">Shipping & Delivery</Link>
                    <Link to={"/size-guide"} className="link link-hover">Size & Care Guide</Link>
                    <Link to={"/FAQs"} className="link link-hover">FAQs</Link>
                    <Link to={"/contact-us"} className="link link-hover">Contact US</Link>
                </nav>
            </div>
            {/* Small Device  */}
            <div className="sm:hidden footer justify-items-center bg-customBg text-md p-6">
                <div className="bg-customBg py-4 px-12 rounded-md">
                    {/* Heading */}
                    <h3 className="flex items-center text-sky-900 text-sm font-semibold gap-2">
                        <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="20"
                                height="20"
                                className="fill-[#e49b0f]"
                            >
                                <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                            </svg>
                        </a>
                        Get Special Discount In Your Inbox
                    </h3>

                    {/* Form Section */}
                    <div className="flex justify-center items-center w-full leading-tight mb-1">
                        <form className="flex flex-col items-center gap-2 w-3/4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="px-4 py-2 rounded-md border border-[#e49b0f] focus:outline-none focus:ring-2 focus:ring-sky-400 w-full"
                            />
                            <button
                                type="submit"
                                className="bg-[#e49b0f] text-white text-center px-4 py-2 rounded-md hover:bg-customBg-900 transition-all w-full sm:w-1/3"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                    {/* Contact Section */}

                    <h3 className="flex items-center text-sky-900 text-sm font-semibold gap-2 leading-tight mb-1">
                        <a href="">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="fill-[#e49b0f]"
                                width="20"
                                height="20"
                            >
                                <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                            </svg>
                        </a>
                        For Any Help You May Call Us At:
                    </h3>

                    {/* Phone Number Section */}
                    <p className="text-center text-sky-900 font-medium mt-[-12px] leading-tight">
                        +8801317201109 <br />
                        Open 24 Hours a Day, 7 Days a Week
                    </p>

                </div>

                <nav className='w-full shadow-sm'>

                    <div className="collapse collapse-plus rounded-[3px] bg-sky-50">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title font-medium footer-title text-sky-900">Millennial Clothing</div>
                        <div className="collapse-content">
                            <hr className="py-1" />
                            <p><Link to={"/about-us"} className="link link-hover">About us</Link></p>
                            <p><Link to={"/terms-conditions"} className="link link-hover">Terms & Conditions</Link></p>
                            <p> <Link to={"/privacy-policy"} className="link link-hover">Privacy Policy</Link></p>
                            <p><Link to={"/return-policy"} className="link link-hover">Return & Cancellation Policy</Link></p>
                            <p><Link to={"/career"} className="link link-hover">Career</Link></p>
                        </div>
                    </div>

                </nav>
                <nav className='w-full shadow-sm'>

                    <div className="collapse collapse-plus rounded-[3px] bg-sky-50">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title font-medium footer-title text-sky-900">Top Categories</div>
                        <div className="collapse-content">
                            <hr className="py-1" />
                            <p><Link to={"/category-products/men"} className="link link-hover">Men's Fashion</Link></p>
                            <p><Link to={"/category-products/women"} className="link link-hover">Women's Fashion</Link></p>
                            <p> <Link to={"/category-products/kids"} className="link link-hover">Kid's Fashion</Link></p>
                            <p><Link to={"/minas-dream"} className="link link-hover">Mina's Dream Collections</Link></p>
                            <p> <Link to={"/"} className="link link-hover">Season's Pick</Link></p>
                        </div>
                    </div>
                </nav>
                <nav className='w-full shadow-sm'>
                    <div className="collapse collapse-plus rounded-[3px] bg-sky-100">
                        <input type="radio" name="my-accordion-4" checked="checked" />
                        <div className="collapse-title font-medium footer-title text-sky-950 ">Customer Service</div>
                        <div className="collapse-content">
                            <hr className="py-1" />

                            <p>
                                <Link to={"/howtoorder"} className="link link-hover">How to Order</Link>
                            </p>
                            <p>
                                <Link to={"/Shipping_and_Delivery"} className="link link-hover">Shipping & Delivery</Link>
                            </p>
                            <p>
                                <Link to={"/size-guide"} className="link link-hover">Size & Care Guide</Link>
                            </p>
                            <p>
                                <Link to={"/FAQs"} className="link link-hover">FAQs</Link>
                            </p>
                            <p>
                                <Link to={"/contact-us"} className="link link-hover">Contact US</Link>
                            </p>




                        </div>
                    </div>
                </nav>
            </div>

            {/* <hr className='border-1 border-sky-900' /> */}

            <div className="footer gap-2 bg-customBg  flex flex-col-reverse md:flex-row items-center md:justify-around py-2 px-2">
                <aside className="grid-flow-col items-center">
                    <div className="text-[#12323a]">
                        <a href="/">
                            <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                fill-rule="evenodd" clip-rule="evenodd" className="fill-current">
                                <path
                                    d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z">
                                </path>
                            </svg>
                        </a>
                    </div>
                    {/* Developer Information  */}
                    <div>

                        <p className='tracking-widest text-sky-950'>

                            ©  {new Date().getFullYear()} MILLENNIAL | All rights reserved <br />
                            <span className='tracking-wide text-black  text-[13px]'>
                                Developed by Maruf & Mahedi
                            </span>
                        </p>
                    </div>
                </aside>
                <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end ">
                    <a href="https://www.facebook.com/profile.php?id=61565149320686" target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512"
                            className="">
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                        </svg>
                    </a>

                    <a href="https://www.youtube.com/@MillennialClothing/videos" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 448 512"

                        >
                            <path d="M282 256.2l-95.2-54.1V310.3L282 256.2zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9C337.9 384 224 384 224 384s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9C42 315.9 42 256.3 42 256.3s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4C110.1 128 224 128 224 128s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z" />
                        </svg>
                    </a>
                    <a href="https://x.com/Mille_nnial" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 448 512"

                        >
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                        </svg>
                    </a>


                    <a href="https://www.instagram.com/mille_nnialclothing/" target="_blank" rel="noopener noreferrer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 448 512"

                        >
                            <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" />
                        </svg>
                    </a>

                    <a href="https://www.tiktok.com/@mille_nnial?lang=en" target="_blank" rel="noopener noreferrer">
                        <svg
                            viewBox="0 0 448 512"
                            width="24"    // Set your desired width
                            height="24"   // Set your desired height

                        >
                            <g>
                                <g>
                                    <g>
                                        <path d="M392,15H66C32.3,15,5,42.3,5,76v326c0,33.7,27.3,61,61,61h326c33.7,0,61-27.3,61-61V76C453,42.3,425.7,15,392,15z
	 M298.1,180.8v121.9c0,61.2-49.7,110.9-110.9,110.9s-111-49.7-111-111s49.7-110.9,110.9-110.9c5.1,0,10.2,0.4,15.2,1.1v61.3
	c-26.8-8.4-55.4,6.5-63.8,33.3c-8.4,26.8,6.5,55.4,33.3,63.8c26.8,8.4,55.4-6.5,63.8-33.3c1.6-4.9,2.3-10.1,2.3-15.2V64.4h60
	c0,5.1,0.4,10.1,1.3,15.1c2.1,11.2,6.5,21.8,12.7,31.1c6.3,9.3,14.4,17.4,24.1,23.6c13.6,9,29.4,13.7,45.7,13.7l0.1,59.7
	C351.8,207.7,322.5,198.3,298.1,180.8z"/>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </a>



                </nav>
            </div>
       </>
    )
}

export default React.memo(Footer);
