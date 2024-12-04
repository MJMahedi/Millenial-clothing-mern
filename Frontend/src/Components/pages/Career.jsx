import React from 'react'
import AboutImg from './../../assets/banner1.jpg';
import { Link } from 'react-router-dom';

const Career = () => {

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
                    }, 
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
                        <img src={AboutImg} alt="Our Team PNG" className="w-full h-64 md:h-80 lg:h-96 object-cover" />
                        {/* <img src={AboutImg} alt="About Us Cover Image" className="w-full max-w-lg mx-4 h-64 md:h-80 lg:h-auto "  /> */}
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-4xl text-white font-semibold">Career at Millennial</h1>
                        </div>
                    </div>

                    <div className="p-4">
                        <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center my-4 animate-pulse">Shape the Future of Fashion with <Link to="/" className="text-orange-500 hover:underline">
                            Millennial Clothing
                        </Link></h2>


                        <p>
                            At <span>
                                <Link to="/" className="text-orange-500 hover:underline">
                                    Millennial Clothing
                                </Link>
                            </span>, we’re more than just a fashion brand – we’re a community of innovators, creators, and trendsetters on a mission to redefine style for the modern era. If you’re passionate about pushing boundaries, creating impactful designs, and building a brand that’s ahead of the curve, we want you on our team
                        </p>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Why Join Us?</h2>
                        <ul className="list-disc list-inside ">
                            <li>Innovative Culture: Work in a forward-thinking environment where fresh ideas are celebrated and creativity knows no limits.</li>
                            <li>Career Growth: We invest in our people, offering real opportunities for career advancement as we grow. Your success is our success.</li>
                            <li>Collaborative Team: Join a dynamic, diverse, and inclusive team where every voice matters. Together, we’re building something extraordinary.</li>
                            <li>Work-Life Balance: We know creativity thrives when you’re at your best, so we offer flexible schedules and a positive work environment.</li>
                        </ul>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Current Career Opportunities:?</h2>
                        <ul className="list-disc list-inside ">
                            <li>Fashion Designer: Are you a visionary with a passion for trendsetting designs? Join our design team and turn your creative ideas into tomorrow’s fashion must-haves.</li>
                            <li>Digital Marketing Specialist: Bring your digital marketing expertise to help us create viral campaigns, build a global online presence, and drive e-commerce growth.</li>
                            <li>Social Media Content Creator: Are you obsessed with Tik-Tok trends and Instagram aesthetics? Lead our social media content and storytelling to engage and inspire our audience.</li>
                            <li>E-Commerce Manager: Take charge of our online store. You’ll optimize our website experience, track performance, and drive conversions like a pro.</li>
                            <li>Retail & Customer Experience Associate: Be the face of Millennial Clothing, offering impeccable service and style advice to our in-store shoppers.</li>
                            <li>Graphic Designer: Elevate our brand with visually stunning graphics, from product campaigns to social media content, that captivate our audience and communicate our vision.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Who We’re Looking For:</h2>
                        <ul className="list-disc list-inside ">
                            <li>Passion-driven individuals who live and breathe fashion and style.</li>
                            <li>Digital natives with a keen sense of online trends and a pulse on what's next in fashion.</li>
                            <li>Creative problem-solvers who thrive in a fast-paced, ever-evolving environment.</li>
                            <li>Team players who believe in collaboration, innovation, and always delivering excellence.</li>

                        </ul>
                        <h2 className="text-3xl font-bold text-center my-6 animate-pulse">How to Apply:</h2>

                        <p>
                        Ready to make your mark in fashion? Send your resume and a creative cover letter to <a
                                    href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                    className="text-blue-500 hover:underline ml-1"
                                >
                                    info@millennial-clothing.com
                                </a> For designers and content creators, please include links to your portfolio or social media handles showcasing your work. Tell us why you’re the perfect fit to be part of our journey!
                        </p>




                        <div className="mt-8 text-center">
                        <p>
                        Be part of a brand that’s setting trends and breaking boundaries. Let’s create the future of fashion – together.
                        </p>
                            <p className='text-gray-800'>
                                For any questions or concerns,contact us at:<br />

                                Email: <a
                                    href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                    className="text-blue-500 hover:underline ml-1"
                                >
                                    info@millennial-clothing.com
                                </a>
                                <br />
                                Website: <Link to="/" className="text-orange-500 hover:underline">
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
    );
}

export default Career
