import React from "react";
import MatchPreview from "./MatchPreview";

const Preview = () => {
  const images = ["./assets/img/left.png", "src/assets/img/right.png"];

  const sections = [
    {
      title: "Highlight",
      content:
        "Germany will face off against Scotland in a Club Friendlies match at on 12:00:00.",
    },
    {
      title: "Form",
      content:
        "Germany has won three of their last 5 matches while Scotland has won 2 of their last five matches.",
    },
    {
      title: "Head to Head",
      content:
        "Both teams have played 3 times with Germany winning 3 time(s) in the last 3 encounters while Scotland has won 0 time(s) in the last 3 encounters.",
    },
    {
      title: "Goal Stats",
      content:
        "Germany has a goal ratio of 1.75 per match while Scotland has a goal ratio of 1.35 per match this season. Both teams will be looking to improve their form and secure a crucial win in this upcoming clash.",
    },
  ];

  return (
    <div>
      <div className="p-4 rounded-[8px]">
        <MatchPreview images={images} sections={sections} />
      </div>
    </div>
  );
};

export default Preview;
