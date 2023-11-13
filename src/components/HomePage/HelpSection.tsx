import { Link } from "react-router-dom"
import { CausesList } from "./CausesList"


export const HelpSection = () => {
    return (
        <div>
            <section className="section causes">
                {/* <img className="causes__bg" src={causes_img} alt="img" /> */}
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-xl-5">
                            <div className="heading heading--primary"><span className="heading__pre-title">¿Qué Hacemos?</span>
                                <h2 className="heading__title"><span>Ayuda a</span> <span>Pueblos</span></h2>
                                <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p>
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 d-none d-xl-block">
                            <div className="row offset-margin">
                                <div className="col-6">
                                    <div className="counter-item counter-item--style-3">
                                        <div className="counter-item__top">
                                            <h6 className="counter-item__title">Gente a la que ayudamos en 2018</h6>
                                        </div>
                                        <div className="counter-item__lower"><span className="js-counter">20</span><span>k</span></div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="counter-item counter-item--style-3">
                                        <div className="counter-item__top">
                                            <h6 className="counter-item__title">Dinero Recaudado</h6>
                                        </div>
                                        <div className="counter-item__lower"><span className="js-counter">5</span><span>m</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-end margin-bottom">
                        <div className="col-sm-6"><Link className="button button--primary" to="/nuestras-causas">Nuestras Causas</Link></div>
                        <div className="col-sm-6 d-flex justify-content-sm-end">
                            <div className="slider__nav causes-slider__nav">
                                <div className="slider__arrows">
                                    <div className="slider__prev"><i className="fa fa-chevron-left" aria-hidden="true"></i>
                                    </div>
                                    <div className="slider__next"><i className="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CausesList />
            </section>
        </div>
    )
}
