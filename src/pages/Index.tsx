import { useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div
          className="inline-block cursor-pointer transition-transform duration-300 ease-out hover:scale-110"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span className="text-[120px] leading-none select-none">
            {isHovered ? "☀️" : "⭐"}
          </span>
        </div>
        <p className="mt-8 text-muted-foreground">
          Hover over the star to see the magic
        </p>
      </div>
    </div>
  );
};

export default Index;
