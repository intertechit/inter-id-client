import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/Layout";

export default function Sıralamalar() {
  return (
    <Layout>
      <div className="main-container-top">
        <b></b>
      </div>
      <div className="main-container-middle">
        <div className="banner">
          <div className="banner-container">
            <h6>SIRALAMALAR</h6>

            <ul>
              <li>
                <Link to="/siralamalar">Rozet Toplayıcılar</Link>
              </li>
              <li>
                <Link to="/yildiz-toplayicilar">Yıldızlar</Link>
              </li>
              <li>
                <Link to="/legendary-sahipleri">Legendary Rozet Sahipleri</Link>
              </li>
              <li>
                <Link to="/unique-sahipleri">Unique Rozet Sahipleri</Link>
              </li>
              <li>
                <Link to="/rare-sahipleri">Rare Rozet Sahipleri</Link>
              </li>
              <li>
                <Link to="/uncommon-sahipleri">Uncommon Rozet Sahipleri</Link>
              </li>
              <li>
                <Link to="/common-sahipleri">Common Rozet Sahipleri</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="scroll">
          <div className="scroll-container rozet-toplayicilar">
            <h4>ROZET TOPLAYICILAR</h4>

            <ol>
              <li>
                <a href="#">
                  Mustafa Çağatay Tulun - IMS Altyapı Bölüm Müdürü{" "}
                  <strong>(45 Rozet)</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  Ayşe Merve Aksu - Mobil Deniz Projeleri Ekip Lideri{" "}
                  <strong>(42 Rozet)</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  Artun Manuk Çilingiryan - Görsel Tasarım ve Kullanıcı Deneyimi
                  - Görsel Tasarım Sorumlusu <strong>(41 Rozet)</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  Hakan Başel - Genel Altyapı 1 - Uzman İş Analisti{" "}
                  <strong>(38 Rozet)</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  Melike Yalçınkaya Erenuluğ - Sigorta ve İK Projeleri - Master
                  İş Analisti - Product Owner <strong>(33 Rozet)</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  Özge Yıldırım - İntertech İK Organizasyon ve Raporlama -
                  Intertech İK Organizasyon ve Kurumsal İletişim sorumlusu{" "}
                  <strong>(30 Rozet)</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  Arife Çakar - Öneri İkna ve Kullanıcı Dashboardları Mimar İş
                  Analisti <strong>(28 Rozet)</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  Elçin Çıtlak - Mikro Önyüz Mimarileri Altyapı - Mimar İş
                  Analisti <strong>(25 Rozet)</strong>
                </a>
              </li>
              <li>
                <a href="#">
                  Ali Güneş - inter-Vision - Kart Basım ve Başvuru Süreçleri
                  Bölüm Müdürü <strong>(23 Rozet)</strong>{" "}
                </a>
              </li>
              <li>
                <a href="#">
                  Nermin Doğan - Proje Yönetim Ofisi - DFGH - Portföy Yöneticisi{" "}
                  <strong>(21 Rozet)</strong>
                </a>
              </li>
            </ol>

            <ol className="user">
              <li>
                <a href="#">
                  Deniz Melekoğlu - Görsel Tasarım ve Kullanıcı Deneyimi -
                  Görsel Tasarım Sorumlusu <strong>(9 Rozet)</strong>
                </a>
              </li>
            </ol>
          </div>
        </div>

        <div className="clear"></div>
      </div>
      <div className="main-container-bottom"></div>
    </Layout>
  );
}
