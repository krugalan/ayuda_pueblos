import React from 'react'
import { MobileNavBarHome } from './MobileNavBarHome'
import { Link } from 'react-router-dom';


export const NavBarHome = () => {
    return (
        <div>
            <MobileNavBarHome />
            <header className="header header--front">
                <div className="container-fluid">
                    <div className="row no-gutters justify-content-between">
                        <div className="col-auto d-flex align-items-center">
                            <div className="dropdown-trigger d-none d-sm-block">
                                <div className="dropdown-trigger__item"></div>
                            </div>
                            <div className="header-logo">
                                <Link className="header-logo__link" to="/">
                                    <img className="header-logo__img logo--light" src="../src/assets/img/logo.jpg" alt="logo" />
                                    <img className="header-logo__img logo--dark" src="../src/assets/img/logo_dark.png" alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-auto">
                            <nav>
                                <ul className="main-menu">
                                    <li className="main-menu__item main-menu__item--has-child main-menu__item--active">
                                        <Link className="main-menu__link" to="/">
                                            <span>Inicio</span>
                                        </Link>
                                    </li>
                                    <li className="main-menu__item main-menu__item--has-child">
                                        <Link className="main-menu__link" to="/sobre-nosotros">
                                            <span>Acerca de</span>
                                        </Link>
                                        <ul className="main-menu__sub-list sub-list--style-2">
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
                                    <li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="javascript:void(0);"><span>Nuestras Causas</span></a>
                                        {/* <ul className="main-menu__sub-list">
                                            <li><a href="causes.html"><span>Causes 1</span></a></li>
                                            <li><a href="causes_2.html"> <span>Causes 2</span></a></li>
                                            <li><a href="causes_3.html"><span>Causes 3</span></a></li>
                                        </ul> */}
                                    </li>
                                    <li className="main-menu__item main-menu__item--has-child">
                                        <Link className="main-menu__link" to="/shop-solidario">
                                            <span>Shop Solidario</span>
                                        </Link>
                                        <ul className="main-menu__sub-list">
                                            <li><Link to="/shop-solidario"><span>Catálogo</span></Link></li>
                                            <li><Link to="/shop-solidario/carrito"><span>Carrito</span></Link></li>
                                        </ul>
                                    </li>
                                    <li className="main-menu__item">
                                        <Link className="main-menu__link" to="/contacto">
                                            <span>Contactanos</span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-auto d-flex align-items-center">
                            <div className="dropdown-trigger d-block d-sm-none">
                                <div className="dropdown-trigger__item"></div>
                            </div><a className="button button--squared" href="#"><span>Donar</span></a>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
