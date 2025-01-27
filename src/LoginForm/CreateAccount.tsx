const CreateAccount = () => {
    return (
        <div className="w-full h-[160px] flex justify-between items-center mx-auto py-[10px] px-8 border-b-[1px] bg-[#F6F6F6] border-gray-300 bg-white-500 transition-all duration-300 delay-100 hover:bg-[#eaeaea]">
            <div className="flex flex-col items-start">
                <h1 className="text-lg font-semibold transition-all duration-300 delay-100 hover:text-blue-500">
                    Join Now
                </h1>
                <div className="flex items-center mt-2">
                    <h5 className="text-sm text-gray-700 mr-2 transition-all duration-300 delay-100 hover:text-blue-500">
                        Eccomerce
                    </h5>
                    <img
                        className="mt-1 transition-all duration-300 delay-100 hover:scale-110"
                        src="/images/Vector (1).png"
                        alt="Arrow Icon"
                    />
                    <h5 className="text-sm ml-2 transition-all duration-300 delay-100 hover:text-blue-500">
                        Join Now
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default CreateAccount;
