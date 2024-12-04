import React from 'react'
import { Link } from 'react-router-dom'
import AboutImg from './../../assets/banner1.jpg';
function Terms_comditions() {

    const email = "info@millennial-clothing.com"; // Replace with the desired email address
    const subject = ""; // Optional subject
    const body = "";
    return (

        <>

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
                            alt="Our Team PNG"
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-4xl text-white font-semibold">Term's and Conditions</h1>
                        </div>
                    </div>
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-center my-6 animate-pulse">Terms and Conditions</h1>

                        <p className="mb-4">
                            Welcome to <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>, referred to herein as “we,” “us,” or “<Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>.” Please read these Terms and Conditions carefully before using this Site. By accessing or using this Site, you accept and agree to be bound by these terms and conditions (the “User Agreement”). This User Agreement becomes effective upon your use of the Site, signifying your acceptance. If you do not agree to be bound by this User Agreement, please do not access, register, or use this Site. This Site is owned and operated by <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> ( <strong>Registration number: TRAD/DNCC/01352/2024</strong> ).
                        </p>
                        <p className="mb-4">
                            We reserve the right to change, modify, add, or remove portions of these Terms and Conditions at any time without prior notification. Changes will be effective when posted on the Site without additional notice. Please check these Terms and Conditions regularly for updates. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.
                        </p>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Introduction</h2>


                        <p className="mb-4">
                            The domain name <Link to="/" className="text-orange-500 hover:underline">
                            https://www.millennial-clothing.com
                            </Link> (referred to as "Website") is owned by <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>, a company incorporated under the Companies Act, 1994 (Act XVIII of 1994). By accessing this Site, you confirm your understanding of the Terms of Use. If you do not agree to these Terms, you must not use this Website. We reserve the right to change, modify, add, or remove portions of these Terms at any time. Changes will be effective when posted on the Site without additional notice. Please check these Terms of Use regularly for updates. Your continued use of the Site following the posting of changes constitutes your acceptance of those changes.
                        </p>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">User Account, Password, and Security</h2>

                        <p className="mb-4">
                            Upon completing the registration process on the Website, you will receive a password and account designation. You are responsible for maintaining the confidentiality of your account and password, as well as all transactions or requests made under your account. You agree to (a) immediately notify <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> of any unauthorized use of your password or account or any other breach of security, and (b) ensure you exit from your account at the end of each session. <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> shall not be liable for any loss or damage arising from your failure to comply with these Terms and Conditions.
                        </p>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Services</h2>

                        <p className="mb-4">
                            <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> provides a range of internet-based services through the Website (collectively referred to as the "Service"). One such service allows users to purchase custom merchandise from <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> and various sellers (collectively, "Products"). Products can be purchased through the Website using various payment methods. Upon placing an order, <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> shall ship the product to you, and you shall be responsible for its payment.
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Privacy</h2>

                        <p className="mb-4">
                            By using our Site, you consent to our Privacy Policy. You confirm that you have read and fully understand the Privacy Policy of  <Link to="/" className="text-orange-500 hover:underline">
                                millennial-clothing.com
                            </Link>
                            , and you agree to its terms.
                        </p>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Limited User</h2>

                        <p className="mb-4">
                            You agree not to reverse engineer, modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Website. Limited reproduction and copying of the content of the Website are permitted, provided that <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing's
                            </Link> name is cited as the source and prior written permission is obtained. Unlimited reproduction, copying of the content for commercial or non-commercial purposes, and unwarranted modification of data and information within the Website content are strictly prohibited.
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">User Conduct and Rules</h2>

                        <p className="mb-4">
                            You agree to use the Website and the Service solely for lawful purposes and to upload only appropriate messages and materials. Specifically, you agree not to:
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            <li>Defame, abuse, harass, stalk, threaten, or violate the legal rights of others.</li>
                            <li>Publish, post, upload, distribute, or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent, or unlawful material or information.</li>
                            <li>Upload files containing software or materials protected by intellectual property laws unless you own the rights or have received all necessary consents.</li>
                            <li>Distribute files containing viruses, corrupted files, or similar software that may damage the Website's operation or another user's computer.</li>
                            <li>Conduct surveys, contests, pyramid schemes, or chain letters.</li>
                            <li>Download any file posted by another user of a Service that you know, or should reasonably know, cannot be legally distributed in that manner.</li>
                            <li>Falsify or delete any author attributions, legal notices, or proprietary designations in files uploaded.</li>
                            <li>Violate any applicable laws or regulations in or outside of Bangladesh.</li>
                            <li>Exploit any terms and conditions of this Agreement or any other terms for Website use.</li>
                        </ul>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Discount Policy</h2>

                        <p className="mb-4">
                            Users can avail only one discount method at a time (free delivery, coupon discount, or payment gateway discount).
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>•	If the cart contains a free delivery product, the coupon discount will only apply to non-free delivery products.</li>
                            <li>•	If a customer uses a payment gateway that offers a discount, the coupon discount will not apply.</li>

                        </ul>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Product Description</h2>

                        <p className="mb-4">
                            <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> strives for accuracy in product descriptions. However, we do not warrant that product descriptions or other content on the Site are accurate, complete, reliable, current, or error-free. If a product is not as described, your sole remedy is to return it in unused condition.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Links to Third-Party Sites</h2>

                        <p className="mb-4">
                            The Website may contain links to other websites ("Linked Sites"). These Linked Sites are not under the control of <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>, and we are not responsible for their content, including any links contained within them, or any changes or updates to those sites. The inclusion of any link does not imply endorsement by <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> of the Linked Sites or any association with their operators. Users are encouraged to verify the accuracy of all information on their own before relying on it.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Abusing <Link to="/" className="text-orange-500 hover:underline">
                            Millennial Clothing
                        </Link></h2>

                        <p className="mb-4">
                            Users are solely responsible for the materials or content uploaded onto the Website. You may be held legally liable for your content, including defamatory comments or materials protected by copyright or trademark. Please report problems, offensive content, or policy breaches to us. We are committed to ensuring that listed items do not infringe upon the intellectual property rights of third parties. If you believe your intellectual property rights have been infringed, please notify our team, and we will investigate promptly.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Order Acceptance and Pricing</h2>

                        <p className="mb-4">
                            Please be aware that there may be instances when an order cannot be processed for various reasons. <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> reserves the right to refuse or cancel any order for any reason at any time. You may be required to provide additional verification or information, including but not limited to your phone number and address, before we accept your order.
                        </p>
                        <p className="mb-4">
                            We strive to provide the most accurate pricing information on our site; however, errors may still occur. For instance, the price of an item might not be displayed correctly. In such cases, we reserve the right to refuse or cancel any orders. If an item is mispriced, we may, at our discretion, either contact you for instructions or cancel your order and notify you of such cancellation. We retain the right to refuse or cancel any such orders regardless of whether the order has been confirmed and your debit/credit card charged.
                        </p>
                        <p className="mb-4">
                            All prices listed on this website are subject to change without notice. The prices that apply are those in effect at the time of placing the order and include all applicable taxes and charges. Any additional charges or taxes will be clearly mentioned on the website.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Trademarks and Copyrights</h2>

                        <p className="mb-4">
                            Unless otherwise indicated, <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> owns all intellectual property rights associated with this website, including, but not limited to, copyrights, trademarks, service marks, trade names, designs, and related rights. You acknowledge and agree that you will not use, reproduce, or distribute any content from this website without prior authorization from <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>.
                        </p>
                        <p className="mb-4">
                            You retain ownership of any content you provide or upload while using our services. However, by uploading content for public viewing, such as in product customization services, you grant <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> a non-exclusive license to use your content.
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Return & Replacement Policy</h2>

                        <p className="mb-4">
                            While it is rare for our customers to receive damaged products, we understand that issues may arise. To maintain the trust between our customers and <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>, we offer a return option for products that are damaged or incorrectly designed. In such cases, <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> will provide a replacement product.
                        </p>
                        <p className="mb-4">
                            If you are unsatisfied with your order, you may return it under the following conditions:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>The return request is made within three (3) days of delivery.</li>
                            <li>All items must be unused and in their original condition, with tags and packaging intact.</li>
                            <li>If the item included a free promotional item, the free item must also be returned.</li>
                            <li>Refunds or replacements are subject to inspection by the <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> team.</li>
                            <li>Replacement is contingent upon stock availability. If the product is out of stock, a full refund will be issued.</li>
                            <li>Note that the Cash on Delivery convenience charge and shipping costs are non-refundable.</li>

                        </ul>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Reasons for Returns & Replacement</h2>

                        <p className="mb-4">
                            You may return items for the following reasons:
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            <li>Product is damaged, defective, or not as described.</li>
                            <li>Size mismatch for clothing.</li>
                            <li>Color mismatch for clothing.</li>
                            <li>Incorrect product sent.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">How to Return:</h2>

                        <p className="mb-4">
                            Contact the <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> Customer Care team by emailing info@millennial-clothing.com within three (3) days of receiving your order. After we receive your return, we will perform a quality check. If the reason for the return is valid, we will replace the product or initiate a refund.
                        </p>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Refund Policy</h2>



                        <ul className="list-disc list-inside mb-4">
                            <li>Refunds will be processed after we evaluate your return.</li>
                            <li>Replacement depends on stock availability. If the item is out of stock, you will receive a full refund.</li>
                            <li>The Cash on Delivery convenience charge and shipping costs are non-refundable.</li>
                            <li>For Cash on Delivery orders, no refund will be issued as no payment was made.</li>
                            <li>For payments made via Credit Card, Debit Card, Mobile Banking, or Bank Transfer, refunds will be credited to your respective account.</li>
                            <li>If an online payment was mistakenly made due to a technical error, a refund will be processed.</li>
                            <li>•	Refunds will typically be issued within 7-10 working days. If you do not receive your refund within this timeframe, please contact us at info@millennial-clothing.com, and we will investigate.</li>
                        </ul>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Order Cancellation</h2>

                        <p className="mb-4">
                            Upon placing an order, you will receive a phone confirmation. You may cancel your order during this confirmation call. Once you confirm acceptance of the product, cancellation may not be possible.
                        </p>
                        <p className="mb-4">
                            If you have selected Cash on Delivery (COD), no refund will be issued as no payment has been made for your order. For payments made via Credit Card, Debit Card, Mobile Banking, or Bank Transfer, a full refund will be processed back to your respective account following the cancellation of your order.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Governing Law</h2>

                        <p className="mb-4">
                            These terms shall be governed by and construed in accordance with the laws of Bangladesh, without regard to conflict of laws principles. Disputes arising in relation to these terms shall be subject to the exclusive jurisdiction of the courts in Dhaka.
                        </p>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Legal Disputes</h2>


                        <p className="mb-4">
                            In the event of a dispute between you and <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link>, our objective is to provide a neutral and cost-effective means of resolving the issue promptly. You and <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> agree to resolve any claims or controversies arising from this Agreement or our services as outlined in the subsections below or as mutually agreed upon in writing.
                        </p>
                        <p className="mb-4">
                            We encourage you to contact us directly to seek a resolution before pursuing these alternatives. We will consider reasonable requests for resolution through alternative dispute resolution procedures, such as arbitration, as an alternative to litigation.
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Applicable Law and Jurisdiction: These Terms and Conditions shall be interpreted and governed by the laws of Bangladesh. Each party agrees to submit to the jurisdiction of the courts in Dhaka.</li>
                            <li>•	Arbitration: Any claims or disputes arising from these Terms and Conditions will be settled through binding arbitration held in Dhaka, Bangladesh, before a legally trained arbitrator with experience in the information technology field. <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> reserves the right to seek injunctive or other equitable relief for the protection of intellectual property rights through the courts.</li>

                        </ul>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Unauthorized Charges on Your Card</h2>


                        <p className="mb-4">
                            If you notice charges on your credit or debit card for purchases made on <Link to="/" className="text-orange-500 hover:underline">
                                www.millennial-clothing.com
                            </Link>
                            without your authorization, please check with family members or colleagues who may have made the purchase. If you still cannot identify the charge, please report the unauthorized transaction within 60 days to allow <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> to initiate an investigation.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Cancellation of Fraudulent/Loss to Business Orders</h2>


                        <p className="mb-4">
                            To ensure a safe shopping experience, we monitor transactions for fraudulent activity. If suspicious activity is detected, <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> reserves the right to cancel past, pending, and future orders without liability. We may also cancel orders due to pricing inaccuracies or stock unavailability. Additional verifications may be required before accepting any order.
                        </p>
                        <p className="mb-4">
                            If your order is canceled after your card has been charged, the amount will be reversed to your Card Account. Note that promotional vouchers applied to canceled orders may not be refundable. A customer may be considered fraudulent under the following circumstances:
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            <li>Failure to respond to payment verification emails.</li>
                            <li>Inadequate documentation during payment verification.</li>
                            <li>Misuse of another customer's phone/email.</li>
                            <li>Use of invalid email and phone numbers.</li>
                            <li>Returning the wrong product.</li>
                            <li>Refusal to pay for an order.</li>
                            <li>Involvement in theft or similar activities.</li>

                        </ul>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Indemnifications</h2>


                        <p className="mb-4">
                            You agree to indemnify, defend, and hold <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> harmless from any and all losses, liabilities, claims, damages, costs, and expenses (including legal fees) arising from your breach or non-performance of any representations, warranties, or obligations under these Terms.
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Disclaimer of Warranties/Limitation of Liability</h2>


                        <p className="mb-4">
                            <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> strives to ensure that all information on the website is accurate. However, we do not warrant or represent the quality, accuracy, or completeness of any data, information, product, or service. <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> shall not be liable for any direct, indirect, punitive, incidental, or consequential damages resulting from:
                        </p>
                        <ul className="list-disc list-inside mb-4">
                            <li>Your use or inability to use the Services or Products.</li>
                            <li>Unauthorized access to or alteration of your transmissions or data.</li>
                            <li>Any other matters relating to our services, including damages for loss of use, data, or profits arising from the use of the website or services.</li>
                        </ul>
                        <p className="mb-4">
                            We are not responsible for delays or inability to use the website or related services, nor for information, software, products, services, or related graphics obtained through the website. The user understands that downloading material from the website is at their own risk, and they will be solely responsible for any damage to their computer systems or loss of data.
                        </p>



                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Payment & Shipping</h2>


                        <p className="mb-4">
                            <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> accepts Cash on Delivery (COD), Debit/Credit Cards (VISA, MasterCard, DBBL Nexus, etc.), and Mobile Banking (bKash, Rocket) as payment methods. We will arrange for the shipment of your products. Shipping schedules are estimates and cannot be guaranteed. <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> is not liable for any shipment delays caused by bad weather, political disruptions, or unforeseen circumstances. Title and risk of loss transfer to you upon delivery of the products.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Risk of Loss</h2>

                        <p className="mb-4">
                            All items purchased from <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> are made under a shipment contract, meaning the risk of loss remains with us until the item is delivered to you. If items are damaged after receipt, the risk transfers to you.
                        </p>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Fraud Protection Policy</h2>


                        <p className="mb-4">
                            <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> understands the importance of robust fraud detection and resolution. We, along with our online payment partners, continuously monitor transactions for suspicious activity. In rare cases, if fraud cannot be definitively ruled out, the transaction will be held, and the customer will be asked to provide identification documents to confirm genuine cardholder status. We apologize for any inconvenience and appreciate your understanding in our efforts to maintain a secure online shopping environment.
                        </p>


                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Termination</h2>



                        <ul className="list-disc list-inside mb-4">
                            <li><Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> may suspend or terminate your access to the website or any service if we believe, at our sole discretion, that you have breached or manipulated any terms of these Terms unethically.</li>
                            <li>These Terms will remain in effect unless <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> chooses to terminate them.</li>
                            <li>If you or <Link to="/" className="text-orange-500 hover:underline">
                                Millennial Clothing
                            </Link> terminates your access, we may delete any content related to your use of the service, with no liability to you or third parties.</li>
                            <li>You will remain liable for any services or products ordered until termination. You are entitled to royalty payments as specified in the User License Agreement.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Term and Policy Updates</h2>


                        <p className="mb-4">
                            We reserve the right to change or update these terms and policies at any time. Notice of such changes will be prominently displayed on our site and will take effect immediately upon posting.
                        </p>
                        <div className="mt-8 text-center px-6">
                            <p>
                                For any questions or concerns,contact us at:<br />

                                <a
                                    href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                    className="text-blue-500 hover:underline ml-1"
                                >
                                    Email: info@millennial-clothing.com
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

export default Terms_comditions
