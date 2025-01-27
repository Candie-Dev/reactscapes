import DiscountHeader from "../../components/DiscountHeader";
import Header from "../../components/Header";
import AccountPreferences from "../../Account/AccountPreferences";
import AccountNavigation from "../../Account/AccountNavigation";
import BorderLine from "../../Account/BorderLine";
import EmptySpace from "../../Address/EmptySpace";
import Footer from "../../components/Footer";


const EmptyState = () => {
    return (
        <div>
            <DiscountHeader />
            <Header />
            <AccountPreferences />
            <div className="flex">
            <AccountNavigation />
           <div className="ml-10"> <BorderLine /></div>
            <EmptySpace />
 </div>
            <Footer />

        </div>
    )
}

export default EmptyState;