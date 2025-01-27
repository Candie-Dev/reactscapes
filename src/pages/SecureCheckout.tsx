import DiscountHeader from "../components/DiscountHeader";
import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import FormStep from "../components/FormStep";
import OrderDetail from "../components/OrderDetail";
import Footer from "../components/Footer";

const SecureCheckout = () => {
    return (
        <div>
            <DiscountHeader />
            <Header />
            <Breadcrumbs />

            {/* 2-column layout */}
            <div className="grid grid-cols-2 gap-8 px-10 mt-10">
                {/* Column 1: FormStep */}
                <div>
                    <FormStep />
                </div>

                {/* Column 2: OrderDetail */}
                <div>
                    <OrderDetail />
                </div>
            </div>
             <Footer />
        </div>
    );
};

export default SecureCheckout; 
