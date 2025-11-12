import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import TerminarPricing from "./sections/TerminarPricing.jsx";
import ReservationSystemHero from "./sections/MyHero.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <ReservationSystemHero />  
      <TerminarPricing />

      <Footer />
     

    </main>
  );
};

export default App;
