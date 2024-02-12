import Modal from 'react-bootstrap/Modal';
import { accountType, alias, bank } from '../constants';

type DonationModalType = {
    showModal: boolean;
    onHideModal: () => void
}

export const DonationModal = ({ showModal, onHideModal }: DonationModalType) => {

    return (
        <Modal
            onHide={onHideModal}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModal}
        >
            <Modal.Header closeButton>
                <h3 className='text-success text-center'  >
                    Colaborá con nosotros
                </h3>
              {/* <Modal.Title id="contained-modal-title-vcenter">
                </Modal.Title>*/ }
            </Modal.Header>
            <Modal.Body>
                <div className='text-center'>
                    <p>
                        <strong>Banco: </strong>{bank}
                        <br />
                        <strong>Alias: </strong>{alias}
                        <br />
                        <strong>Tipo de Cuenta: </strong>{accountType}
                    </p>
                    <p className='fs-4 text- fw-semibold'>
                        ASOCIACION CIVIL
                        <br />
                        AYUDA A PUEBLOS ORIGINALES
                        <br />
                        CUIT: 33-71666402-9
                    </p>
                </div>
            </Modal.Body>
        </Modal>
    );
}


