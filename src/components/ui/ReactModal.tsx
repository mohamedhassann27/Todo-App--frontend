import {type ReactNode} from "react";
import Modal from "react-modal";

import type { ITodo } from "../../interfaces";

interface IProps{
  modalIsOpen: boolean,
  closeModal: ()=>void
  children: ReactNode
}
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%,-50%)",
  },
};

function ReactModal({modalIsOpen, closeModal, children}: IProps) {

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>
    </div>
  );
}

export default ReactModal;
