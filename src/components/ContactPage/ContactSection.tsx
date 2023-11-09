import { icon_1_1, icon_2_2, icon_3_3, icon_4_4 } from "../../assets/img"
import { address, contactEmail, phoneNumber } from "../../constants"
import { customLink } from "../Footer"

export const ContactSection = () => {
    return (
        <div>
            <section className="section contacts">
                <div className="container">
                    <div className="row offset-margin">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src={icon_1_1} alt="img" />
                                    <svg className="icon icon-item__icon icon--red">
                                        <use xlinkHref="#location-pin"></use>
                                    </svg>
                                </div>
                                <div className="icon-item__text">
                                    <p>Dirección: {address}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src={icon_2_2} alt="img" />
                                    <svg className="icon icon-item__icon icon--orange">
                                        <use xlinkHref="#phone-call"></use>
                                    </svg>
                                </div>
                                <div className="icon-item__text">
                                    <p>Teléfono: <a className="icon-item__link" href={`tel:${phoneNumber}`}><br />{phoneNumber}</a></p>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src={icon_3_3} alt="img" />
                                    <svg className="icon icon-item__icon icon--green">
                                        <use xlinkHref="#envelope"></use>
                                    </svg>
                                </div>
                                <div className="icon-item__text">
                                    <p>Email: <a className="icon-item__link" href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src={icon_4_4} alt="img" />
                                    <svg className="icon icon-item__icon icon--blue">
                                        <use xlinkHref="#share"></use>
                                    </svg>
                                </div>
                                <div className="icon-item__text">
                                    <ul className="footer-socials">
                                        <li className="footer-socials__item"><a className="footer-socials__link" target="_blank" href="https://www.facebook.com/ayudapueblosoriginarios"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                        <li className="footer-socials__item"><a className="footer-socials__link" target="_blank" href={customLink}><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                        <li className="footer-socials__item"><a className="footer-socials__link" target="_blank" href="https://www.instagram.com/ayudaapueblosoriginarios/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                    </ul>
                                    <ul className="socials">
                                        <li className="socials__item"><a target='_blank' className="socials__link" href="https://www.instagram.com/ayudaapueblosoriginarios/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li className="socials__item"><a target='_blank' className="socials__link socials__link--active" href={customLink}><i className="fa fa-whatsapp" aria-hidden="true"></i></a></li>
                                        <li className="socials__item"><a target='_blank' className="socials__link" href="https://www.facebook.com/ayudapueblosoriginarios"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
