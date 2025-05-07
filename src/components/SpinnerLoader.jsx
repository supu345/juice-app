import React, { useEffect, useState } from "react";

const SpinnerLoader = () => {
  const [showing, setShowing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowing(false);
    }, 2000); // Spinner will disappear after 2 seconds
  }, []);

  return (
    <div className="flex items-center justify-center h-screen w-full">
      {showing && (
        <img
          src="../src/assets/Animation .gif"
          alt="Loading spinner"
          className="h-40 w-40 object-contain"
        />
      )}
    </div>
  );
};

export default SpinnerLoader;
