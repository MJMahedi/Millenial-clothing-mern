import React from 'react';
import { Link } from 'react-router-dom';

import FounderImg from './../../assets/Founder_CEO.jpg';
import FounderMinazDImg from './../../assets/Founder_minaz_dream.jpg';
import CoFounder from './../../assets/Co-Founder.jpeg';
import CoFounder2 from './../../assets/Co-Founder_2.jpeg';
import AboutImg from './../../assets/banner1.jpg';
// import AboutImg from './../../assets/aboutPic.jpg';

const AboutUs = () => {


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
            `}</style>
      <div className="bg-customBg bg-opacity-80 min-h-screen py-6 px-6 sm:px-12">
        <div className="bg-customBg bg-opacity-40 max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <img src={AboutImg} alt="Our Team PNG" className="w-full h-64 md:h-80 lg:h-96 object-cover"  />
            {/* <img src={AboutImg} alt="About Us Cover Image" className="w-full max-w-lg mx-4 h-64 md:h-80 lg:h-auto "  /> */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-4xl text-white font-semibold">
              About Us
              
              </h1>
            </div>
          </div>

          <div className="p-4">
            <h2 className=" text-xl md:text-2xl lg:text-3xl font-bold text-center my-4 animate-pulse">Welcome to <Link to="/" className="text-orange-500 hover:underline">
              Millennial Clothing
            </Link> – Where Trend Meets Timeless!</h2>
            <p>
              Discover a world of contemporary fashion at Millennial Clothing, your go-to destination for stylish apparel designed for the modern individual. Our curated collection features an array of premium Jackets, cozy Sweaters, elegant Panjabis, versatile Shirts, exclusive T-shirts, fashionable Polo, and more, all crafted to elevate your wardrobe. Whether you're dressing for a casual day out, an adventurous ride, or a formal occasion, our diverse styles cater to every moment.
            </p>

            <p>
              At <span>
                <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link>
              </span>, we believe in the perfect blend of quality and comfort. Each piece in our collection is thoughtfully designed with the latest trends in mind, ensuring you not only look good but feel great. With our commitment to exceptional craftsmanship, you can trust that our clothing is made to last.
            </p>

            <p>
              Explore our range today and experience the fusion of fashion and functionality. Join our community of trendsetters who embrace individuality and express their unique style. We’re excited to help you redefine your wardrobe with our timeless and trendy pieces.
            </p>
            <p>
              Shop with us and discover why <span>
                <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link>
              </span> is the ultimate choice for style-conscious individuals. Your journey to impeccable style starts here!
            </p>

            <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Our Story</h2>
            <p>
              At <span>
                <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link>
              </span>, we believe fashion is not just about clothing—it's about self-expression, connection, and community. Founded by three passionate friends, our journey began with a shared vision: to revolutionize the clothing brand landscape and create an inclusive space for style enthusiasts.
            </p>
            <p>
              Our adventure started with a simple idea: to blend timeless designs with contemporary flair, making high-quality fashion accessible to everyone. We set out to break free from conventional norms, infusing our collections with innovative styles that reflect the diverse lifestyles of teenagers, young professionals, and bikers.
            </p>
            <p>
              What sets us apart? It's our unwavering commitment to quality, sustainability, and authenticity. Each piece in our collection is meticulously crafted, ensuring that every customer feels confident and stylish, no matter the occasion. We celebrate individuality, encouraging our community to embrace their unique style and inspire others along the way.
            </p>
            <p className="mb-2">
              Join us as we redefine fashion together, one piece at a time. At <span>
                <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link>
              </span>, we're more than just a brand; we're a movement that champions creativity, confidence, and a love for style. Welcome to the future of fashion!
            </p>

            <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Our Mission</h2>
            <p>
              At <Link to="/" className="text-orange-500 hover:underline">
                Millennial Clothing
              </Link>
              , our mission is to empower individuals through fashion that resonates with their unique style and identity. We are dedicated to redefining the clothing industry by offering high-quality, trendy apparel that caters to the diverse needs of teenagers, young professionals, and bikers.
            </p>
            <p>
              We strive to create a brand that embodies authenticity, creativity, and inclusivity. Our goal is to inspire confidence in our customers, encouraging them to express themselves freely through their fashion choices. By staying attuned to the latest trends and innovations, we ensure our collections remain fresh, relevant, and accessible.
            </p>
            <p>
              Sustainability is at the heart of our mission. We are committed to ethical practices that minimize our environmental impact while promoting responsible consumption. Our aim is to build a community where style meets sustainability, paving the way for a more conscious fashion future.
            </p>
            <p>
              Join us on this journey as we reshape the concept of clothing brands, one stylish piece at a time. Together, we can make a difference in the world of fashion and create a positive impact on our community.
            </p>



            <h2 className="text-3xl font-bold text-center my-6 animate-pulse">Meet the Team</h2>
            <p className="my-2">
              At <span>
                <Link to="/" className="text-orange-500 hover:underline">
                  Millennial Clothing
                </Link>
              </span>, our strength lies in our dynamic team of passionate individuals who share a common vision: to revolutionize the clothing industry. We are a diverse group of friends and fashion enthusiasts committed to creating stylish, high-quality apparel that resonates with our customers. Get to know the people behind your favorite looks:
            </p>

            <h3 className="text-2xl font-normal ">Gazi Ahsan Ullah <span className="text-xl">[Founder & CEO]</span> </h3>
            <p>
              Ahsan is the backbone of Millennial Clothing, overseeing day-to-day operations and ensuring that everything runs smoothly. His attention to detail and organizational skills helps us maintain our commitment to quality and customer satisfaction.
            </p>
            <h3 className="text-2xl font-normal my-2 ">Amina Akter <span className="text-xl">[Founder, Mina’s Dream]</span></h3>
            <p>
              Amina highlights the contributions and expertise of other team members, showcasing their unique skills and dedication to the brand.
            </p>
            <h3 className="text-2xl font-normal my-2 ">Tarik Aziz <span className="text-xl">[Co-Founder & Creative Director]</span></h3>
            <p>
              A visionary with a flair for design, Tarik brings a wealth of experience in fashion and a passion for creativity. With a keen eye for trends, they lead our design team in crafting innovative collections that push the boundaries of style.
            </p>
            <h3 className="text-2xl font-normal my-2 ">Sharif Islam Imran <span className="text-xl">[Co-Founder & Marketing Strategist]</span> </h3>
            <p>
              With a background in marketing and a love for storytelling, Imran drives our brand's message and engagement. He is dedicated to connecting our mission with our audience, ensuring that every piece we create speaks to our community.
            </p>
            <p className="my-2">
              Together, we are more than just a team; we are friends united by our passion for fashion and a desire to make a positive impact in the clothing industry. Join us on our journey as we strive to redefine what it means to wear stylish, meaningful apparel.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-1">
              <div className=" w-full p-4">
                <div className="bg-sky-50  h-64 rounded-lg py-3">
                  <img
                    src={FounderImg}
                    alt="Team Member 1"
                    className="w-40 h-40 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold  text-center">Gazi Ahsan Ullah</h3>
                  <p className="text-gray-600 text-center animate-pulse ">Founder & CEO</p>
                </div>
              </div>
              <div className="w-full p-4">
                <div className="bg-sky-50  h-64 rounded-lg shadow-md py-3">
                  <img
                    src={FounderMinazDImg}
                    alt="Team Member 2"
                    className="w-40 h-40 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold  text-center">Amina Akter</h3>
                  <p className="text-gray-600 text-center  animate-pulse">Founder, Mina's Dream</p>
                </div>
              </div>

              <div className="w-full p-4">
                <div className="bg-sky-50  h-64 rounded-lg shadow-md py-3">
                  <img
                    src={CoFounder}
                    alt="Team Member 3"
                    className="w-40 h-40 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-center">Tarik Aziz</h3>
                  <p className="text-gray-600 text-center animate-pulse">Co-Founder</p>
                </div>
              </div>
              <div className="w-full p-4">
                <div className="bg-sky-50 h-64 rounded-lg shadow-md py-3">
                  <img
                    src={CoFounder2}
                    alt="Team Member 4"
                    className="w-40 h-40 rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold  text-center">Sharif Islam Imran</h3>
                  <p className="text-gray-600 text-center animate-pulse">Co-Founder</p>
                </div>
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
        </div>
      </div>
    </>
  );
};

export default AboutUs;
