const ProgressBar = () => {
  const total = 1000; // Total goal
  const current = 734; // Current progress
  const remaining = total - current; // Remaining value

  return (
    <div className="w-[272px]">
      {/* Label above the progress bar */}
      <div className="text-gray-500 text-sm text-center">{remaining} Left</div>
      
      {/* Progress bar container */}
      <div className="w-full h-[8px] bg-purple-200 rounded-full mt-1 relative">
        {/* Progress bar */}
        <div
          className="h-full bg-blue-500 rounded-full"
          style={{ width: `${(current / total) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
