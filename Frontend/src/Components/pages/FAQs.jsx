import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import AboutImg from './../../assets/aboutPic.jpg'

function FAQs() {
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
              <h1 className="text-4xl text-white font-semibold">FAQs</h1>
            </div>
          </div>
          <div className="p-2">
            <h1 className="text-3xl text-center font-bold mb-4 animate-pulse">Frequently Asked Questions (FAQs) – <Link to="/" className="text-orange-500 hover:underline">
              Millennial Clothing
            </Link></h1>
            <p>
              "Discover the FAQs at <Link to="/" className="text-orange-500 hover:underline">
                Millennial Clothing
              </Link> for answers about our stylish Jackets, Sweaters, Panjabis, Shirts, T-shirts, Polo and more. Learn about sizing, shipping, returns, and customer support. Shop confidently with our clear policies and exceptional service!"
            </p>

            <h2 className="text-2xl text-center font-bold my-4">General Information</h2>
            <div className="w-[100%] space-y-1">
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 1} onChange={() => handleToggle(1)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base	">What is <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing?
                </Link></h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    <Link to="/" className="text-orange-500 hover:underline">
                      Millennial Clothing
                    </Link>is a premium fashion brand dedicated to stylish apparel for teenagers, young professionals, and bikers. Our diverse collection features Casual Jackets, Denim Jackets, Leather Jackets, Bomber Jackets, Pullover Sweaters, Cardigans, Hooded Sweaters, Windbreakers, Raincoats, Traditional Panjabis, Casual Shirts, Formal Shirts, Button-down Shirts, Polo Shirts, and various styles of T-shirts (including graphic, plain, and long sleeve). We also offer Jeans (slim fit, regular fit, distressed), Twill Pants, Cargo Pants, Formal Pants, Casual Shorts, Blazers, Suit Sets, Complete Suit Packages, as well as Underwear, Accessories (Caps, Hats, Scarves, Belts, Socks, and Bags), and a selection of Footwear (Casual Shoes, Sneakers, and Sandals) designed for every occasion.
                  </p>
                </div>
              </div>
              {/* question 2 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 2} onChange={() => handleToggle(2)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">What types of products do you offer?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    We provide a wide range of high-quality clothing, including:
                  </p>
                  <p>We offer a wide range of high-quality clothing, including:</p>
                  <ul className="list-disc list-inside mb-4">
                    <li>Jackets: Casual, denim, leather, bomber.</li>
                    <li>Sweaters: Pullover, cardigans, hooded sweaters.</li>
                    <li>Outerwear: Windbreakers, raincoats, traditional Panjabis.</li>
                    <li>Shirts: Casual, formal, button-down, polo shirts, and t-shirts.</li>
                    <li>Pants: Jeans, twill pants, cargo pants, formal pants, casual shorts.</li>
                    <li>Blazers: Casual and formal blazers, suit sets, and complete suit packages.</li>
                    <li>Underwear: Boxers and sleeveless tops.</li>
                    <li>Accessories: Caps, hats, scarves, belts, socks, bags.</li>
                    <li>Footwear: Casual shoes, sneakers, sandals.</li>
                  </ul>
                </div>
              </div>
              {/* question 3 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 3} onChange={() => handleToggle(3)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Do you have products for both men and women?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Yes! While our primary focus is on men's fashion, we also offer a stylish selection for women, ensuring that everyone can enjoy fashionable clothing.
                  </p>
                </div>
              </div>
            </div>

            {/* 2nd Div  */}
            <h2 className="text-2xl text-center font-bold my-6">Ordering and Payment</h2>
            <div className="w-[100%] space-y-1">
              {/* question 4 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 4} onChange={() => handleToggle(4)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">How can I place an order at <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link>?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Ordering is simple! Browse our extensive collection, select your favorites, and add them to your cart. Then, proceed to checkout and choose from a variety of secure payment options for a seamless shopping experience.
                  </p>
                </div>
              </div>
              {/* question 5 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 5} onChange={() => handleToggle(5)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">What payment methods are accepted?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    We accept major credit and debit cards, along with secure online payment options like Rocket, bKash and Nagad. Cash-on-delivery is also available for all over Bangladesh.
                  </p>
                </div>
              </div>
            </div>
            {/* 3rd Div  */}
            <h2 className="text-2xl text-center font-bold my-6">Shipping and Delivery</h2>
            <div className="w-[100%] space-y-1">
              {/* question 6 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 6} onChange={() => handleToggle(6)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Do you offer international shipping?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Currently, we ship throughout Bangladesh. International shipping will be available soon, so please check back for updates on our global delivery options.
                  </p>
                </div>
              </div>
              {/* question 7 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 7} onChange={() => handleToggle(7)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">How much does shipping cost?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Shipping costs vary based on your location and order size. You'll see the exact shipping fee during the checkout process based on your delivery address.
                  </p>
                </div>
              </div>
              {/* question 8 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 8} onChange={() => handleToggle(8)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">How can I track my order?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Once your order has shipped, you’ll receive a tracking number via email. Use this number to track your order on our website or the delivery service provider’s site.
                  </p>
                </div>
              </div>
            </div>
            {/* 4th Div  */}
            <h2 className="text-2xl text-center font-bold my-6">Returns and Exchanges</h2>
            <div className="w-[100%] space-y-1">
              {/* question 9 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 9} onChange={() => handleToggle(9)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">What is your return policy?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    We want you to be completely satisfied with your purchase. If you’re not happy, you can return unused items within 3 days of receiving them, provided they are in their original packaging. For more details, please review our <Link to="/return-policy" className="text-blue-500 hover:underline">Return & Cancellation Policy</Link>.
                  </p>
                </div>
              </div>
              {/* question 10 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 10} onChange={() => handleToggle(10)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Can I change or cancel my order?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    If you need to change or cancel your order, please contact us within 24 hours of placing it at info@millennial-clothing.com. After that time, changes may not be possible as your order could already be processed.
                  </p>
                </div>
              </div>
            </div>

            {/* 5th Div  */}
            <h2 className="text-2xl text-center font-bold my-6">Sizing and Care</h2>
            <div className="w-[100%] space-y-1">
              {/* question 11 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 11} onChange={() => handleToggle(11)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">How do I choose the right size?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    We have a detailed <Link to="/size-guide" className="text-blue-500 hover:underline">Size Guide</Link> available on each product page to help you select the perfect fit. If you’re unsure, feel free to reach out to our support team for assistance
                  </p>
                </div>
              </div>
              {/* question 12 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 12} onChange={() => handleToggle(12)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">What are the care instructions for my clothing?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Each product includes specific care instructions to ensure its longevity. We recommend following the washing and care labels closely. You can also refer to our <Link to="/size-guide" className="text-blue-500 hover:underline"> Care Guide </Link>for tips on maintaining your <Link to="/" className="text-orange-500 hover:underline">
                      Millennial Clothing
                    </Link> items.
                  </p>
                </div>
              </div>


            </div>
            {/* 6th Div  */}
            <h2 className="text-2xl text-center font-bold my-6">Customer Support</h2>
            <div className="w-[100%] space-y-1">
              {/* question 13 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 13} onChange={() => handleToggle(13)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">How can I contact customer service?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Our customer service team is here to assist you! Reach us via email at <strong>info@millennial-clothing</strong>.com or through our <Link to="/contact-us" className="text-orange-500 hover:underline">Contact Us </Link>page.
                  </p>
                </div>
              </div>
              {/* question 14 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 14} onChange={() => handleToggle(14)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Do you offer promotions or discounts?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Yes, we frequently run special promotions and discounts!<Link to="/register" className="text-orange-500 hover:underline"> Sign up</Link> for our newsletter and follow us on social media to stay updated on the latest deals and offers.
                  </p>
                </div>
              </div>


            </div>
            {/* 7th Div  */}
            <h2 className="text-2xl text-center font-bold my-6">Privacy and Security</h2>
            <div className="w-[100%] space-y-1">
              {/* question 15 */}
              <div className="collapse collapse-plus rounded-[5px] bg-base-200 shadow-md">
                <input type="checkbox" checked={openIndex === 15} onChange={() => handleToggle(15)} className="peer" />
                <div className="collapse-title text-md font-medium bg-base-200 peer-checked:bg-sky-50 text-center"><h3 className="lg:text-xl text-base">Is my personal information safe when shopping at <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link>?</h3></div>
                <div className="collapse-content text-sm bg-base-100 peer-checked:bg-base-300">
                  <hr className="py-1" />
                  <p>
                    Absolutely! We prioritize your privacy and security. All transactions are secured with advanced encryption, and we never share your personal information without your consent. For more details, visit our <Link to="/privacy-policy" className="text-orange-500 hover:underline">Privacy & Cookie Policy</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FAQs;
