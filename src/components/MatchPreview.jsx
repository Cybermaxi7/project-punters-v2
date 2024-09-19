import React from "react";

const MatchPreview = ({ images, sections }) => {
    return (
        <div className="bg-white rounded-[8px] shadow-md border border-[#DBE1E7]  ">
            <div className="flex items-center p-5 bg-[#F7F8F9] h-[70px] w-full">
                <h3 className="text-lg items-start flex font-semibold text-[#2B2B2B] mb-5">
                    Preview
                </h3>
            </div>

            {/* Images Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6 p-5 rounded-t-[8px]">
                {images.map((image, index) => (
                    <img
                        data-aos="fade-up"
                        key={index}
                        src={image}
                        alt={`Match preview ${index + 1}`}
                        className="w-full sm:w-1/2 h-auto rounded-lg object-cover"
                    />
                ))}
            </div>

            {/* Sections */}
            {sections.map((section, index) => (
                <div
                    data-aos="slide-right"
                    key={index}
                    className="px-6 py-5 border border-[#DBE1E7]"
                >
                    <h4 className="text-green-600 font-semibold mb-2 uppercase">
                        {section.title}
                    </h4>

                    <div>
                        <p className="text-[#2B2B2B]">{section.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MatchPreview;
