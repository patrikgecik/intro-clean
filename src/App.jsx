import Header from "./sections/Header.jsx";
import Footer from "./sections/Footer.jsx";
import TerminarPricing from "./sections/TerminarPricing.jsx";
import ReservationSystemHero from "./sections/MyHero.jsx";
import GiftCardsSection from "./sections/TerminarGift.jsx";
import ReservationSystemShowcase from "./sections/SystemPreview.jsx"
import SpecialOfferBanner from "./sections/HotOffer.jsx";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <ReservationSystemHero />  
            <SpecialOfferBanner/>

      <GiftCardsSection />

      <ReservationSystemShowcase />
      <TerminarPricing />
      <Footer />
     

    </main>
  );
};

export default App;
