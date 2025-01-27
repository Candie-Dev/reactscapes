import DiscountHeader from "../components/DiscountHeader";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Gallery from "../catalog/Gallery";
import Section from "../catalog/Section";
import PantsList from "../catalog/PantsList";
import BreadCrumb from "../catalog/BreadCrumb";




const ClothingCatalog = () => {

    return (
        
        <div>


    <DiscountHeader />

    <Header />
    
    <BreadCrumb />
    
    <Gallery />

    <Section />


    <PantsList />

    
    <Newsletter />
    
    <Footer />


       </div>

    )
}

export default ClothingCatalog;