const AccountPreferences = () => {
    return (
        <div className="w-full h-[160px] flex justify-between items-center mx-auto py-[10px] px-8 border-b-[1px] bg-[#F6F6F6] border-gray-300 bg-white-500 transition-all duration-300 delay-100 hover:bg-[#eaeaea] p-8"> {/* Added padding (p-8) */}
            <div className="flex flex-col items-start">
                <h1 className="text-lg font-bold transition-all duration-300 delay-100 hover:text-blue-500">
                    My Account
                </h1>
                <div className="flex items-center mt-2">
                    <h5 className="text-gray-700 text-sm mr-2 transition-all duration-300 delay-100 hover:text-blue-500">
                        Ecommerce
                    </h5>
                    <img
                        className="mt-1 transition-all duration-300 delay-100 hover:scale-110"
                        src="/images/Vector (1).png"
                        alt="Arrow Icon"
                    />
                    <h5 className="ml-2 transition-all text-sm duration-300 delay-100 hover:text-blue-500">
                        My Account
                    </h5>
                </div>
            </div>
        </div>
    )
}

export default AccountPreferences;
