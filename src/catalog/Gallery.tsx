import SwiperComponent from "./Swiper";
import Heading from "./Heading";
import CountStock from "./CountStock";
import Price from "./price";
import RadioButtonGroup from "./RadioButtons";
import Buttons from "./Buttons";
import IncrementDecrementMenu from "./SetCount";
import CartButton from "./CartButton";
import Layout from "./Layout";

const Gallery = () => {
  return (
    <div className="w-full h-[650px] flex mx-auto py-[10px] px-8 border-b-[1px] bg-white border-gray-300">
      {/* Left Column - Swiper */}
      <div className="w-1/2 pr-8">
       <SwiperComponent />
      </div>

      {/* Right Column - Stacked Components */}
      <div className="w-1/2 flex flex-col gap-4">
        <Heading />
        <CountStock />
        <Price />
        <RadioButtonGroup />
        <Buttons />
        <IncrementDecrementMenu />
        <CartButton />
        <Layout />

      </div>
    </div>
  );
};

export default Gallery