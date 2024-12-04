import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useReducer, useContext, useState, useEffect, useMemo } from 'react';
import app from './firebase.config';
import PropTypes from 'prop-types'; // ES6
import axios from 'axios';


// Prepare or Bring the DataLayer 
export const StateContext = createContext();

const auth = getAuth(app);
// Warp & Provide the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => {
    const [user, setUser] = useState(null);
    const createUser = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
        // try {
        //     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        //     setUser(userCredential.user); // Set the user state after creation
        // } catch (error) {
        //     console.error('Error creating user:', error);
        //     // Handle error (e.g., set an error state)
        // }
    };
    const signInUser = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
        // try {
        //     const userCredential = await signInWithEmailAndPassword(auth, email, password);
        //     setUser(userCredential.user); // Set the user state after creation
        // } catch (error) {
        //     console.error('Error sign In user:', error);
        //     // Handle error (e.g., set an error state)
        // }
    };

        const logOut = () =>{

          return signOut(auth);
        }

    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
           
            console.log('Observing Current user inside useEffect of StateProvider', currentUser);
            setUser(currentUser);
        });
        return () =>{
            unSubscribe();
        }
    } , []);
    const authInfo = {
        user,
        setUser,
        createUser,
        signInUser,
        logOut,
        dispatch: null, // Placeholder to be replaced later
    };

    // Use the reducer for state management
    const [state, dispatch] = useReducer(reducer, initialState);
    authInfo.dispatch = dispatch; // Assign dispatch to authInfo

    return (
        <StateContext.Provider value={{ ...authInfo, state }}>
            {children}
        </StateContext.Provider>
    );
};
StateProvider.PropTypes = {
    children: PropTypes.node.isRequired,
};
// Pull informaton from the DataLayer
export const useStateValue = () => useContext(StateContext);



// For Product Data 

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/demodataold1.json'); // replace with your JSON URL
                // const response = await axios.get('/api/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Fetch error:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // By mj
    // Memrize context value to prevent unnecessary re-renders
    const value = useMemo(() => ({ products, loading, error }), [products, loading, error]);


    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

// Custom hook to use ProductContext
export const useProductValue = () => useContext(ProductContext);
