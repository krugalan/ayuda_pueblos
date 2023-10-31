import React from 'react'
import { contactEmail, facebook, instagram, phoneNumber } from '../constants'
import { bottom_bg, img_box_1 } from '../assets/img'
import { Link } from 'react-router-dom'
export const Footer = () => {
    return (<>
        <section className="bottom-background background--brown">
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
                        <div className="footer-logo"><Link className="footer-logo__link" to="/">
                            <img className="footer-logo__img" src={img_box_1} alt="logo" /></Link></div>
                        <ul className="footer-socials">
                            <li className="footer-socials__item"><a className="footer-socials__link" href={facebook} target='_blank'><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                            <li className="footer-socials__item"><a className="footer-socials__link" href={`https://wa.me/${phoneNumber}`} target='_blank'><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                            <li className="footer-socials__item"><a className="footer-socials__link" href={instagram} target='_blank'><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h4 className="footer__title">Contacto</h4>
                        <div className="footer-contacts">
                            <p className="footer-contacts__address">Elliott Ave, Parkville VIC 3052, Melbourne Canada</p>
                            <p className="footer-contacts__phone">Phone: <a href={`https://wa.me/${phoneNumber}`} target='_blank'>{phoneNumber}</a></p>
                            <p className="footer-contacts__mail">Email: <a href={`mailto:${contactEmail}`} target='_blank'>{contactEmail}</a></p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h4 className="footer__title">Menu & Links</h4>
                        <nav>
                            <ul className="footer-menu">
                                <li className="footer-menu__item"><a className="footer-menu__link" href="index.html">Home</a></li>
                                <li className="footer-menu__item"><a className="footer-menu__link" href="#">Blog</a></li>
                                <li className="footer-menu__item footer-menu__item--active"><a className="footer-menu__link" href="about.html">About</a></li>
                                <li className="footer-menu__item"><a className="footer-menu__link" href="#">Contacts</a></li>
                                <li className="footer-menu__item"><a className="footer-menu__link" href="#">Pages</a></li>
                                <li className="footer-menu__item"><a className="footer-menu__link" href="#">Elements</a></li>
                                <li className="footer-menu__item"><a className="footer-menu__link" href="causes.html">Causes</a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <h4 className="footer__title">Donar</h4>
                        <p>Ayudanos a mejorar las vidas de los pueblos originarios!</p>

                        <a className="button footer__button button--filled" href="#">Ir a Donaciones</a>
                    </div>
                </div>
                <div className="row align-items-baseline">
                    <div className="col-md-6">
                        <p className="footer-copyright">2023 Ayuda a Pueblos Originarios ©.</p>
                    </div>
                    {/* <div className="col-md-6">
                        <div className="footer-privacy"><a className="footer-privacy__link" href="#">Política de Privacidad</a><span className="footer-privacy__divider">|</span><a className="footer-privacy__link" href="#">Term and Condision</a></div>
                    </div> */}
                </div>
            </div>
        </footer>
    </>
    )
}
