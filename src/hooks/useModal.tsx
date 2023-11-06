import { useState } from 'react'

export const useModal = () => {
    let [activeModal, setActiveModal] = useState(false);

    const openModal = () => {
        setActiveModal(true);
        console.log(activeModal);
    }
    const closeModal = () => {
        setActiveModal(false);
        console.log(activeModal);

    }

    return {
        openModal,
        activeModal,
        closeModal
    }
}
