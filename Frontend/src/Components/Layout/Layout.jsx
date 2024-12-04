import Header from "./Header/Header";
import Footer from "./Footer/Footer"; import { ScrollRestoration, Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {/* <main>{children}</main> */}
            {/* This is where the child routes will be rendered */}
            <Outlet />
            <Footer />
            {/* this for scroll to top  */}
            <ScrollRestoration />
        </div>
    );
};

export default Layout;