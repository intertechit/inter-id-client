import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

import Stars from "./Stars";

interface CommentProps {
  editable?: boolean;
}

export default function Comment({ editable = false }: CommentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);

  return (
    <div className="user-box container">
      <div className="user-name">Artun Manuk Çilingiryan</div>

      <Stars score={3} comment />

      {isEditing ? (
        <Form.Control
          as="textarea"
          className="user-yorum-editable mb-3"
          rows={3}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          odio eu urna posuere tempus eget eget velit. Aenean et libero et lacus
          aliquam porta id finibus tellus. Etiam tempus est elit, at tristique
          risus volutpat at. Aliquam et turpis venenatis, hendrerit dui id,
          ullamcorper nunc.
        </Form.Control>
      ) : (
        <div className="user-yorum mb-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
          odio eu urna posuere tempus eget eget velit. Aenean et libero et lacus
          aliquam porta id finibus tellus. Etiam tempus est elit, at tristique
          risus volutpat at. Aliquam et turpis venenatis, hendrerit dui id,
          ullamcorper nunc.
        </div>
      )}

      {editable ? (
        <>
          {isEditing ? (
            <div className="d-flex flex-row-reverse" style={{ gap: 10 }}>
              <Button variant="success">Kaydet</Button>
              <Button variant="danger" onClick={() => setIsEditing(false)}>
                İptal
              </Button>
            </div>
          ) : (
            <>
              <button
                className="comment-editable-link"
                onClick={() => setIsEditing(true)}
              >
                Düzenle
              </button>
              <span>|</span>
              <button
                className="comment-editable-link"
                onClick={() => setDeleteModalShow(true)}
              >
                Sil
              </button>
            </>
          )}
        </>
      ) : null}

      <Modal show={deleteModalShow}>
        <Modal.Header>
          <div
            className="modal-close-button"
            onClick={() => setDeleteModalShow(false)}
          >
            <img
              src="images/Modal-Close-Button.png"
              data-dismiss="modal"
              aria-label="Close"
              alt=""
            />
          </div>
          <div className="model-rozet-header">
            <h5>Bu yorumu silmek istediğine emin misin?</h5>
          </div>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <div className="model-cta-button d-flex justify-content-center align-items-center">
            <span style={{ fontSize: 20 }}>Sil</span>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
