import Label from "./Label";
import Passage from "./Passage";
import QuantityInput from "./quantityInputStyle";
import Expense from "./Expense";
import Lines from "./Lines";

const Value = () => {
    return (
        <div className="flex">
<div><Label /></div>



<div>
<div className="flex">
<Passage />
<Lines />

</div>


<div className="flex">
<QuantityInput />
<Expense />
</div>
</div>

        </div>
    )
}

export default Value;