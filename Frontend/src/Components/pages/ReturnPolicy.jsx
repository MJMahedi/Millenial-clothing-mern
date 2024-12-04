import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from './../../assets/banner5.jpg';
function ReturnPolicy() {
    const email = "info@millennial-clothing.com"; // Replace with the desired email address
    const subject = ""; // Optional subject
    const body = "";
  
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
            <div className="bg-customBg bg-opacity-40 max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
                <div className="relative">
                    <img
                        src={AboutImg}
                        alt="Return & Replacement Policy"
                        className="w-full h-64 md:h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-4xl text-center text-white font-semibold">Return & Replacement Policy</h1>
                    </div>
                </div>
                <div className="p-8">
                    <h1 className="text-3xl font-bold mb-4">Return & Replacement Policy</h1>

                    <p className=" mb-4">
                        At Millennial Clothing, we strive to ensure our customers receive their products in perfect condition. However, in rare instances where your expectations are not met, we value the trust you place in us. To reinforce this bond, we offer the option to return products that are damaged or incorrectly designed. In such cases, we will provide you with a replacement product.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Information We Collect</h2>

                    <p className="mb-4">
                        We may collect the following information:
                    </p>

                    <ul className="list-disc list-inside mb-4">
                        <li>Your name and contact information</li>
                        <li>Demographic information</li>
                        <li>Other information relevant to customer surveys and/or offers</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-2">How We Use the Information</h2>

                    <p className="mb-4">
                        We require this information to understand your needs and provide you with a better service, and in
                        particular
                        for
                        the following reasons:
                    </p>

                    <ul className="list-disc list-inside mb-4">
                        <li>Internal record keeping</li>
                        <li>Improving our products and services</li>
                        <li>Sending promotional emails about new products, special offers, or other information which we think you
                            may
                            find
                            interesting</li>
                        <li>From time to time, we may also use your information to contact you for market research purposes. We may
                            contact
                            you by email, phone, or mail. We may use the information to customize the website according to your
                            interests.</li>
                    </ul>

                    <h2 className="text-2xl font-bold mb-2">Security</h2>

                    <p className="mb-4">
                        We are committed to ensuring that your information is secure. In order to prevent unauthorized access or
                        disclosure,
                        we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the
                        information we collect online.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Cookies</h2>

                    <p className="mb-4">
                        A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree,
                        the
                        file
                        is added, and the cookie helps analyze web traffic or lets you know when you visit a particular site.
                        Cookies
                        allow
                        web applications to respond to you as an individual. The web application can tailor its operations to your
                        needs,
                        likes, and dislikes by gathering and remembering information about your preferences.
                    </p>

                    <p className="mb-4">
                        Overall, cookies help us provide you with a better website by enabling us to monitor which pages you find
                        useful
                        and which you do not. A cookie in no way gives us access to your computer or any information about you,
                        other
                        than
                        the data you choose to share with us.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Links to Other Websites</h2>

                    <p className="mb-4">
                        Our website may contain links to other websites of interest. However, once you have used these links to
                        leave
                        our
                        site, you should note that we do not have any control over that other website. Therefore, we cannot be
                        responsible
                        for the protection and privacy of any information which you provide whilst visiting such sites and such
                        sites
                        are
                        not governed by this privacy statement. You should exercise caution and look at the privacy statement
                        applicable
                        to
                        the website in question.
                    </p>

                    <h2 className="text-2xl font-bold mb-2">Controlling Your Personal Information</h2>

                    <p className="mb-4">
                        You may choose to restrict the collection or use of your personal information in the following ways:
                    </p>

                    <ul className="list-disc list-inside mb-4">
                        <li>If you have previously agreed to us using your personal information for direct marketing purposes, you
                            may
                            change your mind at any time by writing to or emailing us at [email protected]</li>
                        <li>We will not sell, distribute, or lease your personal information to third parties unless we have your
                            permission
                            or are required by law to do so. We may use your personal information to send you promotional
                            information
                            about
                            third parties which we think you may find interesting if you tell us that you wish this to happen.</li>
                        <li>You may request details of personal information which we hold about you. If you would like a copy of the
                            information held on you, please write to [Your Company Name, Address, City, State, Zip Code] or email
                            [email protected]</li>
                        <li>If you believe that any information we are holding on you is incorrect or incomplete, please write to or
                            email
                            us as soon as possible at the above address. We will promptly correct any information found to be
                            incorrect.
                        </li>
                    </ul>

                    <p className="mb-4">
                        This privacy policy is subject to change without notice.
                    </p>

                </div>

            </div>
            <div className="mt-8 text-center">
                <p>
                    For any questions or concerns,contact us at:<br />

                    Email: <a
                        href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                        className="text-blue-500 hover:underline ml-1"
                    >
                        info@millennial-clothing.com
                    </a>
                    <br />
                    Website:<Link to="/" className="text-orange-500 hover:underline">
                        www.millennial-clothing.com
                    </Link>
                </p>
                <p className="text-gray-700 mb-4">
                    Thank you for choosing <span>
                        <Link to="/" className="text-orange-500 hover:underline">
                            Millennial Clothing
                        </Link>
                    </span>. We look forward to serving you and making your shopping experience exceptional.
                </p>
                <Link
                    to="/contact-us"
                    className="animate-bounce  bg-sky-500 text-sky-50 py-2 px-4 rounded hover:bg-sky-600 transition duration-300"
                >
                    Contact Us
                </Link>
            </div>
        </div>

    </>
    )
}




export default ReturnPolicy
