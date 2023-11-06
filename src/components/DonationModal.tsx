import React from 'react'
import { useModal } from '../hooks/useModal'

export const DonationModal = () => {

    const { closeModal, activeModal } = useModal();
    console.log(activeModal)
    return (<>
        {(activeModal) ?

            <div>
                <div className="modal-dialog modal-dialog-centered bg-primary px-4 pt-0">
                    <h2>
                        Datos de donacion
                    </h2>
                    <button
                        className="button button--squared border border-0"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                </div>
            </div>
            :
            <div />
        }
    </>
    )
}
