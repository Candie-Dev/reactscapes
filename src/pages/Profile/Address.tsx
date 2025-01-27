import DiscountHeader from "../../components/DiscountHeader";
import Header from "../../components/Header";
import AccountPreferences from "../../Account/AccountPreferences";
import AccountNavigation from "../../Account/AccountNavigation";
import BorderLine from "../../Account/BorderLine";
import DestinationAddress from "../../Address/DestinationAddress";
import DeliveryForm from "../../Address/DeliveryForm";



const Address = () => {
    return (
        <div>
            <DiscountHeader />
            <Header />
            <AccountPreferences />
           <div className="flex">
           <div className="mt-2"><AccountNavigation /></div>
           <div className="ml-10"><BorderLine /></div>
           <div>
         <DestinationAddress />
         <DeliveryForm />
         </div>
           </div>
      

        </div>
    )
}

export default Address;