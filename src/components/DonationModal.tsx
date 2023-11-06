import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useModal } from '../hooks/useModal';

type DonationModalType = () => {
    showModal: boolean;
    onHideModal: () => void
}

export const DonationModal = ({ showModal, onHideModal }: DonationModalType) => {

    const { closeModal } = useModal();
    return (
        <Modal
            onHide={onHideModal}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={showModal}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Datos para transferir
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                {/* <Button onClick={closeModal}>Close</Button> */}
            </Modal.Footer>
        </Modal>
    );
}


