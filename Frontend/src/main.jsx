import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StateProvider, ProductProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";

import "./App.css"
import Layout from "./Components/Layout/Layout";
import Body from "./Components/Body/Body";
// import Products from "./Components/products/Products";
import Product from "./Components/products/Product"
import Shoping_cart from "./Components/pages/Shoping_cart";
import Whish_list from "./Components/pages/Whish_list";
import Register from "./Components/pages/Register";
import Login from "./Components/pages/Login";
import Men from "./Components/pages/Men";
import Women from "./Components/pages/Women";
import Kids from "./Components/pages/Kids";
import Winter from "./Components/pages/Winter";
import AboutUs from "./Components/pages/AboutUs";
import ContactUs from "./Components/pages/ContactUs";
import Branding_company from "./Components/pages/Branding_company";
import Terms_comditions from "./Components/pages/Terms_comditions";
import Category_products from "./Components/products/Category_products";
import Payment from "./Components/pages/Payment";
import Thankyou from "./Components/pages/Thankyou";
import PrivacyPolicy from "./Components/pages/PrivacyPolicy";
import FAQs from "./Components/pages/FAQs";
import ReturnPolicy from "./Components/pages/ReturnPolicy";
import MinasDream from "./Components/pages/MinasDream";
import SizeGuide from "./Components/pages/SizeGuide";
import Shipping_and_Delivery from "./Components/pages/Shipping_and_Delivery";
import Collections from "./Components/products/Collections";
import Results from "./Components/pages/Results";
import AuthHandler from "./AuthHandler";
import Career from "./Components/pages/Career";
import HowToOrder from "./Components/pages/HowToOrder";
import Dashboard from "./Components/Dashboard";
import UpdatePeoduct from "./Components/UpdatePeoduct";
import UploadProduct from "./Components/UploadProduct";
import OrdersTable from "./Components/OrdersTable";
import ProductTable from "./Components/ProductTable";
// import AuthHandler from "./AuthHandler";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Apply Layout globally
    children: [
      { path: "/", element: <Body /> },  // Main route ("/") uses <Body />
      // { path: "/products", element: <Products /> }, // Route "/products"
      // { path: "/products", element: <Collections /> }, // Route "/products"
      { path: "/results", element: <Results /> }, // Route "/results Show results"
      { path: "/collections", element: <Collections /> }, // Route "/products"
      { path: "/category-products/:category", element: <Category_products /> }, // Route "/category-products"
      { path: "/product/:id", element: <Product /> }, // Route "/product"
      { path: "/men", element: <Men /> }, // Route "/men"
      { path: "/women", element: <Women /> }, // Route "/women"
      { path: "/kids", element: <Kids /> }, // Route "/kids"
      { path: "/winter", element: <Winter /> }, // Route "/winter"
      { path: "/minas-dream", element: <MinasDream /> }, // Route "/mina's-dream"
      // { path: "/minas-dream", element: <MinasDream /> }, // Route "/mina's-dream"
      { path: "/shoping-cart", element: <Shoping_cart /> }, // Route "/shoping-cart"
      { path: "/whish-list", element: <Whish_list /> }, // Route "/Whish List"
      { path: "/payment", element: <Payment /> }, // Route "/payment"
      { path: "/thank-you", element: <Thankyou /> }, // Route "/thank-you"
      { path: "/size-guide", element: <SizeGuide /> }, // Route "/Size Guide"
      { path: "/login", element: <Login /> }, // Route "/login"
      { path: "/register", element: <Register /> }, // Route "/register"
      { path: "/about-us", element: <AboutUs /> }, // Route "/about-us"
      { path: "/contact-us", element: <ContactUs /> }, // Route "/contact-us"
      { path: "/branding", element: <Branding_company /> }, // Route "/branding"
      { path: "/terms-conditions", element: <Terms_comditions /> }, // Route "/Terms & Conditions"
      { path: "/privacy-policy", element: <PrivacyPolicy /> }, // Route "/Privacy Policy"
      { path: "/return-policy", element: <ReturnPolicy /> }, // Route "/Return Policy"
      { path: "/career", element: <Career /> }, // Route "/Return Policy"
      { path: "/howtoorder", element: <HowToOrder /> }, // Route "/Return Policy"
      { path: "/Shipping_and_Delivery", element: <Shipping_and_Delivery /> }, // Route "/Shipping & Delivery"
      { path: "/FAQs", element: <FAQs /> }, // Route "/FAQs"
      { path: "/thankyou", element: <Thankyou /> }, // Route "/FAQs"


    ]
  },

  { path: "/terms-conditions", element: <Terms_comditions /> },
  { path: "/dashboard", element: <Dashboard /> }, // Route "/dashboard"
  { path: "/upload-product", element: <UploadProduct /> }, // Route "/dashboard"
  { path: "/update-product", element: <UpdatePeoduct /> }, // Route "/dashboard"
  { path: "/get-products", element: <ProductTable /> }, // Route "/dashboard"
  { path: "/get-orders", element: <OrdersTable /> }, // Route "/dashboard"
  { path: "*", element: <h1>404 Not Found</h1> }, // Catch-all route for 404
]);



//   {
//     path: "/", element: (<Layout> <Body /> </Layout>)
//   },
//   {
//     path: "/products", element: (<Layout> <Products />  </Layout>)
//   },
//   {
//     path: "/category-products/:category", element: (<Layout>  <Category_products />  </Layout>)
//   },
//   {
//     path: "/product/:id", element: (<Layout> <Product /> </Layout>)
//   },

//   {
//     path: "/men", element: (<Layout>   <Men />  </Layout>)
//   },
//   {
//     path: "/women", element: (<Layout>   <Women />  </Layout>)
//   },
//   {
//     path: "*", element: <h1>404 Not Found</h1> // Catch-all for unmatched routes
//   },
//   {
//     path: "/kids", element: (<Layout> <Kids /> </Layout>)
//   },
//   {
//     path: "/winter", element: (<Layout>   <Winter /> </Layout>)
//   },
//   {
//     path: "/minas-dream", element: (<Layout> <MinasDream />   </Layout>)
//   },
//   {
//     path: "/shoping-cart", element: (<Layout> <Shoping_cart />  </Layout>)
//   },
//   {
//     path: "/whish-list", element: (<Layout>  <Whish_list /> </Layout>)
//   },
//   {
//     path: "/payment", element: (<Layout>  <Payment /> </Layout>)
//   },
//   {
//     path: "/thank-you", element: (<Thankyou />)
//   },
//   {
//     path: "/size-guide", element: (<Layout> <SizeGuide />  </Layout>)
//   },
//   {
//     path: "/login", element: (<Layout>   <Login />  </Layout>)
//   },
//   {
//     path: "/register", element: (<Layout> <Register /> </Layout>)
//   },
//   {
//     path: "/about-us", element: (<Layout>  <AboutUs />  </Layout>)
//   },
//   {
//     path: "/contact-us", element: (<Layout> <ContactUs />  </Layout>)
//   },
//   {
//     path: "/branding", element: (<Layout> <Branding_company /> </Layout>)
//   },
//   {
//     path: "/terms-conditions", element: (<Layout>  <Terms_comditions />  </Layout>)
//   },
//   {
//     path: "/privacy-policy", element: (<Layout> <PrivacyPolicy />  </Layout>)
//   },
//   {
//     path: "/return-policy", element: (<Layout>  <ReturnPolicy />  </Layout>)
//   },
//   {
//     path: "/Shipping_and_Delivery", element: (<Layout>  <Shipping_and_Delivery />  </Layout>)
//   },
//   {
//     path: "/FAQs", element: (<Layout>  <FAQs />  </Layout>)
//   },
//   {
//     path: "/dashboard", element: (<Dashboard />)
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    {/* StateProvider provide busket universally */}
    <StateProvider initialState={initialState} reducer={reducer} >
      <ProductProvider>
        {/* <AuthHandler /> AuthHandler to track login state */}
        {/* Provide product univarsally */}


        <RouterProvider router={router} />


      </ProductProvider>
    </StateProvider>
  </React.StrictMode>
);