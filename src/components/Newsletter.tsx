import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email.trim() === '') {
      alert('Please enter your email address.');
    } else {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail(''); // Clear the input field
    }
  };

  return (
    <div className="w-full bg-[#F6F6F6] border-b border-gray-300">
      {/* Outer Container for Padding */}
      <div className="max-w-7xl mx-auto px-8 py-12 flex flex-col sm:flex-row justify-between items-center gap-8">
        {/* Text Section */}
        <div>
          <h1 className="font-semibold text-[32px] leading-[38.73px] tracking-[-0.035em] text-left underline-offset-4 decoration-none mb-4 transition-all duration-300 ease-in-out hover:underline hover:text-[#0E1422]">
            Join Our Newsletter
          </h1>
          <p className="text-gray-500 transition-all duration-300 ease-in-out hover:text-[#0E1422]">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>

        {/* Input and Button Section */}
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <input
            className="flex-grow sm:flex-grow-0 w-full sm:w-[320px] h-[45px] text-xs px-4 py-2 rounded-md border border-gray-300 transition-all duration-300 ease-in-out hover:border-[#0E1422] focus:outline-none focus:ring-2 focus:ring-[#0E1422]"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-[116px] h-[44px] px-6 py-3 gap-1.5 rounded-[4px] bg-[#0E1422] text-white text-sm font-semibold transition-all duration-300 delay-100 hover:bg-[#1E1F3A] hover:scale-105 hover:shadow-lg hover:translate-y-[-2px]"
            onClick={handleSubscribe}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
