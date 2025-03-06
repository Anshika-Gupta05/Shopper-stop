import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Components/Footer/Footer";
export const backend_url = "https://shopper-stop-backend.onrender.com";
export const currency = "₹";
export const frontend_url = "https://shopper-stop-frontend.vercel.app";

const App = () => {
  return (
    <div>
      <Navbar />
      <Admin />
      <Footer />
    </div>
  );
};

export default App;
