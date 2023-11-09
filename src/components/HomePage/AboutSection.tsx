import { Link } from 'react-router-dom';
import { about_2, about_layout, about_layout_reverse, about_us } from '../../assets/img'


type AboutSectionType = {
    inverted?: boolean;
}

export const AboutSection = ({ inverted = false }: AboutSectionType) => {
    return (
        <div>
            {(!inverted) ?
                <section className="section about-us" id="about">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="heading heading--primary"><span className="heading__pre-title">Sobre Nosotros</span>
                                    <h2 className="heading__title"><span>Ayudar es </span> <span>Nuestra Prioridad</span></h2>
                                </div>
                                <p><strong>Thresher shark rudd African lungfish silverside, Red salmon rockfish grunion, garpike zebra danio king-of-the-salmon banjo catfish."</strong></p>
                                <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch</p>
                                <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet</p><a className="button button--primary" href="about.html">More About</a>
                            </div>
                            <div className="col-lg-6 col-xl-5 offset-xl-1">
                                <div className="info-box"><img className="img--layout" src={about_layout} alt="img" />
                                    <img className="img--bg" src={about_us} alt="img" />
                                    <h4 className="info-box__title">We are Awesome Volounteer Team</h4>
                                    <p>Gray eel-catfish longnose whiptail catfish smalleye squaretail queen danio unicorn fish shortnose greeneye fusilier fish silver carp nibbler sharksucker tench lookdown catfish</p>
                                    <Link className="info-box__link" to="/voluntarios">Volvete Voluntario</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="section about-us">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-xl-5">
                                <div className="img-box"><img className="img--layout" src={about_layout_reverse} alt="img" />
                                    <div className="img-box__img"><img className="img--bg" src={about_2} alt="img" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-6 offset-xl-1">
                                <div className="heading heading--primary"><span className="heading__pre-title">Sobre Nosotros</span>
                                    <h2 className="heading__title"><span>Ayudar es</span> <span>Nuestra Prioridad</span></h2>
                                </div>
                                <p><strong>Thresher shark rudd African lungfish silverside, Red salmon rockfish grunion, garpike zebra danio king-of-the-salmon banjo catfish."</strong></p>
                                <p>Sea chub demoiselle whalefish zebra lionfish mud cat pelican eel. Minnow snoek icefish velvet-belly shark, California halibut round stingray northern sea robin. Southern grayling trout-perch</p>
                                <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish basslet. Buri chimaera triplespine northern sea robin zingel lancetfish galjoen fish, catla wolffish, mosshead warbonnet</p>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </div>
    )
}
