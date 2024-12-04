import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from './../../assets/banner2.jpg';
function PrivacyPolicy() {

    const email = "info@millennial-clothing.com"; // Replace with the desired email address
    const subject = ""; // Optional subject
    const body = "";

    return (
        <>
            <style jsx>{`
                p {
                    color: #4a4a4a;
                    margin-bottom: 4px;
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
                            alt="Privacy Policy"
                            className="w-full h-64 md:h-80 lg:h-96 object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-4xl text-white font-semibold">Privacy Policy</h1>
                        </div>
                    </div>
                    <div className="p-8">
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Privacy Policy – <Link to="/" className="text-orange-500 hover:underline">
                            Millennial Clothing
                        </Link></h2>

                        <p >
                            At <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>, we respect your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data. By using our website, you agree to these terms. For additional legal information, please review our  <Link to="/terms-conditions" className="text-blue-500 hover:underline"> Terms of Service</Link> and <Link to="/return-policy" className="text-blue-500 hover:underline"> Return Policy</Link>
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Information We Collect</h2>

                        <p >
                            We collect various types of data to enhance your shopping experience on <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing's
                            </Link> website.
                        </p>
                        <p>Automatically Collected Data:</p>

                        <ul className="list-disc list-inside">
                            <li>IP address, browser type, and device information.</li>
                            <li>Cookies and other technologies to track your website interactions.</li>

                        </ul>
                        <p>Personal Information (Voluntarily Provided):</p>

                        <ul className="list-disc list-inside">
                            <li>Name, email address, and phone number.</li>
                            <li>Postal/ZIP code</li>
                            <li>Payment information(e.g., credit card details)</li>
                            <li>Feedback, opinions, and preferences regarding our website and services</li>
                        </ul>
                        <p>Behavioral Data:</p>

                        <ul className="list-disc list-inside">
                            <li>Pages you visit, links you clic, and the frequency of visits.</li>
                            <li>Purchase history and shopping interactions.</li>

                        </ul>
                        <p>For further details, please refer to our <Link to="/FAQs" className="text-blue-500 hover:underline">FAQ</Link> or contact us at  <a
                            href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                            className="text-blue-500 hover:underline ml-1"
                        >
                            info@millennial-clothing.com
                        </a></p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">How We Use Your Information</h2>

                        <p >
                            We use your data to:
                        </p>

                        <ul className="list-disc list-inside ">
                            <li>Personalize your shopping experience.</li>
                            <li>Provide the products or services you request.</li>
                            <li>Communicate important updates, promotions, and offers.</li>
                            <li>Comply with legal requirements.</li>
                        </ul>
                        <p>
                            Additional Uses Include:
                        </p>

                        <ul className="list-disc list-inside">
                            <li>Improving our products and services based on your feedback.</li>
                            <li>Notifying you of contest results or sending promotional offers.</li>
                            <li>Conducting surveys to better understand your preferences.</li>
                        </ul>
                        <p>
                            Anonymous Data Is Used To:
                        </p>

                        <ul className="list-disc list-inside ">
                            <li>Provide relevant content and ads.</li>
                            <li>Track website usage and enhance performance.</li>
                            <li>Diagnose technical issues and optimize user experience.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Sharing Your Information</h2>

                        <p>
                            <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing's
                            </Link> does not sell, rent, or share your personal data without your consent. However, we may share your information in the following cases:
                        </p>

                        <ul className="list-disc list-inside">
                            <li>To fulfill product or service requests.</li>
                            <li>To comply with legal obligations, such as court orders or law enforcement requests.</li>
                            <li>To prevent fraud or illegal activities.</li>
                        </ul>
                        <p>
                            We may also share aggregated, non-identifiable data with our advertisers and partners to enhance our services and marketing strategies.
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Your Rights and Choices</h2>

                        <p>
                            You have control over your personal data. You can:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Update your account information anytime.</li>
                            <li>Opt-in or opt-out of marketing emails.</li>
                            <li>Request to have your data deleted by contacting <a
                                href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                className="text-blue-500 hover:underline ml-1"
                            >
                                info@millennial-clothing.com
                            </a>. We will process your request within one business day.</li>
                        </ul>

                        <p>
                            Please note that some service-related communications may still be sent to you for account updates.
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Data Security at <Link to="/" className="text-orange-500 hover:underline">
                            Millennial Clothing
                        </Link></h2>

                        <p>
                            We take every measure to protect your personal data by implementing:
                        </p>
                        <ul className="list-disc list-inside">
                            <li>Physical, electronic, and managerial safeguards.</li>
                            <li>Limiting access to sensitive information to authorized personnel only.</li>

                        </ul>
                        <p>
                            Although we strive to secure your data, no internet transmission is entirely risk-free. By using our website, you acknowledge that <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> is not liable for unauthorized access due to external factors beyond our control.
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Your Data Rights</h2>

                        <p >
                            You have the right to:
                        </p>

                        <ul className="list-disc list-inside ">
                            <li>Access the personal data we hold about you.</li>
                            <li>Correct any inaccuracies in your data.</li>
                            <li>Ask us to stop using your data for direct marketing purposes.</li>
                        </ul>

                        <p >
                            For any concerns or to exercise your rights, please contact us at <a
                                href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                className="text-blue-500 hover:underline ml-1"
                            >
                                info@millennial-clothing.com
                            </a>.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Policy Updates</h2>

                        <p >
                            <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> reserves the right to modify this Privacy Policy as necessary. Any changes will be communicated through a prominent notice on our website and will take effect immediately upon posting.
                        </p>
                        <div className="mt-8 text-center">
                            <p>
                                For any questions or concerns,contact us at:<br />
                                Email:
                                <a
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

                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy;
