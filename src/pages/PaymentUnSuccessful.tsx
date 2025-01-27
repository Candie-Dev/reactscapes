import DiscountHeader from "../components/DiscountHeader";
import Header from "../components/Header";
import TransactionDeclined from "../components/TransactionDeclined";
import FailedTransaction from "../components/FailedTransaction";

const PaymentUnSuccessful = () => {
    return (
<div>
<DiscountHeader />
<Header />
<FailedTransaction />
<TransactionDeclined />
</div>
    )
}

export default PaymentUnSuccessful;