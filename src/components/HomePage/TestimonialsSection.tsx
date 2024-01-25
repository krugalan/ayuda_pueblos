import { Link } from "react-router-dom"
import { EventList } from "./EventList"
import { TestimonialsList } from "./TestimonialsList"
import { events_bg, text_section } from "../../assets/img"


export const TestimonialsSection = () => {
    return (
        <div>
            <section className="section events"><img className="events__bg" src={events_bg} alt="img" />
                <div className="container">
                    <div className="row margin-bottom">
                        <div className="col-12">
                            <div className="heading heading--primary heading--center"><span className="heading__pre-title">Eventos</span>
                                <h2 className="heading__title"><span>Ayudando a</span> <span>los Pueblos</span></h2>
                                <p className="no-margin-bottom">Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">

                        <EventList />
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <Link className="button button--primary" to="/eventos">Ver nuestros eventos</Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section text-section"><img className="text-section__bg" src={text_section} alt="img" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-4 col-xl-7 offset-xl-4">
                            <h3 className="text-section__title">Delivering help and hope <br />to children through sponsorship.</h3>
                            <p>Sharksucker sea toad candiru rocket danio tilefish stingray deepwater stingray Sacramento splittail, Canthigaster rostrata. Midshipman dartfish Modoc sucker, yellowtail kingfish</p>
                            <Link className="button button--primary" to="/voluntarios">Volvete Voluntario</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ----------------------------------------------------------------------------------------- */}

            <section className="section testimonials--style-2">
                <div className="testimonials--style-2__bg jarallax__background-image">

                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="heading heading--primary"><span className="heading__pre-title">Testimonials</span>
                                <h2 className="heading__title"><span>¿Qué Dicen</span><br /><span>De Nosotros?</span></h2>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="testimonials-slider testimonials-slider--style-2">
                                <TestimonialsList />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}
