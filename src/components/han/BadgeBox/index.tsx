import React from "react";
import Comment from "./Comment";
import Header from "./Header";

export default function BadgeBox() {
  return (
    <div className="yorum">
      <Header type="unique" />

      <div className="clear"></div>

      <div className="yorum-seperator"></div>

      <Comment editable />
      <Comment />
      <Comment editable />
      <Comment />
    </div>
  );
}
