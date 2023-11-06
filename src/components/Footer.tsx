
import { Link } from 'react-router-dom'
import { contactEmail, phoneNumber } from '../constants'
import { bottom_bg, logo } from '../assets/img';
import { useModal } from '../hooks/useModal';
import { DonationModal } from './DonationModal';

const whatsappMessage = 'Hola Me gustaría recibir más información y de que formas se puede colaborar.';

const baseUrl = 'https://api.whatsapp.com/send/?phone=';

export const Footer = () => {

    const { openModal, closeModal, activeModal } = useModal();

    const customLink = baseUrl + phoneNumber + "&text=" + whatsappMessage + '&type=phone_number&app_absent=0';
    return (
        <div>
            <section className="bottom-background">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bottom-background__img"><img src={bottom_bg} alt="img" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="footer-logo">
                                <Link className="footer-logo__link" to="/">
                                    <img className="footer-logo__img" src={logo} alt="logo" />
                                </Link>
                            </div>
                            <ul className="footer-socials">
                                <li className="footer-socials__item"><a className="footer-socials__link" target="_blank" href="https://www.facebook.com/ayudapueblosoriginarios"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li className="footer-socials__item"><a className="footer-socials__link" target="_blank" href={customLink}><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                <li className="footer-socials__item"><a className="footer-socials__link" target="_blank" href="https://www.instagram.com/ayudaapueblosoriginarios/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h4 className="footer__title">Contacto</h4>
                            <div className="footer-contacts">
                                <p className="footer-contacts__address">Elliott Ave, Parkville VIC 3052, Melbourne Canada</p>
                                <p className="footer-contacts__phone">Phone: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a></p>
                                <p className="footer-contacts__mail">Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h4 className="footer__title">Menu & Links</h4>
                            <nav>
                                <ul className="footer-menu">
                                    <li className="footer-menu__item footer-menu__item--active"><Link className="footer-menu__link" to="/">Inicio</Link></li>
                                    <li className="footer-menu__item"><Link className="footer-menu__link" to="/Blog">Blog</Link></li>
                                    <li className="footer-menu__item"><Link className="footer-menu__link" to="/sobre-nosotros">Sobre Nosotros</Link></li>
                                    <li className="footer-menu__item"><Link className="footer-menu__link" to="/Contacto">Contacto</Link></li>
                                    <li className="footer-menu__item"><Link className="footer-menu__link" to="/nuestras-causas">Nuestras Causas</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <h4 className="footer__title">Donar</h4>
                            <p>Ayudanos a mejorar las vidas de los pueblos originarios!</p>
                            <button className="button footer__button button--filled" onClick={openModal}>Donar</button>
                        </div>
                    </div>
                    <div className="row align-items-baseline">
                        <div className="col-md-6">
                            <p className="footer-copyright">2023 Ayuda a Pueblos Originarios ©.</p>
                        </div>
                        {/* <div className="col-md-6">
                            <div className="footer-privacy"><a className="footer-privacy__link" href="#">Privacy Policy</a><span className="footer-privacy__divider">|</span><a className="footer-privacy__link" href="#">Term and Condision</a></div>
                        </div> */}
                    </div>
                </div>
                <DonationModal showModal={activeModal} onHideModal={closeModal} />
            </footer>
        </div>
    )
}
