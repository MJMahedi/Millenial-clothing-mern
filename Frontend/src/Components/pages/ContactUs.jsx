import React from 'react';

function ContactUs() {
    const email = "info@millennial-clothing.com"; // Replace with the desired email address
    const subject = ""; // Optional subject
    const body = "";
    return (
        <div className="bg-sky-50 dark:bg-gray-900 py-8 lg:py-16">
            <div className="px-4 mx-auto max-w-screen-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Us
                </h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div>
                        <form action="#" className="space-y-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="name@example.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Let us know how we can help you"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Leave a comment..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sky-600 sm:w-fit hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                Send message
                            </button>
                        </form>
                    </div>

                    {/* Address Section */}
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Contact Information</h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                            <strong>Address:</strong>
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            Millennial Clothing<br />
                            House: 5-6, Lane-1, Block-C,<br />
                            Mirpur-11, Dhaka-1216<br />
                            (Opposite of Navana Probani Ridgedale)
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-4">
                            <strong>Hotline:</strong> +8801317201109
                        </p>
                        <p className="text-gray-700 dark:text-gray-300">
                            <strong>Email:</strong> <a
                                href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`}
                                className="text-blue-500 hover:underline ml-1"
                            >
                                info@millennial-clothing.com
                            </a>
                        </p>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ContactUs;

