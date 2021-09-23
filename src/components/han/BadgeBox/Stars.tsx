import React, { ReactNode } from "react";

interface StarsProps {
  score: number;
  comment?: boolean;
}

export default function Stars({ score, comment }: StarsProps) {
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
    <div className={comment ? "yorum-stars" : "yorum-header-stars"}>
      <ul>{renderStars()}</ul>
    </div>
  );
}
