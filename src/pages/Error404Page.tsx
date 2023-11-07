import { Link } from "react-router-dom"
import { error404 } from '../assets/img'

export const Error404Page = () => {
    return (
        <div className="page-wrapper">
            <main className="main"><img className="img--bg" src={error404} alt="img" />
                <section className="section error">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-xl-6">
                                <div className="align-container">
                                    <div className="align-container__item">
                                        <h1 className="error__title">404</h1>
                                        <h3 className="error__subtitle">Página no encontrada</h3>
                                        <p className="error__text"></p>
                                        <Link className="button button--primary" to="/">Volver al Inicio</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}
