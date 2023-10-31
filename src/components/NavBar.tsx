import React from 'react'
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (<>
        <div className="aside-dropdown">
            <div className="aside-dropdown__inner">
                <div className="aside-dropdown__item d-lg-none d-block">
                    <ul className="aside-menu">
                        <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active"><Link className="aside-menu__link" to="javascript:void(0);"><span>Inicio</span></Link>

                        </li>
                        <li className="aside-menu__item aside-menu__item--has-child"><Link className="aside-menu__link" to="javascript:void(0);"><span>Paginas</span></Link>
                            <ul className="aside-menu__sub-list">
                                <li><Link to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                                <li><Link to="/donantes-y-colaboradores"><span>Donantes y Colaboradores</span></Link></li>
                                <li><Link to="/voluntarios"><span>Volvete un voluntario</span></Link></li>
                                <li><Link to="/historias"><span>Historias de vida</span></Link></li>
                                <li><Link to="/blog"><span>Blog</span></Link></li>
                                <li><Link to="/galeria"><span>Galería</span></Link></li>
                                <li><Link to="/preguntas-frecuentes"><span>Preguntas Frecuentes</span></Link></li>
                            </ul>
                        </li>
                        <li className="aside-menu__item aside-menu__item--has-child"><Link className="aside-menu__link" to="javascript:void(0);"><span>Causas</span></Link>
                            <ul className="aside-menu__sub-list">
                                <li><Link to="causes.html"><span>Causes 1</span></Link></li>
                                <li><Link to="causes_2.html"> <span>Causes 2</span></Link></li>
                                <li><Link to="causes_3.html"><span>Causes 3</span></Link></li>
                                <li><Link to="cause-details.html"><span>Cause Details</span></Link></li>
                            </ul>
                        </li>
                        <li className="aside-menu__item aside-menu__item--has-child"><Link className="aside-menu__link" to="javascript:void(0);"><span>Shop Solidario</span></Link>
                            <ul className="aside-menu__sub-list">
                                <li><Link to="shop.html"><span>Productos</span></Link></li>
                                <li><Link to="shop-product.html"><span>Shop Product</span></Link></li>
                                <li><Link to="shop-cart.html"><span>Shop Cart</span></Link></li>
                                <li><Link to="shop-checkout.html"><span>Shop Checkout</span></Link></li>
                                <li><Link to="shop-account.html"><span>Shop Account</span></Link></li>
                            </ul>
                        </li>
                        <li className="aside-menu__item"><Link className="aside-menu__link" to="contacts.html"><span>Contacts</span></Link></li>
                    </ul>
                </div>
                <div className="aside-dropdown__item">
                    <ul className="aside-menu">
                        <li className="aside-menu__item"><Link className="aside-menu__link" to="/docs">Documentos</Link></li>
                        <li className="aside-menu__item"><Link className="aside-menu__link" to="/info">Información</Link></li>
                        <li className="aside-menu__item"><Link className="aside-menu__link" to="/contacto">Contacto</Link></li>
                    </ul>
                    <div className="aside-inner"><span className="aside-inner__title">Email</span><Link className="aside-inner__link" to="mailto:support@helpo.org">support@helpo.org</Link></div>
                    <div className="aside-inner"><span className="aside-inner__title">Phone numbers</span><Link className="aside-inner__link" to="tel:+180012345678">+ 1800 - 123 456 78</Link><Link className="aside-inner__link" to="tel:+18009756511">+ 1800 - 975 65 11</Link></div>
                    <ul className="aside-socials">
                        <li className="aside-socials__item"><Link className="aside-socials__link" to="#"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                        <li className="aside-socials__item"><Link className="aside-socials__link" to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                        <li className="aside-socials__item"><Link className="aside-socials__link aside-socials__link--active" to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                        <li className="aside-socials__item"><Link className="aside-socials__link" to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    </ul>
                </div>
                <div className="aside-dropdown__item"><Link className="button button--squared" to="#"><span>Donate</span></Link></div>
            </div>
        </div>
        <header className="header header--front">
            <div className="container-fluid">
                <div className="row no-gutters justify-content-between">
                    <div className="col-auto d-flex align-items-center">
                        <div className="dropdown-trigger d-none d-sm-block">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                        <div className="header-logo"><Link className="header-logo__link" to="/"><img className="header-logo__img logo--light" src="img/logo_white.png" alt="logo" /><img className="header-logo__img logo--dark" src="img/logo_dark.png" alt="logo" /></Link></div>
                    </div>
                    <div className="col-auto">
                        <nav>
                            <ul className="main-menu">
                                <li className="main-menu__item main-menu__item--has-child main-menu__item--active"><Link className="main-menu__link" to="javascript:void(0);"><span>Inicio</span></Link>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child"><Link className="main-menu__link" to="javascript:void(0);"><span>Acerca de</span></Link>
                                    <ul className="main-menu__sub-list sub-list--style-2">
                                        <li><Link to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                                        <li><Link to="/donantes-y-colaboradores"><span>Donantes y Colaboradores</span></Link></li>
                                        <li><Link to="/voluntarios"><span>Volvete un voluntario</span></Link></li>
                                        <li><Link to="/historias"><span>Historias de vida</span></Link></li>
                                        <li><Link to="/blog"><span>Blog</span></Link></li>
                                        <li><Link to="/galeria"><span>Galería</span></Link></li>
                                        <li><Link to="/preguntas-frecuentes"><span>Preguntas Frecuentes</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child"><Link className="main-menu__link" to="javascript:void(0);"><span>Causas</span></Link>
                                    <ul className="main-menu__sub-list">
                                        <li><Link to="causes.html"><span>Causes 1</span></Link></li>
                                        <li><Link to="causes_2.html"> <span>Causes 2</span></Link></li>
                                        <li><Link to="causes_3.html"><span>Causes 3</span></Link></li>
                                        <li><Link to="cause-details.html"><span>Cause Details</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child"><Link className="main-menu__link" to="/shop-solidario"><span>Shop Solidario</span></Link>
                                    <ul className="main-menu__sub-list">
                                        <li><Link to="shop.html"><span>Catalog Page</span></Link></li>
                                        <li><Link to="shop-product.html"><span>Shop Product</span></Link></li>
                                        <li><Link to="shop-cart.html"><span>Shop Cart</span></Link></li>
                                        <li><Link to="shop-checkout.html"><span>Shop Checkout</span></Link></li>
                                        <li><Link to="shop-account.html"><span>Shop Account</span></Link></li>
                                    </ul>
                                </li>
                                <li className="main-menu__item"><Link className="main-menu__link" to="contacts.html"><span>Contacto</span></Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        <div className="dropdown-trigger d-block d-sm-none">
                            <div className="dropdown-trigger__item"></div>
                        </div><Link className="button button--squared" to="#"><span>Donate</span></Link>
                    </div>
                </div>
            </div>
        </header>

    </>)
}
