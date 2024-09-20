import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin/Admin";
import Footer from "./Components/Footer/Footer";
export const backend_url = "http://localhost:4000";
export const currency = "₹";
export const frontend_url = "http://localhost:3000";

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
