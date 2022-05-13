import React from "react";

function MottoCard({ HeroSVG, title, body }) {
  return (
    <div className="flex gap-x-4 flex-col lg:flex-row  border-gray-800 w-full filter drop-shadow-md p-5 rounded-lg border-2">
      <div className="my-auto basis-1/5 mx-auto ">
        <HeroSVG />
      </div>
      <div className="my-auto basis-4/5 ">
        <div className="text-xl font-semibold">{title}</div>
        <div>{body}</div>
      </div>
    </div>
  );
}

export default MottoCard;
