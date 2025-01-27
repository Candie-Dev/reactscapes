import Confirmation from "../catalog/Confirmation";
import ShoppingConfirmation from "../catalog/ShoppingConfirmation";
import DiscountHeader from "../components/DiscountHeader";
import Header from "../components/Header";


const PaymentSuccessful = () => {
    return (
<div>

<DiscountHeader />
<Header />
<Confirmation />
<ShoppingConfirmation />


</div>
    )
}

export default PaymentSuccessful;