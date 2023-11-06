import React from 'react'

export const StatisticsSection = () => {
    return (
        <section className="section statistics no-padding-top">
            <div className="container">
                <div className="row margin-bottom">
                    <div className="col-12">
                        <div className="heading heading--primary heading--center"><span className="heading__pre-title">¿Qué logramos?</span>
                            <h2 className="heading__title no-margin-bottom"><span>Nuestras</span> <span>Estadísticas</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row offset-margin">
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-item">
                            <div className="icon-item__img">
                                <img className="img--layout" src="../src/assets/img/icon_1.png" alt="img" />
                                <span className="js-counter">20</span></div>
                            <div className="icon-item__text">
                                <p>Años de Experiencia</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-item">
                            <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_2.png" alt="img" />
                                <span className="js-counter">+20</span></div>
                            <div className="icon-item__text">
                                <p>Escuelas Construidas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-item">
                            <div className="icon-item__img">
                                <img className="img--layout" src="../src/assets/img/icon_3.png" alt="img" />
                                <span className="js-counter">+ 2000 </span>
                                {/* <span>+</span> */}
                            </div>
                            <div className="icon-item__text">
                                <p>Personas ayudadas</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                        <div className="icon-item">
                            <div className="icon-item__img"><img className="img--layout" src="../src/assets/img/icon_4.png" alt="img" />
                                <span className="js-counter">5 </span><span>m</span></div>
                            <div className="icon-item__text">
                                <p>Dinero Recaudado</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
