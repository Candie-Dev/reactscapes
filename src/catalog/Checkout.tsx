import IncrementDecrement from "./Quantity";
import Line from "./Line";
import QuantityInput from "./QuantityInput";
import Checkbox from "./CheckBox";

const Checkout = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-6 h-[640px]">
      {/* Column 1: CartItem, ProductItem, IncrementDecrement, and QuantityInput */}
      <div className="flex flex-col gap-4 mt-10 px-6 py-4 bg-white rounded-lg shadow-md">
        <Line />
        <IncrementDecrement />
        <QuantityInput />
      </div>

      {/* Column 2: Checkbox */}
      <div className="flex justify-end items-start px-6 py-4">
        <Checkbox />
      </div>
    </div>
  );
};

export default Checkout;
