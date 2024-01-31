import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal'
import { DonationModal } from '../DonationModal';

type CauseType = {
    title: string;
    description: string;
    financialGoal: string;
    pledged: string;
    imgURL: string;
}

// const convertText = (value: string) => {
//     if (value.contains(" ")) {
//         return value.replace(" ", "-");
//     }

// }

export const Cause = ({ title, description, financialGoal, pledged, imgURL }: CauseType) => {

    const { openModal, activeModal, closeModal } = useModal();


    return (
        <div className="causes-slider__item">
            <div className="causes-item causes-item--primary">
                <div className="causes-item__body">
                    <div className="causes-item__top">
                        <h6 className="causes-item__title">
                            <Link to={`/nuestras-causas/:${title}`}>{title}</Link></h6>
                        <p>{description}</p>
                    </div>
                    <div className="causes-item__img">
                        <div className="causes-item__badge" >{title}</div>
                        <img className="img--bg" src={imgURL} alt="img" />
                    </div>
                    <div className="causes-item__lower">
                        {/* <div className="progress-bar">
                            <div className="progress-bar__inner" >
                                <div className="progress-bar__value">78%</div>
                            </div>
                        </div> */}
                        <div className="causes-item__details-holder">
                            <div className="causes-item__details-item"><span>Obtenido: </span><span>{financialGoal}$</span></div>
                            <div className="causes-item__details-item text-right"><span>Objetivo Esperado: </span><span>{pledged}$</span></div>
                        </div>
                    </div>
                </div>
                <button className="button causes-item__button button--primary" onClick={openModal}>+ Donar</button>
                <DonationModal showModal={activeModal} onHideModal={closeModal} />
            </div>
        </div>
    )
}
