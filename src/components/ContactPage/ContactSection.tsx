
export const ContactSection = () => {
    return (
        <div>
            <section className="section contacts">
                <div className="container">
                    <div className="row offset-margin">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_1-1.png" alt="img" />
                                    <svg className="icon icon-item__icon icon--red">
                                        <use xlinkHref="#location-pin"></use>
                                    </svg>
                                </div>
                                <div className="icon-item__text">
                                    <p>Adress: Elliott Ave, Parkville VIC 3052, Melbourne Canada</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_2-2.png" alt="img" />
                                    <svg className="icon icon-item__icon icon--orange">
                                        <use xlinkHref="#phone-call"></use>
                                    </svg>
                                </div>
                                <div className="icon-item__text">
                                    <p>Phone: <a className="icon-item__link" href="tel:+31859644725">+ 31 85 964 47 25</a> <a className="icon-item__link" href="tel:+31859644725">+ 31 85 964 47 25</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_3-3.png" alt="img" />
                                    <svg className="icon icon-item__icon icon--green">
                                        <use xlinkHref="#envelope"></use>
                                    </svg>
                                </div>
                                <div className="icon-item__text">
                                    <p>Email: <a className="icon-item__link" href="mailto:support@helpo.org">support@helpo.org</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_4-4.png" alt="img" />
                                    <svg className="icon icon-item__icon icon--blue">
                                        <use xlinkHref="#share"></use>
                                    </svg>
                                </div>
                                <div className="icon-item__text">
                                    <ul className="socials">
                                        <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                        <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                                        <li className="socials__item"><a className="socials__link socials__link--active" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                        <li className="socials__item"><a className="socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
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
