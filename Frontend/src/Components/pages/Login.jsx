import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase.config';
import { FaEye, FaRegEyeSlash } from "react-icons/fa";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { StateContext } from '../../StateProvider';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function Login() {
    const { signInUser } = useContext(StateContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef(null);
    const navigate = useNavigate();


    const handleLogin = e => {
        e.preventDefault();

        // console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        console.log("your Email & password is :", email, password);
        // reset error 
        setRegisterError('');
        // reset Success 
        setSuccess('');

        // add validation 
        if (password.length < 6) {
            setRegisterError('Password Should Be at least 6 character or longer');
            return;
        }
        // Call signInUser to log the user in
        signInUser(email, password)
            .then(result => {
                console.log("signInUser is used from login", result.user);
                // setUser(result.user);
                // Show success toast if login is successful
                toast.success("Login successful!", {
                    style: {
                        backgroundColor: "#bae9f3", // Use your custom color
                        color: "#12323a" // Text color
                    },
                });
                // Navigate to home page
                navigate("/");
                // Set success message or perform any additional actions
                setSuccess('Login Success');
            })
            .catch(error => {
                console.error(error)
                // Show error toast if login fails
                toast.error("Login failed. Please Check Email & Password.", {
                    style: {
                        backgroundColor: "#f44336", // Error background color
                        color: "#12323a" // Text color
                    },
                });
                setRegisterError(error.message);
            })
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password);





        // signInWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         console.log(result.user);
        //         console.log("success login");
        //         setSuccess('Login Success');
        //     })
        //     .catch(error => {
        //         console.error(error)
        //         setRegisterError(error.message);
        //     });
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            console.log("Please provide an email", emailRef.current.value)
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("please write a valid email")
            return;

        }
        //   send validate email 
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Please Check Your Email");
                // window.alert("Hello world!");
            })
            .catch(error => {
                console.log(error);
            })

    }
    return (
        <div>
            <section className="bg-customBg-600 py-10">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full rounded-lg shadow-lg dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 bg-customBg-400">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8 ">
                            <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Login here..
                            </h1>
                            <form className="space-y-4 md:space-y-6" onSubmit={handleLogin} >

                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your Email"
                                        ref={emailRef}
                                        className="w-[80%] lg:w-full focus:outline-none focus:ring-2 focus:ring-sky-400
                                             border border-[#e49b0f] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-customBg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div className="relative">
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <div className="w-[80%] lg:w-full flex items-center bg-customBg-200 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus-within:ring-blue-500 dark:focus-within:border-blue-500">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            // id="password"
                                            placeholder="••••••••"
                                            className="   focus:outline-none focus:ring-2 focus:ring-sky-400
                                             border border-[#e49b0f] text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-customBg-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required
                                        />
                                        <span
                                            className="absolute right-24 lg:right-4 cursor-pointer text-gray-500 dark:text-gray-400"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
                                        </span>
                                    </div>
                                </div>

                                <label className="label">
                                    <a onClick={handleForgetPassword} className="label-text-alt link link-hover">Forget Password?</a>
                                </label>
                                <div className="flex justify-center items-center w-full">
                                    <input className="bg-[#e49b0f] text-white px-4 py-2 rounded-md hover:bg-customBg-900 transition-all   btn mb-4 w-3/4
                                    " type="submit" value="Login Now !" />
                                </div>
                            </form>
                            {
                                registerError && <p className="text-red-700">{registerError}</p>
                            }
                            {
                                success && <p className="text-green-600">{success}</p>
                            }
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account? <Link to={"/register"} className="font-medium text-red-500 hover:underline dark:text-primary-500">Register here</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login
