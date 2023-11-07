
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
                    <MainPicture imgURL='../src/assets/img/contacts.jpg' title="Contacto" />

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
        </div>
    )
}
