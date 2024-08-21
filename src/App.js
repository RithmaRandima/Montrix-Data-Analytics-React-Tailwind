import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Analytics from "./Components/Analytics/Analytics";
import NewsLetter from "./Components/NewsLetter/NewsLetter";
import SolutionSection from "./Components/SolutionSection/SolutionSection";
import AboutUs from "./Components/AboutUs/AboutUs";
import Testimonials from "./Components/Testimonials/Testimonials";
import Blog from "./Components/Blog/Blog";
import CustomersSection from "./Components/CustomersSection/CustomersSection";
import Services from "./Components/Services/Services";
import PricingSection from "./Components/PricingSection/PricingSection";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <SolutionSection />
      <AboutUs />
      <CustomersSection />
      <Analytics />
      <Services />
      <PricingSection />
      <NewsLetter />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
