import React from "react";

export default function Search() {
  return (
    <div className="user-autosearch">
      <input
        type="text"
        id="search-in"
        placeholder="Aradığınız kişinin adını veya aradığınız rozeti yazın."
      ></input>
      <img src="images/icon-searchbar-down.png" alt="" />
      <ul id="myUL" className="result-list">
        <li>
          <a href="#">Erbuğ Kaya</a>
        </li>
        <li>
          <a href="#">Hasan Taşdelen</a>
        </li>
        <li>
          <a href="#">Artun Manuk Çilingiryan</a>
        </li>
        <li>
          <a href="#">Selin Yavaş</a>
        </li>
        <li>
          <a href="#">Oğuz Tarhan</a>
        </li>
      </ul>
    </div>
  );
}
