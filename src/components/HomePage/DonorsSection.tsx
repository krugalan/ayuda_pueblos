import { donor_1, donor_2, donor_3, donor_4 } from "../../assets/img"


export const DonorsSection = () => {
    return (
        <div>
            <section className="section donors no-padding-top">
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--primary heading--center"><span className="heading__pre-title">Donantes</span>
                                <h2 className="heading__title no-margin-bottom"><span>Quiénes nos</span> <span>Ayudan</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 ">
                            <div className="donors-slider__img " ><img src={donor_1} alt="donor" /></div>
                            <div className="donors-slider__img "><img src={donor_2} alt="donor" /></div>
                            <div className="donors-slider__img "><img src={donor_3} alt="donor" /></div>
                            <div className="donors-slider__img "><img src={donor_4} alt="donor" /></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
