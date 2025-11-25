import Footer from "./sections/Footer.jsx";
import TerminarPricing from "./sections/TerminarPricing.jsx";
import ReservationSystemHero from "./sections/MyHero.jsx";
import GiftCardsSection from "./sections/TerminarGift.jsx";
import ReservationSystemShowcase from "./sections/SystemPreview.jsx"
import SpecialOfferBanner from "./sections/HotOffer.jsx";
import Pricing from "./sections/Pricing.jsx";
import ComparisonGifts from "./sections/ComparisonGifts.jsx";
import Comparison from "./sections/Comparison.jsx";
const App = () => {
  return (
    <main className="overflow-hidden">
      <ReservationSystemHero />  
            <SpecialOfferBanner/>

      <GiftCardsSection />
      <ComparisonGifts />
      <Comparison />
      <ReservationSystemShowcase />
      <Footer />
     

    </main>
  );
};

export default App;
