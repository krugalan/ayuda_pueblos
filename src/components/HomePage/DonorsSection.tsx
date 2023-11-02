import React from 'react'

export const DonorsSection = () => {
    return (
        <div>
            <section className="section donors no-padding-top">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--primary heading--center"><span className="heading__pre-title">Donors</span>
                                <h2 className="heading__title no-margin-bottom"><span>Who Help</span> <span>Us</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="slider-holder">
                                <div className="donors-slider donors-slider--style-1">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
