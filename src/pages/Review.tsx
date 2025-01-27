import Reflection from "../ThumbnailCard/Reflection";
import Stripe from "../catalog/Stripe";
import Examination from "../ThumbnailCard/Examination";

const Review = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-[400px] h-[550px] bg-white rounded-lg p-8">
                <Reflection />
                <Stripe />
                <Examination />
            </div>
        </div>
    );
};

export default Review;
