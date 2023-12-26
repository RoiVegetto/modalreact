import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from './lib/modal';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <button onClick={openModal}>Ouvrir la Modal</button>
      <Modal show={showModal} onClose={closeModal}></Modal>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
