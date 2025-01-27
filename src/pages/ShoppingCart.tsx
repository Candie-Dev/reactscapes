import Gather from "../catalog/Gather";
import QuantityInput from "../catalog/quantityInputStyle";
import Description from "../catalog/Description";
import RawBlack from "../catalog/RawBlack";
import Cost from "../catalog/Cost";
import Value from "../catalog/Value";
import Stripe from "../catalog/Stripe";
import Sum from "../catalog/Sum";
import Switch from "../catalog/Switch";
import Words from "../catalog/Words";
import EcommerceHeader from "../ThumbnailCard/EcommerceHeader";

const ShoppingCart = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start">
            {/* Add EcommerceHeader above the main content */}
            <EcommerceHeader />

            <div className="w-[516px] bg-white rounded-lg p-10 mt-10">
                <div className="flex">
                    <div><Gather /></div>
                    <div>
                        <div className="flex">
                            <RawBlack />
                            <Description />
                        </div>

                        <div className="flex">
                            <QuantityInput />
                            <Cost />
                        </div>
                    </div>
                </div>

                <Stripe />
                <Value />

                <div className="mt-72">
                    <Stripe />
                    <Sum />
                    <Switch />

                    <div className="mt-10">
                        <Words />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;
