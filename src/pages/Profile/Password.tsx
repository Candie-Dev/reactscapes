import DiscountHeader from "../../components/DiscountHeader";
import Header from "../../components/Header";
import AccountPreferences from "../../Account/AccountPreferences";
import AccountNavigation from "../../Account/AccountNavigation";
import BorderLine from "../../Account/BorderLine";
import ModifyPassword from "../../Address/ModifyPassword";
import Footer from "../../components/Footer";


const Password = () => {
    return (
        <div>
<DiscountHeader />
<Header />
<AccountPreferences />
<div className="flex">
<AccountNavigation />
<div className="ml-10"><BorderLine /></div>
<ModifyPassword />
</div>
<Footer />
        </div>
    )
}

export default Password;

