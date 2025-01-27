import { useNavigate } from 'react-router-dom';

const CartButton = () => {
  const navigate = useNavigate(); 

  const goToCart = () => {
    navigate('/Cart'); // Navigate to the Cart page
  };

  return (
    <div className="flex gap-5">
   <button
  onClick={goToCart} // Call goToCart when the button is clicked
  className="w-[284px] h-[44px] px-[24px] py-[12px] gap-[6px] rounded-[4px] bg-[#0E1422] text-white flex items-center justify-center text-center transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg"
>
  Add to cart
</button>

      <img src="/images/Whishlist.png" alt="Wishlist" />
    </div>
  );
};

export default CartButton;
