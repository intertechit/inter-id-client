import React from "react";
import Layout from "../components/Layout";

export default function RozeteYorum() {
  return (
    <Layout>
      <div className="main-container-top">
        <b>DENİZ'İN KREDİLER ROZETİNE YORUM YAPIYORSUN.</b>
      </div>
      <div className="main-container-middle">
        <div className="rozet-yorum-yap">
          <strong>Rozetin Tam Adı:</strong> Krediler
          <br />
          <br />
          <strong>Rozetin Derecesi:</strong>{" "}
          <span className="common">Unique</span>
          <br />
          <br />
          <br />
          Deniz'in rozetine kaç yıldız verirsin?
          <br />
          <select className="form-control" name="stars" id="stars">
            <option value="1">1 Yıldız</option>
            <option value="2">2 Yıldız</option>
            <option value="3">3 Yıldız</option>
            <option value="4">4 Yıldız</option>
            <option value="5">5 Yıldız</option>
          </select>
          <br />
          <br />
          Deniz'in rozetine yorum yap.
          <br />
          <textarea className="form-control"></textarea>
          <br />
          <br />
          <button type="submit" className="btn btn-success">
            Gönder
          </button>
        </div>

        <div className="clear"></div>
      </div>
      <div className="main-container-bottom"></div>
    </Layout>
  );
}
