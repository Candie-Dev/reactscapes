const Footer = () => {
  return (
    <div className="w-full bg-[#ffffff] border-t border-gray-300">
      {/* Outer Container for Padding */}
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col gap-8">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          {/* Column 1: Logomark and Ecommerce */}
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-4">
              <img
                className="w-12 h-12 transition-all duration-300 ease-in-out hover:scale-110"
                src="/images/Logomark1.png"
                alt="Logomark"
              />
              <h1 className="text-lg font-semibold transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                Ecommerce
              </h1>
            </div>
            <p className="text-gray-500 text-sm">
              DevCut is a YouTube channel for practical project-based learning.
            </p>
            <div className="flex gap-4">
              <img
                className="transition-all duration-300 ease-in-out hover:scale-110"
                src="/images/icon1.png"
                alt="Icon 1"
              />
              <img
                className="transition-all duration-300 ease-in-out hover:scale-110"
                src="/images/icon2.png"
                alt="Icon 2"
              />
              <img
                className="transition-all duration-300 ease-in-out hover:scale-110"
                src="/images/icon3.png"
                alt="Icon 3"
              />
            </div>
          </div>

          {/* Column 2: Support, Company, Shop */}
          <div className="grid grid-cols-3 gap-8">
            {/* Support */}
            <div>
              <h2 className="text-gray-600 text-sm font-semibold mb-4">Support</h2>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  FAQ
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  Terms of Use
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  Privacy Policy
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h2 className="text-gray-600 text-sm font-semibold mb-4">Company</h2>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  About Us
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  Contact Us
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  Careers
                </li>
              </ul>
            </div>

            {/* Shop */}
            <div>
              <h2 className="text-gray-600 text-sm font-semibold mb-4">Shop</h2>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  My Account
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  Checkout
                </li>
                <li className="transition-all duration-300 ease-in-out hover:text-[#0E1422]">
                  Cart
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Accepted Payments */}
          <div className="flex flex-col items-start space-y-4">
            <h2 className="text-gray-600 text-sm font-semibold">Accepted Payments</h2>
            <div className="flex gap-4">
              <img
                className="transition-all duration-300 ease-in-out hover:scale-110"
                src="/images/icon4.png"
                alt="Payment Icon 1"
              />
              <img
                className="transition-all duration-300 ease-in-out hover:scale-110"
                src="/images/icon5.png"
                alt="Payment Icon 2"
              />
              <img
                className="transition-all duration-300 ease-in-out hover:scale-110"
                src="/images/icon6.png"
                alt="Payment Icon 3"
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-gray-500 text-sm">
          © 2025 DevCut. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;


