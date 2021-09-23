import React from "react";
import BadgeBox from "../components/han/BadgeBox";
import Layout from "../components/Layout";

export default function Han() {
  return (
    <Layout>
      <div className="main-container-top">
        DENİZ'İN HAN <b>YORUMLARI</b>
      </div>
      <div className="main-container-middle">
        <div className="rozet-yorum-container">
          <BadgeBox />
          <BadgeBox />
          <BadgeBox />
        </div>
      </div>
      <div className="main-container-bottom"></div>
    </Layout>
  );
}
