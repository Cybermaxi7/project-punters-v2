import React from "react";

const Card = ({ imageSrc, title, description }) => {
  return (
    <div className="card bg-[#f9f9f9] shadow-custom-inset px-0 py-0 rounded-none w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto">
      <figure>
        <img src={imageSrc} alt={title} className="w-full object-cover" />
      </figure>
      <div className="card-body p-4 text-left ">
        <h2 className="card-title text-lg md:text-xl font-semibold color-[#2b2b2b]">
          {title}
        </h2>
        <p className="text-sm md:text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
