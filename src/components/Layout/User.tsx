import React from "react";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="header-container">
      <div className="user-image">
        <Link to="/kullanici-duzenle">
          <img
            src="publishing-images/user/user-tempjpg"
            width="1060"
            height="1119"
            alt=""
          />
        </Link>
      </div>

      <div className="user-organisation">
        <ul>
          <li>
            Kadir Mustafa Öztürk
            <ul>
              <li>
                Erbuğ Kaya
                <ul>
                  <li>Deniz Can Huzur Melekoğlu</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="user-name-title">
        <h6>Deniz Melekoğlu</h6>
        <span>
          Görsel Tasarım ve Kullanıcı Deneyimi <br></br> Görsel Tasarım Uzmanı
        </span>
      </div>

      <div className="user-mail-tel">
        deniz.melekoglu@intertech.com.tr
        <br></br>
        (531) 699 71 70
      </div>
    </div>
  );
}
