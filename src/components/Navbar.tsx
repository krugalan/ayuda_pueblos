import React from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (<>
        <div className="aside-dropdown">
            <div className="aside-dropdown__inner"><span className="aside-dropdown__close">
                <svg className="icon">
                    <use xlinkHref="#close"></use>
                </svg></span>
                <div className="aside-dropdown__item d-lg-none d-block">
                    <ul className="aside-menu">
                        <li className="aside-menu__item aside-menu__item--has-child">
                            <Link className="aside-menu__link" to="/">
                                <span>Inicio</span>
                            </Link>
                        </li>

                        <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active"><a className="aside-menu__link" href="javascript:void(0);"><span>Acerca De</span></a>
                            <ul className="aside-menu__sub-list">
                                <li className="item--active"><Link to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                                <li><a href="/donantes-y-colaboradores"><span>Donantes y Colaboradores</span></a></li>
                                <li><a href="/voluntarios"><span>Volvete voluntario</span></a></li>
                                <li><a href="/eventos"><span>Eventos</span></a></li>
                                <li><a href="/historias-de-vida"><span>Historias de vida</span></a></li>
                                <li><a href="/blog"><span>Blog</span></a></li>
                                <li><a href="/galeria"><span>Galería</span></a></li>
                                <li><a href="/preguntas-frecuentes"><span>Preguntas Frecuentes</span></a></li>
                            </ul>
                        </li>
                        <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Causes</span></a>
                            <ul className="aside-menu__sub-list">
                                <li><a href="causes.html"><span>Causes 1</span></a></li>
                                <li><a href="causes_2.html"> <span>Causes 2</span></a></li>
                                <li><a href="causes_3.html"><span>Causes 3</span></a></li>
                                <li><a href="cause-details.html"><span>Cause Details</span></a></li>
                            </ul>
                        </li>
                        <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Shop</span></a>
                            <ul className="aside-menu__sub-list">
                                <li><a href="shop.html"><span>Catalog Page</span></a></li>
                                <li><a href="shop-product.html"><span>Shop Product</span></a></li>
                                <li><a href="shop-cart.html"><span>Shop Cart</span></a></li>
                                <li><a href="shop-checkout.html"><span>Shop Checkout</span></a></li>
                                <li><a href="shop-account.html"><span>Shop Account</span></a></li>
                            </ul>
                        </li>
                        <li className="aside-menu__item"><a className="aside-menu__link" href="contacts.html"><span>Contacts</span></a></li>
                        <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Elements</span></a>
                            <ul className="aside-menu__sub-list">
                                <li><a href="alerts.html"><span>Alerts</span></a></li>
                                <li><a href="team.html"><span>Team</span></a></li>
                                <li><a href="testimonials.html"><span>Testimonials</span></a></li>
                                <li><a href="accordion.html"><span>Accordion</span></a></li>
                                <li><a href="tabs.html"><span>Tabs</span></a></li>
                                <li><a href="pricing-plan.html"><span>Pricing Plan</span></a></li>
                                <li><a href="counters.html"><span>Counters</span></a></li>
                                <li><a href="icons.html"><span>Icons</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="aside-dropdown__item">
                    <ul className="aside-menu">
                        <li className="aside-menu__item"><a className="aside-menu__link" href="#">Documents</a></li>
                        <li className="aside-menu__item"><a className="aside-menu__link" href="#">Information</a></li>
                        <li className="aside-menu__item"><a className="aside-menu__link" href="#">Additional Pages</a></li>
                        <li className="aside-menu__item"><a className="aside-menu__link" href="#">Elements</a></li>
                        <li className="aside-menu__item"><a className="aside-menu__link" href="#">Contacts</a></li>
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
                <div className="aside-dropdown__item"><a className="button button--squared" href="#"><span>Donate</span></a></div>
            </div>
        </div>
        <header className="header header--inner">
            <div className="container-fluid">
                <div className="row no-gutters justify-content-between">
                    <div className="col-auto d-flex align-items-center">
                        <div className="dropdown-trigger dropdown-trigger--inner d-none d-sm-block">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                        <div className="header-logo"><a className="header-logo__link" href="index.html"><img className="header-logo__img" src="../src/assets/img/logo_dark.png" alt="logo" /></a></div>
                    </div>
                    <div className="col-auto">
                        <nav>
                            <ul className="main-menu main-menu--inner">
                                <li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="javascript:void(0);"><span>Home</span></a>
                                    <ul className="main-menu__sub-list">
                                        <li><a href="index.html"><span>01 Home Color Style</span></a></li>
                                        <li><a href="front_2.html"> <span>02 Home Color Style</span></a></li>
                                        <li><a href="front_3.html"><span>03 Home Color Style</span></a></li>
                                        <li><a href="mono/index.html"><span>04 Home Monochrome</span></a></li>
                                        <li><a href="mono/front_2.html"><span>05 Home Monochrome</span></a></li>
                                        <li><a href="mono/front_3.html"><span>06 Home Monochrome</span></a></li>
                                    </ul>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child main-menu__item--active"><a className="main-menu__link" href="javascript:void(0);"><span>Pages</span></a>
                                    <ul className="main-menu__sub-list sub-list--style-2">
                                        <li className="item--active"><Link to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                                        <li><a href="/donantes-y-colaboradores"><span>Donantes y Colaboradores</span></a></li>
                                        <li><a href="/voluntarios"><span>Volvete voluntario</span></a></li>
                                        <li><a href="/eventos"><span>Eventos</span></a></li>
                                        <li><a href="/historias-de-vida"><span>Historias de vida</span></a></li>
                                        <li><a href="/blog"><span>Blog</span></a></li>
                                        <li><a href="/galeria"><span>Galería</span></a></li>
                                        <li><a href="/preguntas-frecuentes"><span>Preguntas Frecuentes</span></a></li>
                                    </ul>
                                </li>
                                <li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="javascript:void(0);"><span>Causes</span></a>
                                    {/* <ul className="main-menu__sub-list">
                                        <li><a href="causes.html"><span>Causes 1</span></a></li>
                                        <li><a href="causes_2.html"> <span>Causes 2</span></a></li>
                                        <li><a href="causes_3.html"><span>Causes 3</span></a></li>
                                        <li><a href="cause-details.html"><span>Cause Details</span></a></li>
                                    </ul> */}
                                </li>
                                <li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="javascript:void(0);"><span>Shop</span></a>
                                    <ul className="main-menu__sub-list">
                                        <li><a href="shop.html"><span>Catalog Page</span></a></li>
                                        <li><a href="shop-product.html"><span>Shop Product</span></a></li>
                                        <li><a href="shop-cart.html"><span>Shop Cart</span></a></li>
                                        <li><a href="shop-checkout.html"><span>Shop Checkout</span></a></li>
                                        <li><a href="shop-account.html"><span>Shop Account</span></a></li>
                                    </ul>
                                </li>
                                <li className="main-menu__item"><a className="main-menu__link" href="contacts.html"><span>Contacts</span></a></li>
                                <li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="javascript:void(0);"><span>Elements</span></a>
                                    <ul className="main-menu__sub-list">
                                        <li><a href="alerts.html"><span>Alerts</span></a></li>
                                        <li><a href="team.html"><span>Team</span></a></li>
                                        <li><a href="testimonials.html"><span>Testimonials</span></a></li>
                                        <li><a href="accordion.html"><span>Accordion</span></a></li>
                                        <li><a href="tabs.html"><span>Tabs</span></a></li>
                                        <li><a href="pricing-plan.html"><span>Pricing Plan</span></a></li>
                                        <li><a href="counters.html"><span>Counters</span></a></li>
                                        <li><a href="icons.html"><span>Icons</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        <ul className="lang-select lang-select--inner">
                            <li className="lang-select__item lang-select__item--active"><span>En</span>
                                <ul className="lang-select__sub-list">
                                    <li><a href="#">French</a></li>
                                    <li><a href="#">Spanish</a></li>
                                    <li><a href="#">Deutsch</a></li>
                                    <li><a href="#">Russian</a></li>
                                </ul>
                            </li>
                        </ul>
                        <div className="dropdown-trigger dropdown-trigger--inner d-block d-sm-none">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    </>)
}