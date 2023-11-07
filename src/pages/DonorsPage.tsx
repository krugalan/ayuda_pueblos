
import { PageFiller } from '../components/PageFiller'
import { MainPicture } from '../components/MainPicture'
import { donors } from '../assets/img'

export const DonorsPage = () => {
    return (
        <div>
            <div className="page-wrapper">

                <main className="main">
                    <section className="promo-primary">
                        <MainPicture imgURL={donors} title='Donantes y' title2='Colaboradores' />
                    </section>
                    <section className="section donors-inner"><img className="donors-inner__bg" src="../src/assets/img/donors_inner.png" alt="img" />
                        <div className="container">
                            <div className="row margin-bottom">
                                <div className="col-12">
                                    <div className="heading heading--primary heading--center"><span className="heading__pre-title">Donantes</span>
                                        <h2 className="heading__title"><span>Quiénes nos</span> <span>Ayudan</span></h2>
                                        <p>Tackling the necessity of safe water for all requires a cooperative and worldwide effort. Many philanthropists have chosen to take action in support of safe water by donating in support of One Drop's projects.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-holder">
                                        <div className="donors-slider donors-slider--style-2 offset-margin">
                                            <div className="donors-slider__item">
                                                <div className="donors-slider__img"><img src="../src/assets/img/donor_1.png" alt="donor" /></div>
                                            </div>
                                            <div className="donors-slider__item">
                                                <div className="donors-slider__img"><img src="../src/assets/img/donor_2.png" alt="donor" /></div>
                                            </div>
                                            <div className="donors-slider__item">
                                                <div className="donors-slider__img"><img src="../src/assets/img/donor_3.png" alt="donor" /></div>
                                            </div>
                                            <div className="donors-slider__item">
                                                <div className="donors-slider__img"><img src="../src/assets/img/donor_4.png" alt="donor" /></div>
                                            </div>
                                            <div className="donors-slider__item">
                                                <div className="donors-slider__img"><img src="../src/assets/img/donor_5.png" alt="donor" /></div>
                                            </div>
                                            <div className="donors-slider__item">
                                                <div className="donors-slider__img"><img src="../src/assets/img/donor_6.png" alt="donor" /></div>
                                            </div>
                                            <div className="donors-slider__item">
                                                <div className="donors-slider__img"><img src="../src/assets/img/donor_7.png" alt="donor" /></div>
                                            </div>
                                            <div className="donors-slider__item">
                                                <div className="donors-slider__img"><img src="../src/assets/img/donor_8.png" alt="donor" /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ul className="donors-list">
                                        {/* <li className="donors-list__item"><a className="donors-list__link" href="#">André Saint-Jacques</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Daniel Lamarre</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Outbox Technology</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Tata Trusts</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Antonio Esfandiari</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Fondation Daniel Lamarre</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Paul G. Desmarais</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">The Estate of Michael Jackson</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Bearfoot Bistro</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Gianni Kovacevic</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Peter Lik Fine Art</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Tix4Tonight. LLC</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">The Bennett Family</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Global affairs Canada</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Richard MacDonald Studio</a></li>
                                        <li className="donors-list__item"><a className="donors-list__link" href="#">Treasure Island</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section info no-padding-top">
                        <div className="container">
                            <div className="row align-items-start margin-bottom">
                                <div className="col-xl-5">
                                    <div className="heading heading--primary"><span className="heading__pre-title">Con quiénes trabajamos</span>
                                        <h2 className="heading__title"><span>Nuestros</span> <span>Donantes y Colaboradores</span></h2>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 offset-xl-1">
                                    {/* <div className="row offset-margin">
                                        <div className="col-12 col-md-6 text-md-left text-center">
                                            <div className="counter-item counter-item--style-3">
                                                <div className="counter-item__top">
                                                    <h6 className="counter-item__title">A cuántas personas ayudamos en el 2018</h6>
                                                </div>
                                                <div className="counter-item__lower"><span className="js-counter">200</span><span>k</span></div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 text-md-left text-center">
                                            <div className="counter-item counter-item--style-3">
                                                <div className="counter-item__top">
                                                    <h6 className="counter-item__title">Dinero Recaudado</h6>
                                                </div>
                                                <div className="counter-item__lower"><span className="js-counter">5</span><span>m</span></div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="info__img"><img className="img--layout" src="../src/assets/img/info_img-layout.png" alt="img" /><img src="../src/assets/img/info_img.png" alt="img" /></div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section no-padding-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="info-banner"><img className="img--layout" src="../src/assets/img/info-banner_layout.png" alt="img" />
                                        <div className="row margin-bottom">
                                            <div className="col-12">
                                                <div className="heading heading--primary heading--center">
                                                    <h2 className="heading__title no-margin-bottom"><span>Founding</span> <span>Partner</span></h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="info-banner__img"><img src="../src/assets/img/info-banner_img.png" alt="img" /></div>
                                            </div>
                                            <div className="col-lg-6">
                                                <p><strong>Thresher shark rudd African lungfish silverside, Red salmon rockfish grunion, garpike zebra danio king-of-the-salmon banjo catfish."</strong></p>
                                                <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch</p>
                                                <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet						</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section text-section text-section--style-2"><img className="text-section__bg-left" src="../src/assets/img/text-section_left.png" alt="img" /><img className="text-section__bg-right" src="../src/assets/img/text-section_right.png" alt="img" />
                        <div className="container">
                            <div className="row">
                                <div className="col-12 text-center">
                                    <h2 className="text-section__heading">Ayuda a Pueblos</h2>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 offset-lg-4 col-xl-7 offset-xl-4">
                                    <h3 className="text-section__title">To all our donors, <br />partners and volunteers</h3>
                                    <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <div className=" row no-gutters projects-masonry">

                <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
                    <div className="projects-masonry__img"></div>
                    <div className="projects-masonry__text" >
                        <div className="projects-masonry__inner"><span className="projects-masonry__badge">Medicine</span>
                            <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-1 projects-masonry__item--primary">
                    <div className="projects-masonry__img">
                        <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Food</span>
                            <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
                    <div className="projects-masonry__img">
                        <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Education</span>
                            <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-8 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--horizontal">
                    <div className="projects-masonry__img"></div>
                    <div className="projects-masonry__text" >
                        <div className="projects-masonry__inner"><span className="projects-masonry__badge" >Education</span>
                            <h3 className="projects-masonry__title"> <a href="cause-details.html">Help for Children of the East</a></h3>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-4 projects-masonry__item projects-masonry__item--height-2 projects-masonry__item--primary">
                    <div className="projects-masonry__img">
                        <div className="projects-masonry__inner"><span className="projects-masonry__badge">Medicine</span>
                            <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp</p>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
