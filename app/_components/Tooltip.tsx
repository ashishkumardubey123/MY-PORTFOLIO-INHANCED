import React, { useState, ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showTooltip = () => setIsVisible(true);
  const hideTooltip = () => setIsVisible(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="inline-block"
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 px-4 py-2 text-sm font-semibold border border-gray-700 text-white bg-black bg-opacity-75 rounded-md shadow-sm bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
