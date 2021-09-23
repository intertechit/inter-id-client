import React from "react";
import Layout from "../components/Layout";

export default function KullaniciDuzenle() {
  return (
    <Layout>
      <div className="main-container-top">
        <b>MERHABA DENİZ</b>
      </div>
      <div className="main-container-middle">
        <div className="rozet-yorum-yap">
          Bu sayfada brofil resmini değiştirebilirsin.
          <br />
          <br />
          <input type="file" className="form-control" id="customFile" />
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
