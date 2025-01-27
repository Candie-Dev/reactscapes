import DiscountHeader from "../../components/DiscountHeader";
import Header from "../../components/Header";
import AccountPreferences from "../../Account/AccountPreferences";
import AccountNavigation from "../../Account/AccountNavigation";
import ProfileItem from "../../Account/ProfileItem";
import Wishlist from "../../Account/Wishlist";
import Border from "../../Account/Border";
import BorderLine from "../../Account/BorderLine";
import WishlistItem from "../../Account/WishlistItem";
import Footer from "../../components/Footer";

const Orders = () => {
  return (
    <div>
      <DiscountHeader />
      <Header />
      <AccountPreferences />
      <div className="flex justify-between">
        <div>
          <AccountNavigation />
        </div>

        <div className="flex ml-20">
          <div><BorderLine /></div>
        </div>

        {/* ProfileItem and Wishlist section with left margin and inside padding */}
        <div className="w-full ml-10 p-4"> {/* Added general padding (p-4) */}
          {/* WishlistItem with inside padding */}
          <div className="p-4">
            <WishlistItem />
          </div>

          {/* ProfileItem with inside padding */}
          <div className="mt-10 p-4">
            <ProfileItem />
          </div>

          {/* Border with inside padding */}
          <div className="p-4">
            <Border />
          </div>

          {/* Wishlist with inside padding */}
          <div className="mt-10 p-4">
            <Wishlist />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
