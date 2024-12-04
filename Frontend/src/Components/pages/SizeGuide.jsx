import React, { useState } from "react";
import { Link } from 'react-router-dom'
import AboutImg from './../../assets/banner4.webp';
import sizeGuideImage from "../../assets/sizeguidefull.webp";
const SizeGuide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

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

    <div className="bg-customBg-700 bg-opacity-80 min-h-screen py-6 px-6 sm:px-12">
      <div className="bg-customBg-500 bg-opacity-40 max-w-6xl mx-auto rounded-lg shadow-lg overflow-hidden">
        <div className="relative ">
          <img
            src={AboutImg}
            alt="How To Order"
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl text-center text-white font-semibold">Size & Care Guide for Millennial Clothing</h1>
          </div>
        </div>
        <div className="py-4 px-2 bg-customBg-500">
          <div className="order-info py-2 bg-customBg-500">

            <h1 className="leading-relaxed text-xl text-center">
              Size Guide & Care Instructions | Cotton, Linen, Wool, Silk, and Polyester
            </h1>

            <div className="size-guide-care px-6 py-10 bg-customBg-500">
              <h1 className="text-3xl font-bold text-center mb-6">Size Guide & Care Instructions</h1>
              <p className="text-lg text-center mb-8">
                Find your perfect size and learn how to care for cotton, linen, wool, silk, and polyester garments. Keep your clothes looking great with these simple care tips.
              </p>

              <section className="size-guide">
                <h2 className="text-2xl font-semibold">Find Your Perfect Fit</h2>
                <p className="mb-4">
                  At <Link to="/" className="text-orange-500 hover:underline">
                    Millennial Clothing </Link>, we want you to feel confident in finding the right size. Use the following guide for the most accurate fit, and check <span
                      className="text-blue-500 underline cursor-pointer"
                      onClick={handleModalOpen}
                    >
                    specific size chart
                  </span>{" "} on product pages for detailed measurements.
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li><strong>Bust:</strong> Measure around the fullest part of your chest.</li>
                  <li><strong>Waist:</strong> Wrap the measuring tape around the narrowest part of your waistline.</li>
                  <li><strong>Hips:</strong> Measure around the widest part of your hips.</li>
                  <li><strong>Sleeve Length:</strong> Measure from the shoulder to your wrist with your arm slightly bent.</li>
                  <li><strong>Inseam:</strong> Measure from the crotch to the bottom of the leg for pants.</li>
                  <li><strong>Width:</strong> For tops, measure across the chest (armpit to armpit); for bottoms, measure across the waistband.</li>
                </ul>
              </section>
              {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                  <div className="bg-white rounded-lg p-4 max-w-lg w-[80%] h-[80%] lg:h-[96%] relative">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                      onClick={handleModalClose}
                    >
                      &times;
                    </button>
                    <img
                      src={sizeGuideImage}
                      alt="Size Guide"
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}

              <section className="care-guide">
                <h2 className="text-2xl font-semibold mb-4">Care Guide for Major Fabrics</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="fabric-care bg-customBg-400 p-4 shadow rounded">
                    <h3 className="text-xl font-bold mb-2">Cotton</h3>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Machine Wash: Use cold or warm water with colors.</li>
                      <li>Drying: Air dry or tumble dry on low to avoid shrinking.</li>
                      <li>Ironing: Use medium heat and steam if needed. Avoid bleach.</li>
                    </ul>
                  </div>
                  <div className="fabric-care bg-customBg-400 p-4 shadow rounded">
                    <h3 className="text-xl font-bold mb-2">Linen</h3>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Machine Wash: Wash in cold or warm water on a gentle cycle.</li>
                      <li>Drying: Air dry or tumble dry on low heat.</li>
                      <li>Ironing: Iron while damp on medium-high heat to smooth wrinkles.</li>
                    </ul>
                  </div>
                  <div className="fabric-care bg-customBg-400 p-4 shadow rounded">
                    <h3 className="text-xl font-bold mb-2">Wool</h3>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Hand Wash or Dry Clean: Use cold water and mild detergent or dry clean.</li>
                      <li>Drying: Lay flat to dry and avoid direct sunlight.</li>
                      <li>Ironing: Steam gently or use a low heat iron with a protective cloth.</li>
                    </ul>
                  </div>
                  <div className="fabric-care bg-customBg-400 p-4 shadow rounded">
                    <h3 className="text-xl font-bold mb-2">Silk</h3>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Hand Wash or Dry Clean: Hand wash in cold water with a gentle detergent.</li>
                      <li>Drying: Lay flat or hang to air dry out of direct sunlight.</li>
                      <li>Ironing: Iron inside out on a low setting or use a steamer.</li>
                    </ul>
                  </div>
                  <div className="fabric-care bg-customBg-400 p-4 shadow rounded">
                    <h3 className="text-xl font-bold mb-2">Polyester</h3>
                    <ul className="list-disc ml-4 space-y-1">
                      <li>Machine Wash: Wash in cold water on a gentle cycle.</li>
                      <li>Drying: Tumble dry on low heat or air dry.</li>
                      <li>Ironing: Use a low heat setting. Avoid high heat as it can melt fibers.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="preservation mt-10">
                <h2 className="text-2xl font-semibold mb-4">Preserving Garment Width & Inseam</h2>
                <p>
                  To maintain the original shape and inseam of your garments, avoid using high heat during washing or drying. Air drying is best for most fabrics, or use low heat settings when necessary.
                </p>
              </section>

              <section className="assistance mt-10 text-center">
                <h2 className="text-2xl font-semibold mb-4">Need Assistance?</h2>
                <p>
                  If you're unsure about your size or fabric care, contact our friendly customer service team for personalized help. We're here to guide you in selecting the perfect fit and caring for your clothes properly!
                </p>
              </section>
            </div>






          </div>
        </div>

      </div>
    </div>

  </>
  )
}

export default SizeGuide
