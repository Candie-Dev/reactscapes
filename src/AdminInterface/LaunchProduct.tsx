import PhotoItem from "./PhotoItem";
import CircularSelectors from "./CircularSelectors";
import ExclusiveOptions from "./ExclusiveOptions";

const LaunchProduct = () => {
    return (
        <div>
            <h5 className="mt-3 text-xs">Stock status</h5>
            <input
                id="password"
                type="password"
                placeholder=""
                className="h-[45px] w-[320px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500 text-xs"
            />

            <h5 className="mt-3 text-xs">Available quantity</h5>
            <input
                id="password"
                type="password"
                placeholder=""
                className="h-[45px] w-[320px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500 text-xs"
            />

            <h5 className="mt-3 text-xs">Images</h5>
            <input
                id="password"
                type="password"
                placeholder=""
                className="h-[45px] w-[320px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 delay-100 hover:border-blue-500 text-xs"
            />

            <PhotoItem />
            <CircularSelectors />
            <ExclusiveOptions />
        </div>
    );
};

export default LaunchProduct;
