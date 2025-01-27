import DiscountHeader from "../../components/DiscountHeader";
import Header from "../../components/Header";
import AccountPreferences from "../../Account/AccountPreferences";
import AccountNavigation from "../../Account/AccountNavigation";
import BorderLine from "../../Account/BorderLine";
import UserInformation from "../../Address/UserInformation";
import LoginDetails from "../../Address/LoginDetails";
import Footer from "../../components/Footer";


const AccountDetail = () => {
    return (
<div>
<DiscountHeader />
<Header />
<AccountPreferences />
<div className="flex">
<AccountNavigation />
<div className="ml-10"><BorderLine /></div>
<div><UserInformation />
<LoginDetails />


</div>
</div>
<Footer />

</div>
    )
}

export default AccountDetail;