import React from 'react'

function Question_accordion() {
    return (
        <div>
            <div className="md:flex md:p-4 gap-x-4 space-y-1 bg-customBg-800">
                <div className="w-full md:w-[50%] lg:w-[50%] space-y-1 ">
                    <div className="collapse collapse-plus rounded-[3px] bg-customBg-500 shadow-md">
                        <input type="radio" name="my-accordion-3" className='peer' checked="checked" />
                        <div className="collapse-title text-black text-md font-medium bg-customBg-300 peer-checked:bg-customBg-600">Why choose “Millennial Clothing”?
                        </div>
                        <div className="collapse-content text-sm bg-customBg-800 peer-checked:bg-customBg-600">
                            <hr className="py-1" />
                            <p className="font-normal text-black">Shop at Millennial Clothing for a blend of modern style, unmatched quality, and designs crafted to elevate your everyday look. Each piece is thoughtfully created to offer you comfort, style, and individuality, making sure you stand out effortlessly.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus rounded-[3px] bg-base-200 shadow-md">
                        <input type="radio" name="my-accordion-3" className='peer' checked="checked" />
                        <div className="text-black collapse-title text-md font-medium bg-customBg-300 peer-checked:bg-customBg-600">Does “Millennial Clothing” have any outlets?</div>
                        <div className="collapse-content text-sm bg-customBg-800 peer-checked:bg-customBg-600">
                            <hr className="py-1" />
                            <p className="font-normal text-black">While Millennial Clothing primarily operates online, we welcome customers to visit our office, where they can see our collection firsthand and purchase items directly. It’s a great opportunity to experience our quality and craftsmanship up close!
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus rounded-[3px] bg-base-200 shadow-md">
                        <input type="radio" name="my-accordion-3" className='peer' checked="checked" />
                        <div className="text-black collapse-title text-md font-medium bg-customBg-300 peer-checked:bg-customBg-600">Where does “Millennial Clothing” come from?
                        </div>
                        <div className="collapse-content text-sm bg-bg-customBg-800 peer-checked:bg-customBg-800">
                            <hr className="py-1" />
                            <p className="font-normal text-black">Millennial Clothing was born from the passion of redefining modern fashion with a vision of style that’s fresh, bold, and uniquely yours. We’ve crafted our brand to resonate with the trends of today and the quality you’ll love—making every piece a statement, every outfit an experience.</p>
                        </div>
                    </div>
                </div>

                {/* Youtube Video Frame  */}

                <div className="hidden md:flex bg-base-100 image-full size-[50%] shadow-xl pt-0 mt-0">
                    <iframe width="100%" height="330" src="https://www.youtube.com/embed/sSLPytgnlbM?si=VvWRt7VyYkgzNz6q=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                </div>
            </div>

        </div>
    )
}

export default Question_accordion
