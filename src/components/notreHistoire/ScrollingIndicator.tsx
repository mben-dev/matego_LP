import React from "react";

interface ScrollingIndicatorProps {
  notreHistoireContents: Array<{
    id: number;
    title: string;
    content: string;
  }>;
  currentContent: number;
}

const ScrollingIndicator: React.FC<ScrollingIndicatorProps> = ({
  notreHistoireContents,
  currentContent,
}) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform ">
      <div className="flex space-x-2">
        {notreHistoireContents.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentContent === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-sm text-secondary mt-2 translate-x-[-30%] ">
        Scroll pour découvrir
      </p>
    </div>
  );
};

export default ScrollingIndicator;
