import { causes } from "../assets/img"
import { CauseComponentList } from "../components/CausesPage/CauseComponentList"
import { MainPicture } from "../components/MainPicture"



export const CausesPage = () => {


    return (
        <main className="main">
            <section className="promo-primary">
                <MainPicture imgURL={causes} title="Nuestras" title2="Causas" />
            </section>
            <section className="section causes-inner">
                <div className="container">
                    <div className="row offset-margin">
                        <CauseComponentList />

                        {/* <div className="col-md-6 col-lg-4">
                            <div className="causes-item causes-item--primary">
                                <div className="causes-item__body">
                                    <div className="causes-item__top">
                                        <h6 className="causes-item__title">
                                            <a href="cause-details.html">Health in other Countries</a></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail</p>
                                    </div>
                                    <div className="causes-item__img">
                                        <div className="causes-item__badge" >Medicine</div><img className="img--bg" src="img/causes_2.jpg" alt="img" />
                                    </div>
                                    <div className="causes-item__lower">
                                        <div className="progress-bar">
                                            <div className="progress-bar__inner">
                                                <div className="progress-bar__value">23%</div>
                                            </div>
                                        </div>
                                        <div className="causes-item__details-holder">
                                            <div className="causes-item__details-item"><span>Goal: </span><span>14 000$</span></div>
                                            <div className="causes-item__details-item text-right"><span>Pledged: </span><span>6 098$</span></div>
                                        </div>
                                    </div>
                                </div><a className="button causes-item__button button--primary" href="#">+ Donate</a>
                            </div>
                        </div> */}
                        {/* <div className="col-md-6 col-lg-4">
                            <div className="causes-item causes-item--primary">
                                <div className="causes-item__body">
                                    <div className="causes-item__top">
                                        <h6 className="causes-item__title"> <a href="cause-details.html">We Build and Create</a></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail</p>
                                    </div>
                                    <div className="causes-item__img">
                                        <div className="causes-item__badge">Education</div><img className="img--bg" src="img/causes_3.jpg" alt="img" />
                                    </div>
                                    <div className="causes-item__lower">
                                        <div className="progress-bar">
                                            <div className="progress-bar__inner" >
                                                <div className="progress-bar__value">51%</div>
                                            </div>
                                        </div>
                                        <div className="causes-item__details-holder">
                                            <div className="causes-item__details-item"><span>Goal: </span><span>150 000$</span></div>
                                            <div className="causes-item__details-item text-right"><span>Pledged: </span><span>76 500$</span></div>
                                        </div>
                                    </div>
                                </div><a className="button causes-item__button button--primary" href="#">+ Donate	</a>
                            </div>
                        </div> */}
                        {/* <div className="col-md-6 col-lg-4">
                            <div className="causes-item causes-item--primary">
                                <div className="causes-item__body">
                                    <div className="causes-item__top">
                                        <h6 className="causes-item__title"> <a href="cause-details.html">Healthy Food</a></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail</p>
                                    </div>
                                    <div className="causes-item__img">
                                        <div className="causes-item__badge" >Food</div><img className="img--bg" src="img/causes_4.jpg" alt="img" />
                                    </div>
                                    <div className="causes-item__lower">
                                        <div className="progress-bar">
                                            <div className="progress-bar__inner" >
                                                <div className="progress-bar__value">42%</div>
                                            </div>
                                        </div>
                                        <div className="causes-item__details-holder">
                                            <div className="causes-item__details-item"><span>Goal: </span><span>220 000$</span></div>
                                            <div className="causes-item__details-item text-right"><span>Pledged: </span><span>95 200$</span></div>
                                        </div>
                                    </div>
                                </div><a className="button causes-item__button button--primary" href="#">+ Donate	</a>
                            </div>
                        </div> */}
                        {/* <div className="col-md-6 col-lg-4">
                            <div className="causes-item causes-item--primary">
                                <div className="causes-item__body">
                                    <div className="causes-item__top">
                                        <h6 className="causes-item__title"> <a href="cause-details.html">Clean Water in India</a></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail</p>
                                    </div>
                                    <div className="causes-item__img">
                                        <div className="causes-item__badge" >Water Delivery</div><img className="img--bg" src="img/causes_5.jpg" alt="img" />
                                    </div>
                                    <div className="causes-item__lower">
                                        <div className="progress-bar">
                                            <div className="progress-bar__inner" >
                                                <div className="progress-bar__value">65%</div>
                                            </div>
                                        </div>
                                        <div className="causes-item__details-holder">
                                            <div className="causes-item__details-item"><span>Goal: </span><span>80 000$</span></div>
                                            <div className="causes-item__details-item text-right"><span>Pledged: </span><span>52 200$</span></div>
                                        </div>
                                    </div>
                                </div><a className="button causes-item__button button--primary" href="#">+ Donate</a>
                            </div>
                        </div> */}
                        {/* <div className="col-md-6 col-lg-4">
                            <div className="causes-item causes-item--primary">
                                <div className="causes-item__body">
                                    <div className="causes-item__top">
                                        <h6 className="causes-item__title"> <a href="cause-details.html">New Books for Children</a></h6>
                                        <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail</p>
                                    </div>
                                    <div className="causes-item__img">
                                        <div className="causes-item__badge" >Education</div><img className="img--bg" src="img/causes_6.jpg" alt="img" />
                                    </div>
                                    <div className="causes-item__lower">
                                        <div className="progress-bar">
                                            <div className="progress-bar__inner" >
                                                <div className="progress-bar__value">95%</div>
                                            </div>
                                        </div>
                                        <div className="causes-item__details-holder">
                                            <div className="causes-item__details-item"><span>Goal: </span><span>20 000$</span></div>
                                            <div className="causes-item__details-item text-right"><span>Pledged: </span><span>18 000$</span></div>
                                        </div>
                                    </div>
                                </div><a className="button causes-item__button button--primary" href="#">+ Donate</a>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <ul className="pagination">
                                <li className="pagination__item pagination__item--prev"><i className="fa fa-angle-left" aria-hidden="true"></i><span>Back</span>
                                </li>
                                <li className="pagination__item"><span>1</span></li>
                                <li className="pagination__item pagination__item--active"><span>2</span></li>
                                <li className="pagination__item"><span>3</span></li>
                                <li className="pagination__item"><span>4</span></li>
                                <li className="pagination__item"><span>5</span></li>
                                <li className="pagination__item pagination__item--disabled">...</li>
                                <li className="pagination__item"><span>12</span></li>
                                <li className="pagination__item pagination__item--next"><span>Next</span><i className="fa fa-angle-right" aria-hidden="true"></i>
                                </li>
                            </ul>
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
        </main>
    )
}
