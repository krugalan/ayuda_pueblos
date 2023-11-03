
import { Link } from 'react-router-dom';


export const MobileNavBarHome = () => {
    return (
        <div>
            <div className="aside-dropdown">
                <div className="aside-dropdown__inner">
                    <span className="aside-dropdown__close">
                        <svg className="icon">
                            <use xlinkHref="#close"></use>
                        </svg>
                    </span>
                    <div className="aside-dropdown__item d-lg-none d-block">
                        <ul className="aside-menu">
                            <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active"><a className="aside-menu__link" href="javascript:void(0);"><span>Inicio</span></a>

                            </li>
                            <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Acerca De</span></a>
                                <ul className="aside-menu__sub-list">
                                    <li><Link to="/about"><span>Sobre Nosotros</span></Link></li>
                                    <li><Link to="/donantes-y-colaboradores"><span>Donantes y Colaboradores</span></Link></li>
                                    <li><Link to="/voluntarios"><span>Volvete Voluntario</span></Link></li>
                                    <li><Link to="/eventos"><span>Eventos</span></Link></li>
                                    <li><Link to="/historias-de-vida"><span>Historias</span></Link></li>
                                    <li><Link to="/blog"><span>Blog</span></Link></li>
                                    <li><Link to="/galeria"><span>Galería</span></Link></li>
                                    <li><Link to="/preguntas-frecuentes"><span>Preguntas Frecuentes</span></Link></li>
                                </ul>
                            </li>
                            <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Nuestras Causas</span></a>
                                <ul className="aside-menu__sub-list">
                                    <li><a href="causes.html"><span>Causes 1</span></a></li>
                                    <li><a href="causes_2.html"> <span>Causes 2</span></a></li>
                                    <li><a href="causes_3.html"><span>Causes 3</span></a></li>
                                </ul>
                            </li>

                            <li className="aside-menu__item"><a className="aside-menu__link" href="contacts.html"><span>Contactanos</span></a></li>

                        </ul>
                    </div>
                    <div className="aside-dropdown__item">
                        <ul className="aside-menu">
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Información</a></li>
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Contacto</a></li>
                        </ul>
                        <div className="aside-inner"><span className="aside-inner__title">Email</span><a className="aside-inner__link" href="mailto:support@helpo.org">support@helpo.org</a></div>
                        <div className="aside-inner"><span className="aside-inner__title">Phone numbers</span><a className="aside-inner__link" href="tel:+180012345678">+ 1800 - 123 456 78</a><a className="aside-inner__link" href="tel:+18009756511">+ 1800 - 975 65 11</a></div>
                        <ul className="aside-socials">
                            <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li className="aside-socials__item"><a className="aside-socials__link aside-socials__link--active" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div className="aside-dropdown__item"><a className="button button--squared" href="#"><span>Donar</span></a></div>
                </div>
            </div>
        </div>
    )
}
