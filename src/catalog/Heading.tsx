const Heading = () => {
  return (
    <div className="flex gap-72 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
      <h1 className="text-3xl font-mono text-black transition-all duration-300 ease-in-out hover:text-gray-700">
        Raw Black T-Shirt Lineup
      </h1>
      <img
        src="/images/Share.png"
        alt="Share"
        className="transition-all duration-300 ease-in-out hover:scale-110 hover:opacity-80"
      />
    </div>
  );
};

export default Heading;