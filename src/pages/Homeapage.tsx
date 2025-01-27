import DiscountHeader from "../components/DiscountHeader";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ClothingList from "../components/ClothingList";
import CategoriesCTA from "../components/CategoriesCTA";
import ProductList from "../components/ProductList";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const goToClothingCatalog = () => {
    navigate('/ClothingCatalog');
  };

  return (
    <div>
      <DiscountHeader />
      <Header />
      <Hero />
      <Features />
      <ClothingList />
      <CategoriesCTA />
      <ProductList />
      <Newsletter />
      <Footer />

      
    
        
      </div>
    
  );
}

export default Homepage;
