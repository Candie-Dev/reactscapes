// import DiscountHeader from "../../components/DiscountHeader";
// import Header from "../../components/Header";
// import AccountPreferences from "../../Account/AccountPreferences";
// import AccountNavigation from "../../Account/AccountNavigation";
// import BorderLine from "../../Account/BorderLine";
// import WishlistItem from "../../Account/WishlistItem";
// import ProductCard from "../../Account/ProductCard";
// import Border from "../../Account/Border";
// import ItemCard from "../../Account/ItemCard";
// import Footer from "../../components/Footer";


// const WantList = () => {
//     return (
//         <div>
// <DiscountHeader />
// <Header />
// <AccountPreferences />
// <div className="flex">
// <AccountNavigation />
// <div className="ml-10"><BorderLine /></div>
// <div>
// <div className="ml-16"><WishlistItem /></div>
// <div className="mt-10 ml-16"><ProductCard /></div>
// <div className="ml-16"><Border /></div>
// <div className="mt-10 ml-16"><ItemCard /></div>
// </div>
// </div>
// <Footer />



 
         
       



//         </div>
//     )
// }

// export default WantList;

import DiscountHeader from "../../components/DiscountHeader";
import Header from "../../components/Header";
import AccountPreferences from "../../Account/AccountPreferences";
import AccountNavigation from "../../Account/AccountNavigation";
import BorderLine from "../../Account/BorderLine";
import WishlistItem from "../../Account/WishlistItem";
import ProductCard from "../../Account/ProductCard";
import Border from "../../Account/Border";
import ItemCard from "../../Account/ItemCard";
import Footer from "../../components/Footer";

const WantList = () => {
  return (
    <div>
      <DiscountHeader />
      <Header />
      <AccountPreferences />
      <div className="flex">
        <AccountNavigation />
        <div className="ml-10"><BorderLine /></div>
        <div>
          {/* WishlistItem with padding */}
          <div className="ml-16 p-4"> 
            <WishlistItem />
          </div>

          {/* ProductCard with padding */}
          <div className="mt-10 ml-16 p-4"> 
            <ProductCard />
          </div>

          {/* Border with padding */}
          <div className="ml-16 p-4"> 
            <Border />
          </div>

          {/* ItemCard with padding */}
          <div className="mt-10 ml-16 p-4"> 
            <ItemCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default WantList;
