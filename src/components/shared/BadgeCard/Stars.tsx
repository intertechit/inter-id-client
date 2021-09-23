import React, { ReactNode } from "react";

interface StarsProps {
  score: number;
  type: "modal" | "badge";
}

export default function Stars({ score, type }: StarsProps) {
  const renderStars = () => {
    const stars: ReactNode[] = [];

    for (let i = 0; i < score; i++)
      stars.push(
        <li key={i}>
          <img src="images/star.png" alt="" />
        </li>
      );

    return stars;
  };

  return (
    <div className={type === "badge" ? "stars" : "model-stars"}>
      <ul>{renderStars()}</ul>
    </div>
  );
}
