import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import Gem from "../Gem";
import ModalGem from "./ModalGem";
import Stars from "./Stars";

// TODO: Suan statik backendten sonra dinamik hale cevrilecek

export default function BadgeCard() {
  const [isModalShow, setIsModalShow] = useState(false);

  return (
    <>
      <div className="rozet-box">
        <Gem type={"legendary"} />

        <Stars type="badge" score={5} />

        <div className="icon">
          <img src="publishing-images/rozet/sample-icon.png" alt="" />
        </div>

        <div className="text" onClick={() => setIsModalShow(true)}>
          <p>Lorem Ipsum</p>
        </div>
      </div>

      {/* Modal */}
      <Modal show={isModalShow}>
        <Modal.Header>
          <div
            className="modal-close-button"
            onClick={() => setIsModalShow(false)}
          >
            <img
              src="images/Modal-Close-Button.png"
              data-dismiss="modal"
              aria-label="Close"
              alt=""
            />
          </div>
          <ModalGem type={"legendary"} />
          <Stars type="modal" score={5} />
          <div className="model-rozet">
            <img src="publishing-images/rozet/sample-icon.png" alt="" />
          </div>
          <div className="model-rozet-header">
            <h5>Lorem Ipsum</h5>
            <span>
              Bu rozete <b>33</b> kişi sahiptir
            </span>
            <br />
            <span>
              <a href="#">Sen de bu rozet için başvur.</a>
            </span>
          </div>
        </Modal.Header>
        <Modal.Body>
          <h6>ROZET GEREKSİNİMLERİ</h6>
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
        </Modal.Body>
        <Modal.Footer>
          <div className="model-cta-button">
            <Link to="/rozete-yorum">Derya'nın rozetine yorum yap</Link>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
