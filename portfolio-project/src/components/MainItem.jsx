import React from "react";

export const MainItem = (img) => {
  return (
    <div>
      <img
        src={img}
        className="w-full h-screen object-cover object-left-top scale-x-[-1]     "
      />
    </div>
  );
};
