import RegisterProduct from "./RegisterProduct";
import IntroduceProduct from "./IntroduceProduct";
import LaunchProduct from "./LaunchProduct";

const AddaListing = () => {
  return (
    <div className="w-[1068px] h-[885px] mt-32 ml-10 bg-white p-10 rounded-[16px] shadow-lg">
      <RegisterProduct />
      <div className="flex gap-5 mt-5">
        <IntroduceProduct />
        <LaunchProduct />
      </div>
    </div>
  );
};

export default AddaListing;
