
import { Link } from 'react-router-dom';


type MobileNavBarHomeType = {
    offcanvasOpen: boolean;
    setOffcanvasOpen: (val: boolean) => void;
}

export const MobileNavBarHome = ({ offcanvasOpen, setOffcanvasOpen }: MobileNavBarHomeType) => {


    const closeOffcanvas = () => {

        setOffcanvasOpen(false);
    }

    return (
        <>


            {/* <div className="aside-dropdown__item d-lg-none d-block">
                <ul className="aside-menu">
                    <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active">
                        <Link className="aside-menu__link" to="/">
                            <span>Inicio</span>
                        </Link>
                    </li>

                    <li className="aside-menu__item aside-menu__item--has-child">
                        <Link className="aside-menu__link" to="/sobre-nosotros">
                            <span>Acerca De</span>
                        </Link>
                        <ul className="aside-menu__sub-list">
                            <li><Link to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                            <li><Link to="/donantes-y-colaboradores"><span>Donantes y Colaboradores</span></Link></li>
                            <li><Link to="/voluntarios"><span>Volvete Voluntario</span></Link></li>
                            <li><Link to="/eventos"><span>Eventos</span></Link></li>
                            <li><Link to="/historias-de-vida"><span>Historias</span></Link></li>
                            <li><Link to="/blog"><span>Blog</span></Link></li>
                            <li><Link to="/galeria"><span>Galería</span></Link></li>
                            <li><Link to="/preguntas-frecuentes"><span>Preguntas Frecuentes</span></Link></li>
                        </ul>
                    </li>
                    <li className="aside-menu__item aside-menu__item--has-child">
                        <Link className="aside-menu__link" to="/nuestras-causas">
                            <span>Nuestras Causas</span>
                        </Link>
                    </li>

                    <li className="aside-menu__item">
                        <a className="aside-menu__link" href="contacts.html">
                            <span>Contactanos</span>
                        </a>
                    </li>

                </ul>
            </div>
            <div className="aside-dropdown__item">
                <ul className="aside-menu">
                    <li className="aside-menu__item">
                        <Link className="aside-menu__link" to="#">Información</Link>
                    </li>
                    <li className="aside-menu__item">
                        <Link className="aside-menu__link" to="/contacto">Contacto</Link>
                    </li>
                </ul>
                <div className="aside-inner"><span className="aside-inner__title">Email</span>
                    <a className="aside-inner__link" href="mailto:support@helpo.org">support@helpo.org</a>
                </div>
                <div className="aside-inner"><span className="aside-inner__title">Phone numbers</span>
                    <a className="aside-inner__link" href="tel:+180012345678">+ 1800 - 123 456 78</a>
                    <a className="aside-inner__link" href="tel:+18009756511">+ 1800 - 975 65 11</a>
                </div>
                <ul className="aside-socials">
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link aside-socials__link--active" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="aside-dropdown__item"><a className="button button--squared" href="#"><span>Donar</span></a></div>


            <div className="aside-dropdown">
            </div> */}

            {/* <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button> */}

            <div className={`offcanvas offcanvas-start ${offcanvasOpen ? "show" : ""}`}
                data-bs-scroll="true"
                tabIndex={-1}
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
            >
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                    <button type="button" onClick={closeOffcanvas} className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p>Try scrolling the rest of the page to see this option in action.</p>
                </div>
            </div>
        </>
    )
}
