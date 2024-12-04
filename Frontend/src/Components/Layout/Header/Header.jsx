import React, { useState, useEffect, useRef, useContext } from "react"
import { Link } from "react-router-dom"
import Logo from "./../../../assets/Website_Logo.svg"
import { useNavigate } from 'react-router-dom'
import { StateContext, useProductValue, useStateValue } from "../../../StateProvider"; // Adjust the import path as needed
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Header() {
    const { user, logOut } = useContext(StateContext);
    const navigate = useNavigate();
    // Get products from ProductContext
    const { products } = useProductValue();
    const [searchOpen, setSearchOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [svgActive, setSvgActive] = useState(true); // Track active SVG
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    // const { user, createUser, state, dispatch } = useStateValue();

    // Refs for detecting clicks outside
    const resultsRef = useRef(null); // For results dropdown
    const inputRef = useRef(null);   // For search input

    // Toggle Search Bar visibility
    const toggleSearchBar = () => {
        setSearchOpen((prev) => !prev);
        setSearchQuery(''); // Clear query when search opens/closes
        setFilteredResults([]);
    };
    // Handle Logout 
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('User LogOut Done')
                toast.success("You have been Logged out", {
                    style: {
                        backgroundColor: "#bae9f3", // Use your custom color
                        color: "#12323a" // Text color
                    },
                });
            })
            .catch(error => {
                console.error(error)
            })
    }

    // Handle search input and update filtered results
    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query) {
            const results = products.filter((product) =>
                product.title && product.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredResults(results);
        } else {
            setFilteredResults([]); // Clear results if query is empty
        }
    };

    // Function to handle navigation
    const navigateToResults = () => {
        if (searchQuery) {
            navigate(`/results?query=${searchQuery}`);
            setSearchQuery(''); // Clear search query
            setFilteredResults([]); // Clear filtered results
            setSearchOpen(false); // Close search dropdown
        }
    };

    // Handle Enter key press to navigate
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            navigateToResults();
        }
    };
    const handleToggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    // Clear search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                resultsRef.current && !resultsRef.current.contains(event.target) &&
                inputRef.current && !inputRef.current.contains(event.target)
            ) {
                setSearchOpen(false);
                setSearchQuery(''); // Clear search query
                setFilteredResults([]); // Clear filtered results
                setSvgActive(true); // Switch back to the first SVG
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [resultsRef, inputRef]);

    const toggleSvg = () => {
        setSvgActive(!svgActive); // Toggle the active SVG state
    };


    return (
        <>
            <style>
                {`
                  .dropdown-content[tabindex='0']:focus-within {
                    opacity: 1;
                    transform: scale(1);
                  }

                  .dropdown-content {
                    transform: scale(0.95);
                    opacity: 0;
                    transition: opacity 300ms ease-out, transform 300ms ease-out;
                    z-index: 10;
                  }

                  .dropdown-content.show {
                    opacity: 1;
                    transform: scale(1);
                  }
                `}
            </style>
            <nav className="bg-customBg">

                <ToastContainer />

                <div className="flex lg:flex md:flex md:justify-around sm:justify-around 
 justify-between items-center">
                    {/* Left-Side Dropdown Menu */}
                    <div className="navbar w-1/6 p-0 md:hidden z-20">
                        <div className="dropdown dropdown-start">
                            <div tabIndex="0" className="relative">
                                <label className="btn-sm btn-ghost hover:shadow-md swap swap-rotate">
                                    <input type="checkbox" />
                                    <svg className="swap-off fill-customBg-900" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                                    </svg>
                                    <svg className="swap-on fill-customBg-800" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
                                        <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                                    </svg>
                                </label>
                            </div>

                            <ul
                                tabIndex="0"
                                className="dropdown-content menu menu-md absolute left-0 top-14 bg-white rounded-lg shadow-lg w-56 p-3 transform scale-95 opacity-0 transition duration-300 ease-out origin-top-left"
                            >
                                <Link to="/" className="text-lg font-semibold mx-auto py-2">Home</Link>
                                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                    <Link to="/collections" className="mb-1 bg-gray-50 hover:bg-gray-100 p-2 rounded cursor-pointer shadow-sm">Collections</Link>
                                </li>
                                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                    <Link to="/winter" className="mb-1 bg-gray-50 hover:bg-gray-100 p-2 rounded cursor-pointer shadow-sm">Winter</Link>
                                </li>
                                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                    <details className="mb-1">
                                        <summary className="bg-gray-50 hover:bg-gray-100 p-2 rounded cursor-pointer shadow-sm">Men</summary>
                                        <ul className="">
                                            <li className="bg-sky-50 hover:bg-sky-100 p-2 my-2 rounded cursor-pointer shadow-sm">
                                                <Link to="/category-products/men" className="font-semibold">Men Collection</Link>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                    <details className="mb-1">
                                        <summary className="bg-gray-50 hover:bg-gray-100 p-2 rounded cursor-pointer shadow-sm">Women</summary>
                                        <ul className="">
                                            <li className="bg-sky-50 hover:bg-sky-100 p-2 my-2 rounded cursor-pointer shadow-sm">
                                                <Link to="/category-products/women" className="font-semibold">Winter Collections</Link>
                                            </li>
                                        </ul>
                                    </details>
                                </li>
                                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                    <Link to="/category-products/couple goals" className="mb-1 bg-gray-50 hover:bg-gray-100 p-2 rounded cursor-pointer shadow-sm">Couple Goals</Link>
                                </li>
                                <li className="transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                    <Link to="/minas-dream" className="mb-1 bg-gray-50 hover:bg-gray-100 p-2 rounded cursor-pointer shadow-sm">Mina's Dream</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/*Millennial Website Logo  */}

                    <div className="navbar-center">
                        <div className="avatar pr-0 md:pr-8 lg:pr-12 pt-1 md:pt-2 lg:mt-0 ">
                            <Link to={"/"} style={{
                                backgroundImage: `url(${Logo})`,
                                backgroundSize: `cover`,
                                backgroundRepeat: `no-repeat`,
                                backgroundPosition: `center`
                            }}
                                className="h-12 w-40 sm:h-14 sm:w-60 md:h-12 md:w-44 lg:h-16 lg:w-64 cursor-pointer">
                            </Link>
                        </div>
                    </div>


                    {/* Visible for Small & Medium Device &&  Hidden from Large Device   */}

                    <div className="flex items-center md:gap-8 justify-end lg:hidden mr-3 md:mr-4 gap-2 pr-0">

                        {/* Search Button Icon for Small & Medium Devices */}
                        <button onClick={toggleSearchBar} className="w-5 btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-7 lg:w-12 lg:h-12"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>

                        {/* Search Bar - Only Visible when searchOpen is true */}
                        {searchOpen && (
                            <div
                                ref={resultsRef}
                                className="z-10 absolute top-14 md:top-4 right-2 md:right-60 w-2/5 sm:w-1/5 md:w-1/5 lg:w-1/4">
                                <div ref={inputRef} className="relative flex justify-end items-center pr-10">
                                    {/* Search Input */}
                                    <input
                                        type="search"
                                        id="default-search"
                                        value={searchQuery}
                                        onChange={handleSearch} // Update search query
                                        onKeyPress={handleKeyPress} // Detect Enter key
                                        className="bg-customBg-100 w-[140px] h-7 px-10 text-sm outline-none rounded-md ring-1 focus:ring-2 ring-sky-100 ring-offset-1"
                                        placeholder="Searching"
                                        required
                                    />

                                    {/* Search Icon SVG inside input */}
                                    <svg
                                        className="absolute right-3 w-4 h-4 text-gray-500 dark:text-black-400 cursor-pointer mr-10"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                        onClick={navigateToResults} // Navigate on click
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                </div>
                            </div>
                        )}
                        {/* Shopping Cart Icon */}
                        <Link to={"/"} className="flex no-underline hover:text-black" href="#">
                            <svg className=" w-4 h-4 md:w-8 md:h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#1E3050" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                            </svg>
                        </Link>
                        <Link to={"/shoping-cart"} className="flex no-underline hover:text-black" href="#">
                            <svg
                                className="w-6 h-4 md:w-8 md:h-6"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 576 512"
                            >
                                {/* SVG path data */}
                                <path fill="#1E3050" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" />
                            </svg>
                        </Link>

                        {/* Login Icon SVG */}
                        <div>
                            {
                                user && <Link onClick={handleLogOut} className="flex items-center  pr-0 md:pr-3 no-underline hover:text-black" to={"/login"}>
                                    <svg
                                        className="w-5 h-4 md:w-8 md:h-6"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        xmlnsXlink="http://www.w3.org/1999/xlink"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 512 512"
                                        xmlSpace="preserve"
                                    >
                                        <g>
                                            <g>
                                                <g>
                                                    {/* First path with fill #1E3050 */}
                                                    <path
                                                        // fill="#1E3050"
                                                        fill="#1E3050"
                                                        d="M403.4,248.4L272.2,381.2c-19.7,19.9-53.6,6-53.6-22V290H87c-15.9,0-28.8-12.9-28.8-28.8v-69.6
				c0-15.9,12.9-28.8,28.8-28.8h131.6V93.6c0-28,33.9-41.9,53.6-22l131.2,132.8C415.4,216.6,415.4,236.2,403.4,248.4z"
                                                    />
                                                    {/* Second path with fill #A5ACB9 */}
                                                    <path
                                                        fill="#1E3050"
                                                        d="M571.8,93.9v265c0,50.7-41.1,91.9-91.9,91.9h-71.4c-17.2,0-31.1-13.9-31.1-31.1l0,0
				c0-17.2,13.9-31.1,31.1-31.1h62.3c21.4,0,38.8-17.4,38.8-38.8V103c0-21.4-17.4-38.8-38.8-38.8h-62.3c-17.2,0-31.1-13.9-31.1-31.1
				l0,0c0-17.2,13.9-31.1,31.1-31.1h71.4C530.7,2,571.8,43.2,571.8,93.9z"
                                                    />
                                                </g>
                                            </g>
                                        </g>
                                    </svg>

                                </Link>
                            }

                            {
                                !user && <Link onClick={handleLogOut} className="flex items-center  pr-0 md:pr-3 no-underline hover:text-black" to={"/login"}>



                                    <svg
                                        className="w-5 h-4 md:w-8 md:h-6"
                                        version="1.1"
                                        id="Layer_1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 512 512">
                                        <path
                                            fill="#ef4444"
                                            d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                    </svg>
                                </Link>
                            }
                        </div>

                    </div>

                    {/* Imput Area for large device Only */}
                    <form className=" lg:items-end hidden lg:flex lg:justify-around lg:pr-0 md:hidden gap-2 ">
                        {/* Search Input */}
                        <div className="relative text-[#12323a]" ref={inputRef}>
                            <input
                                type="search"
                                id="default-search"
                                value={searchQuery}
                                onChange={handleSearch} // This will handle input changes
                                onKeyPress={handleKeyPress} // Add the Enter key detection
                                className="bg-customBg-100 w-[140px] h-7 px-3 text-sm outline-none rounded-md ring-1 focus:ring-2 ring-sky-100 ring-offset-1 pr-10"
                                placeholder="Searching"
                                required
                            />
                            <div
                                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" // Add cursor-pointer
                                onClick={navigateToResults} // Add onClick handler
                            >
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>


                            {/* Step 4: Display filtered search results */}
                            {searchQuery && (


                                <div className="absolute z-10 border rounded-md w-full mt-1" ref={resultsRef}>
                                    {filteredResults.length > 0 ? (
                                        filteredResults.map((product) => (
                                            <Link
                                                key={product._id}
                                                to={`/product/${product._id}`} // Change this to your product detail route
                                                className="block p-2 bg-customBg-100 text-sm border-b hover:bg-gray-100" // Styling for each item
                                                onClick={() => setSearchQuery('')} // Clear the search query on click
                                            >
                                                {product.title} {/* Use the correct property name */}
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="p-2 text-sm text-gray-500">No results found</div>
                                    )}
                                </div>

                            )}



                        </div>

                        {/* Wishlist Link */}
                        <div className="hidden lg:flex items-center justify-end text-md">
                            <Link className="flex items-center pl-3 no-underline hover:text-black" to={"/whish-list"}>
                                <svg className="mr-1 w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#1E3050" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                </svg>
                            </Link>
                            <Link className="flex items-center pl-3 no-underline hover:text-black " to={"/shoping-cart"}>
                                <svg
                                    className="mr-1 w-7 h-7"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 576 512"
                                >
                                    {/* SVG path data */}
                                    <path fill="#1E3050" d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20l44 0 0 44c0 11 9 20 20 20s20-9 20-20l0-44 44 0c11 0 20-9 20-20s-9-20-20-20l-44 0 0-44c0-11-9-20-20-20s-20 9-20 20l0 44-44 0c-11 0-20 9-20 20z" />
                                </svg>
                            </Link>

                            <div>
                                {
                                    user && <Link onClick={handleLogOut} className="flex items-center pl-3 no-underline hover:text-black" to={"/login"}>
                                        <svg
                                            className="mr-1 w-9 h-7"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlnsXlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 512 512"
                                            xmlSpace="preserve"
                                        >
                                            <g>
                                                <g>
                                                    <g>
                                                        {/* First path with fill #1E3050 */}
                                                        <path
                                                            // fill="#1E3050"
                                                            fill="#1E3050"
                                                            d="M403.4,248.4L272.2,381.2c-19.7,19.9-53.6,6-53.6-22V290H87c-15.9,0-28.8-12.9-28.8-28.8v-69.6
				c0-15.9,12.9-28.8,28.8-28.8h131.6V93.6c0-28,33.9-41.9,53.6-22l131.2,132.8C415.4,216.6,415.4,236.2,403.4,248.4z"
                                                        />
                                                        {/* Second path with fill #A5ACB9 */}
                                                        <path
                                                            fill="#1E3050"
                                                            d="M571.8,93.9v265c0,50.7-41.1,91.9-91.9,91.9h-71.4c-17.2,0-31.1-13.9-31.1-31.1l0,0
				c0-17.2,13.9-31.1,31.1-31.1h62.3c21.4,0,38.8-17.4,38.8-38.8V103c0-21.4-17.4-38.8-38.8-38.8h-62.3c-17.2,0-31.1-13.9-31.1-31.1
				l0,0c0-17.2,13.9-31.1,31.1-31.1h71.4C530.7,2,571.8,43.2,571.8,93.9z"
                                                        />
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>

                                    </Link>
                                }

                                {
                                    !user && <Link onClick={handleLogOut} className="flex items-center pl-3 no-underline hover:text-black" to={"/login"}>
                                       
                                        <svg
                                            className="mr-1 w-9 h-7"
                                            version="1.1"
                                            id="Layer_1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 512 512">
                                            <path
                                                fill="#ef4444"
                                                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
                                        </svg>
                                    </Link>
                                }
                            </div>

                        </div>
                    </form>
                </div>

                {/* Medium & Large device Menu bar   */}


                <div className="hidden md:flex justify-center items-center cursor-pointer bg-sky-50">

                    {/* <Link to={"/winter"} className="btn bg-sky-50 hover:bg-sky-200 border-0 rounded-sm py-4 mx-[1px] min-w-28">
                    Winter</Link> */}
                    <div className="mr-[2px]">
                        <Link to={"/"}
                            className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                            href="#"
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                            >
                                Home
                            </span>
                        </Link></div>
                    <div className="mr-[2px]">
                        <Link to={"/collections"}
                            className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                            href="#"
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                            >
                                Collections
                            </span>
                        </Link></div>

                    <div className="mr-[2px]">
                        <Link to={"/winter"}
                            className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                            href="#"
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300  transition-all group-hover:h-full group-active:bg-sky-500"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                            >
                                Winter
                            </span>
                        </Link></div>

                    <div className="mr-[2px]">
                        <Link to={"/category-products/men"}
                            className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                            href="#"
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                            >
                                Men's
                            </span>
                        </Link></div>
                    <div className="mr-[2px]">
                        <Link to={"/category-products/women"}
                            className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                            href="#"
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                            >
                                Women's
                            </span>
                        </Link></div>
                    <div className="mr-[2px]">
                        <Link to={"/category-products/couple goals"}
                            className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                            href="#"
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                            >
                                Couple Goals
                            </span>
                        </Link></div>
                    {/* <div className="mr-[2px]">
                        <Link to={"/category-products/kids"}
                            className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                            href="#"
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-sky-300 to-yellow-600 transition-all group-hover:h-full group-active:bg-sky-500"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                            >
                                Kid's
                            </span>
                        </Link></div> */}
                    <div className="mr-[2px]">
                        <Link
                            className="group relative inline-block overflow-hidden px-4 lg:px-8 py-2"
                            to={"/minas-dream"}
                        >
                            <span
                                className="absolute inset-x-0 top-0 h-0 bg-gradient-to-tr from-yellow-600 to-sky-300 transition-all group-hover:h-full group-active:bg-sky-500"
                            ></span>

                            <span
                                className="relative text-sm font-medium text-sky-900 transition-colors group-hover:text-white"
                            >
                                Mina's Dream
                            </span>
                        </Link></div>


                </div>

            </nav>
        </>
    )
}
export default React.memo(Header);