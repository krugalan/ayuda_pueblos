import { useState } from 'react'

export const useModal = () => {
    let [activeModal, setActiveModal] = useState(false);

    const openModal = () => {
        setActiveModal(true);
    }
    const closeModal = () => {
        setActiveModal(false);
    }

    return {
        openModal,
        activeModal,
        closeModal
    }
}
