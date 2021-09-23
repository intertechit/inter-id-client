import React from "react";
import Layout from "../components/Layout";

export default function RozetOnay() {
  return (
    <Layout>
      <div className="main-container-top">
        <b>KREDİLER ROZETİ ONAY</b>
      </div>
      <div className="main-container-middle">
        <div className="rozet-onay">
          Merhaba, <em>Deniz Melekoğlu'nun</em>{" "}
          <strong>Krediler Rozeti'ni</strong> onaylamak için bu sayfaya
          yönlendirildiniz.
          <br />
          <br />
          <div className="special-box">
            <h6>Rozeti Talep Eden</h6>
            <span>
              Deniz Melekoğlu - Görsel Tasarım ve Kullanıcı Deneyimi - Görsel
              Tasarım Sorumlusu
            </span>
          </div>
          <div className="special-box">
            <h6>Krediler Rozeti Geeksinimleri</h6>
            <ul>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </ul>
          </div>
          <button type="submit" className="btn btn-success">
            Onayla
          </button>
        </div>

        <div className="clear"></div>
      </div>
      <div className="main-container-bottom"></div>
    </Layout>
  );
}
