import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import Pricing from "./sections/Pricing.jsx";
import Hero from "./sections/Hero.jsx";


const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />  
      <Pricing />

      <Footer />
     

    </main>
  );
};

export default App;
