import { EventComponent } from "../components/EventsPage/EventComponent"
import { event_1, events, events_inner_bg } from '../assets/img'
import { MainPicture } from "../components/MainPicture"
import { PaginationSection } from "../components/EventsPage/PaginationSection"

export const EventsPage = () => {

    //TODO: Cambiar estados para la paginacion de eventos...
    //Clase a modificar con el estado: pagination__item--active
    return (
        <div className="page-wrapper">
            <main className="main">
                <section className="promo-primary">
                    <MainPicture title="Eventos" imgURL={events} />
                </section>
                <section className="section events-inner"><img className="events-inner__bg" src={events_inner_bg} alt="img" />
                    <div className="container">
                        <div className="row offset-30">

                            <EventComponent
                                date="30"
                                month={"Octubre"}
                                description="Esta es la descripcion de mi primer evento"
                                title="Mi primer evento"
                                imgURL={event_1}
                            />
                            <EventComponent
                                date="30"
                                month={"Octubre"}
                                description="Esta es la descripcion de mi primer evento"
                                title="Mi primer evento"
                                imgURL={event_1}
                            />
                            <EventComponent
                                date="30"
                                month={"Octubre"}
                                description="Esta es la descripcion de mi primer evento"
                                title="Mi primer evento"
                                imgURL={event_1}
                            />
                            <EventComponent
                                date="30"
                                month={"Octubre"}
                                description="Esta es la descripcion de mi primer evento"
                                title="Mi primer evento"
                                imgURL={event_1}
                            />
                            <EventComponent
                                date="30"
                                month={"Octubre"}
                                description="Esta es la descripcion de mi primer evento"
                                title="Mi primer evento"
                                imgURL={event_1}
                            />
                            <EventComponent
                                date="30"
                                month={"Octubre"}
                                description="Esta es la descripcion de mi primer evento"
                                title="Mi primer evento"
                                imgURL={event_1}
                            />
                            <EventComponent
                                date="30"
                                month={"Octubre"}
                                description="Esta es la descripcion de mi primer evento"
                                title="Mi primer evento"
                                imgURL={event_1}
                            />
                            <EventComponent
                                date="30"
                                month={"Octubre"}
                                description="Esta es la descripcion de mi primer evento"
                                title="Mi primer evento"
                                imgURL={event_1}
                            />


                        </div>
                        <PaginationSection />
                    </div>
                </section>

            </main>

        </div>
    )
}
