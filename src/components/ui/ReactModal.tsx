// import {type ReactNode} from "react";
// import Modal from "react-modal";

// import type { ITodo } from "../../interfaces";

// interface IProps{
//   modalIsOpen: boolean,
//   closeModal: ()=>void
//   children: ReactNode
// }
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%,-50%)",
//   },
// };

// function ReactModal({modalIsOpen, closeModal, children}: IProps) {

//   return (
//     <div>
//       {/* <button onClick={openModal}>Open Modal</button> */}
//         <Modal
//             isOpen={modalIsOpen}
//             onRequestClose={closeModal}
//             style={customStyles}
//             contentLabel="Example Modal"
//         >
//             {children}
//         </Modal>
//     </div>
//   );
// }

// export default ReactModal;





// -----------------------Update UI only with claud-----------------------



import type { ReactNode } from 'react';
import Modal from 'react-modal';

interface IProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  children: ReactNode;
}

const customStyles= {
  overlay: {
    backdropFilter: 'blur(1px)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    minWidth: '90vw',
    maxHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}


function ReactModal({ modalIsOpen, closeModal, children }: IProps) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      // closeTimeoutMS={200}
      className="animate-in fade-in zoom-in-95 duration-200"
    >
      {children}
    </Modal>
  );
}

export default ReactModal;