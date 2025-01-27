import DiscountHeader from "../components/DiscountHeader";
import Header from "../components/Header";
import BreadCrumb from "../catalog/BreadCrumb";
import Gallery from "../catalog/Gallery";
import Reviews from "../catalog/Reviews";
import PantsList from "../catalog/PantsList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";


const FashionCatalogue = () => {
  return (
    <div>
      <DiscountHeader />
      <Header />
      <BreadCrumb />
      <Gallery />
      <Reviews />
      <PantsList />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default FashionCatalogue;
