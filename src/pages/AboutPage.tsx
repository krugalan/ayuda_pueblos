import React from 'react'

export const AboutPage = () => {
    return (<>
        <main className="main">
            <section className="promo-primary">
                <picture>
                    <source srcSet="img/about.jpg" media="(min-width: 992px)" /><img className="img--bg" src="img/about.jpg"
                        alt="img" />
                </picture>
                <div className="promo-primary__description"> <span>Donaciones</span></div>
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <div className="align-container">
                                <div className="align-container__item"><span className="promo-primary__pre-title">Helpo</span>
                                    <h1 className="promo-primary__title"><span>About</span><br /><span>Organization</span>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about-us">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-xl-5">
                            <div className="img-box"><img className="img--layout" src="img/about_layout-reverse.png"
                                alt="img" />
                                <div className="img-box__img"><img className="img--bg" src="img/about_2.png" alt="img" /></div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6 offset-xl-1">
                            <div className="heading heading--primary"><span className="heading__pre-title">Sobre Nosotros</span>
                                <h2 className="heading__title"><span>Ayudar es Nuestro</span>
                                    <span>Mayor Logro</span>
                                </h2>
                            </div>
                            <p>
                                <strong>Somos una O.N.G </strong>(Organización No Gubernamental), apolítica,
                                sin fines de lucro y <strong>nuestra finalidad es mejorar la calidad
                                    de vida de los pueblos originarios</strong>, creando conciencia de educación,
                                trabajo, salud y bienestar para todas sus comunidades.
                            </p>


                            <p><strong>Cada donación que es recibida se entrega en mano en cada viaje que
                                realizamos</strong>,
                                esta hermosa causa lleva 13 años en forma continua.
                                Este camino comenzó en el año 2007 con la primera escuelita rural apadrinada en Ing.
                                Juarez (Formosa).
                                Al año 2020 son 16 escuelas y comunidades apadrinadas.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section about-us about-us--style-2 no-padding-top">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <h4 className="about-us__subtitle">Trabajamos para ayudar a mejorar las vidas
                                de los pueblos originarios.</h4>
                            <p>
                                Fomentamos el amor al prójimo en base a las escuelas rurales y la familia como primer
                                eslabón, en cada viaje que realizamos como voluntarios, <strong>nuestro mensaje es
                                    respetar siempre sus raíces, orígenes y culturas </strong>,
                                aprendiendo de ellos mismos, brindándoles herramientas para su propio sustento, cuidado
                                del medio ambiente y su hábitat diario.
                                Ellos nos siguen enseñando que <strong>”Lo poco es mucho y ayudar al prójimo, significa
                                    ayudarse a uno mismo”.</strong>
                            </p>
                            <p><strong>Lo más valioso es seguir aprendiendo y respetando su diversidad cultural y
                                amor.</strong></p>
                        </div>
                        <div className="col-lg-6 col-xl-5 ">
                            <div className="about-us__text-aside">Nuestro Objetivo</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section video-block no-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="video-frame">
                                <img className="img--bg" src="img/video_frame.png" alt="frame" />
                                <a className="video-trigger video-frame__trigger"
                                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk">
                                    <span className="video-frame__icon">
                                        <i className="fa fa-play" aria-hidden="true"></i>
                                    </span>
                                    <span className="video-frame__text">Mira nuestro video</span>
                                </a>
                                <img className="video-frame__img-layout" src="img/video_frame-layout.png" alt="layout" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section statistics no-padding-top">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--primary heading--center">
                                <span className="heading__pre-title">
                                    ¿Qué logramos?
                                </span>
                                <h2 className="heading__title no-margin-bottom">
                                    <span>Nuestras</span>
                                    <span>Estadísticas</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row offset-margin">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src="img/icon_1.png"
                                    alt="img" /><span className="js-counter">16</span></div>
                                <div className="icon-item__text">
                                    <p>Años de desarrollo</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src="img/icon_2.png"
                                    alt="img" /><span className="js-counter">+16</span></div>
                                <div className="icon-item__text">
                                    <p>Comunidades Apadrinadas</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src="img/icon_3.png"
                                    alt="img" /><span className="js-counter">200 </span><span>+</span></div>
                                <div className="icon-item__text">
                                    <p>Personas ayudadas</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-item">
                                <div className="icon-item__img"><img className="img--layout" src="img/icon_4.png"
                                    alt="img" /><span className="js-counter">5 </span><span>m</span></div>
                                <div className="icon-item__text">
                                    <p>Dinero recaudado </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section team">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="heading heading--primary"><span className="heading__pre-title">Equipo</span>
                                <h2 className="heading__title no-margin-bottom"><span>Conoce a </span> <span>nuestro
                                    equipo</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-bottom">
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="team-item team-item--rounded">
                                <ul className="team-item__socials">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                                <div className="team-item__img-holder"><img className="img--layout" src="img/team_1.png"
                                    alt="layout" />
                                    <div className="team-item__img"><img className="img--bg" src="img/team_1.jpg"
                                        alt="teammate" /></div>
                                </div>
                                <div className="team-item__description">
                                    <div className="team-item__name">Chris Patt</div>
                                    <div className="team-item__position">Ceo/Founder</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="team-item team-item--rounded">
                                <ul className="team-item__socials">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                                <div className="team-item__img-holder"><img className="img--layout" src="img/team_2.png"
                                    alt="layout" />
                                    <div className="team-item__img"><img className="img--bg" src="img/team_2.jpg"
                                        alt="teammate" /></div>
                                </div>
                                <div className="team-item__description">
                                    <div className="team-item__name">Mike Carter</div>
                                    <div className="team-item__position">Manager</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="team-item team-item--rounded">
                                <ul className="team-item__socials">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                                <div className="team-item__img-holder"><img className="img--layout" src="img/team_3.png"
                                    alt="layout" />
                                    <div className="team-item__img"><img className="img--bg" src="img/team_3.jpg"
                                        alt="teammate" /></div>
                                </div>
                                <div className="team-item__description">
                                    <div className="team-item__name">Bella Crusio</div>
                                    <div className="team-item__position">Leader</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="team-item team-item--rounded">
                                <ul className="team-item__socials">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                                <div className="team-item__img-holder"><img className="img--layout" src="img/team_4.png"
                                    alt="layout" />
                                    <div className="team-item__img"><img className="img--bg" src="img/team_4.jpg"
                                        alt="teammate" /></div>
                                </div>
                                <div className="team-item__description">
                                    <div className="team-item__name">Cesario Lee</div>
                                    <div className="team-item__position">Founder</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="team-item team-item--rounded">
                                <ul className="team-item__socials">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                                <div className="team-item__img-holder"><img className="img--layout" src="img/team_5.png"
                                    alt="layout" />
                                    <div className="team-item__img"><img className="img--bg" src="img/team_5.jpg"
                                        alt="teammate" /></div>
                                </div>
                                <div className="team-item__description">
                                    <div className="team-item__name">Ched Kurtsovski</div>
                                    <div className="team-item__position">Volunteer</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="team-item team-item--rounded">
                                <ul className="team-item__socials">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                                <div className="team-item__img-holder"><img className="img--layout" src="img/team_6.png"
                                    alt="layout" />
                                    <div className="team-item__img"><img className="img--bg" src="img/team_6.jpg"
                                        alt="teammate" /></div>
                                </div>
                                <div className="team-item__description">
                                    <div className="team-item__name">Lisa Chester</div>
                                    <div className="team-item__position">Volunteer</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="team-item team-item--rounded">
                                <ul className="team-item__socials">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                                <div className="team-item__img-holder"><img className="img--layout" src="img/team_7.png"
                                    alt="layout" />
                                    <div className="team-item__img"><img className="img--bg" src="img/team_7.jpg"
                                        alt="teammate" /></div>
                                </div>
                                <div className="team-item__description">
                                    <div className="team-item__name">Aisha Ten</div>
                                    <div className="team-item__position">CEO</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="team-item team-item--rounded">
                                <ul className="team-item__socials">
                                    <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                                </ul>
                                <div className="team-item__img-holder"><img className="img--layout" src="img/team_8.png"
                                    alt="layout" />
                                    <div className="team-item__img"><img className="img--bg" src="img/team_8.jpg"
                                        alt="teammate" /></div>
                                </div>
                                <div className="team-item__description">
                                    <div className="team-item__name">Jack Blumberg</div>
                                    <div className="team-item__position">Volunteer</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center"><a className="button button--primary" href="volunteer.html">Sumate
                            a nuestra causa</a></div>
                    </div>
                </div>
            </section>

            <section className="section donors">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--primary heading--center"><span
                                className="heading__pre-title">Donantes</span>
                                <h2 className="heading__title no-margin-bottom"><span>Quienes Confían en</span>
                                    <span>Nosotros</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-holder">
                                <div className="donors-slider donors-slider--style-1">
                                    <div className="donors-slider__item">
                                        <div className="donors-slider__img"><img src="img/donor_1.png" alt="donor" /></div>
                                    </div>
                                    <div className="donors-slider__item">
                                        <div className="donors-slider__img"><img src="img/donor_2.png" alt="donor" /></div>
                                    </div>
                                    <div className="donors-slider__item">
                                        <div className="donors-slider__img"><img src="img/donor_3.png" alt="donor" /></div>
                                    </div>
                                    <div className="donors-slider__item">
                                        <div className="donors-slider__img"><img src="img/donor_4.png" alt="donor" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bottom-background background--brown">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bottom-background__img"><img src="img/bottom-bg.png" alt="img" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </main >


    </>
    )
}
