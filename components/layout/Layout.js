// components/Layout.js
import { useEffect } from 'react';
import 'tailwindcss/tailwind.css';
// import '../styles/globals.css'; // Import your global styles here
// import { ThemeProvider } from "@material-tailwind/react";

const Layout = ({ children }) => {
  useEffect(() => {
    // Set the direction attribute on the <html> element to "rtl" for Arabic
    document.documentElement.setAttribute('dir', 'rtl');
  }, []);

  return  (
     <div className="">{children}</div> 
  ) 
};

export default Layout;