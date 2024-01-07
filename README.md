# modalreact

Une bibliothèque de composants modals React, facile à intégrer et personnalisable, créée avec create-react-app. Ce composant offre une manière simple et efficace de créer des modals pour vos applications React.

# Installation

Pour installer le composant, exécutez la commande suivante :

npm i @roivegetto/modalreact

# Utilisation

Pour utiliser le composant Modal, commencez par l'importer dans votre fichier de composant React :

import Modal from '@roivegetto/modalreact';

Ensuite, vous pouvez l'intégrer dans votre JSX comme suit :

<Modal show={this.state.showModal} onClose={this.handleClose}>
    {/* Contenu du modal ici */}
</Modal>

Assurez-vous de définir l'état showModal et la méthode handleClose dans votre composant parent pour contrôler l'affichage du modal.

# Props

Le composant Modal accepte les props suivantes :

show : Un booléen qui détermine si le modal est visible. (Requis)
onClose : Une fonction qui sera appelée pour fermer le modal. (Requis)
children : Les éléments ou le contenu à afficher à l'intérieur du modal. (Optionnel)

# Exemple d'Intégration

Voici un exemple simple montrant comment intégrer le composant Modal dans une application React.

import React, { useState } from 'react';
import Modal from '@roivegetto/modalreact';

const App = () => {
const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    return (
        <div>
            <button onClick={openModal}>Ouvrir le Modal</button>
            <Modal show={showModal} onClose={closeModal}>
                <h2>Titre du Modal</h2>
                <p>Contenu de votre modal ici...</p>
            </Modal>
        </div>
    );

}

export default App;
Dans cet exemple, un bouton est utilisé pour ouvrir le modal. L'état showModal est utilisé pour contrôler l'affichage du modal. La fonction closeModal est passée en tant que prop onClose pour fermer le modal.

Cet exemple donne un aperçu rapide de la manière d'intégrer et d'utiliser le composant Modal dans une application React.
