import React from 'react'
import { PageFiller } from '../components/PageFiller'
import { MainPicture } from '../components/MainPicture'
import { ContactSection } from '../components/ContactPage/ContactSection'
import { ContactForm } from '../components/ContactPage/ContactForm'
import { Map } from '../components/Map'

export const ContactPage = () => {
    return (
        <div className="page-wrapper">
            <main className="main">
                <section className="promo-primary">
                    <MainPicture imgURL='../src/assets/img/contacts.jpg' />
                    <div className="promo-primary__description"> <span>Contacto</span></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-auto">
                                <div className="align-container">
                                    <div className="align-container__item"><span className="promo-primary__pre-title">Ayuda a Pueblos</span>
                                        <h1 className="promo-primary__title"><span>Contacto</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <ContactSection />
                <section className="section contacts no-padding-top">
                    <div className="container">
                        <div className="row justify-content-end">
                            <ContactForm />
                        </div>
                    </div>
                    <Map />

                </section>
            </main>
            <PageFiller />
        </div>
    )
}
