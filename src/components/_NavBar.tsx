import React from 'react'
import { Link } from 'react-router-dom';


export const NavBar = () => {
    return (<>
        <div className="aside-dropdown">
            <div className="aside-dropdown__inner">
                {/* <span className="aside-dropdown__close">
                        <svg className="icon">
                            <use xlinkto="#close"></use>
                        </svg></span> */}
                <div className="aside-dropdown__item d-lg-none d-block">
                    <ul className="aside-menu">
                        <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active"><Link className="aside-menu__link" to="javascript:void(0);"><span>Inicio</span></Link>
                            {/* <ul className="aside-menu__sub-list">
                                <li className="item--active"><Link to="/"><span>01 Home Color Style</span></Link></li>
                                <li><Link to="front_2.html"> <span>02 Home Color Style</span></Link></li>
                                <li><Link to="front_3.html"><span>03 Home Color Style</span></Link></li>
                                <li><Link to="mono/index.html"><span>04 Home Monochrome</span></Link></li>
                                <li><Link to="mono/front_2.html"><span>05 Home Monochrome</span></Link></li>
                                <li><Link to="mono/front_3.html"><span>06 Home Monochrome</span></Link></li>
                            </ul> */}
                        </li>
                        <li className="aside-menu__item aside-menu__item--has-child"><Link className="aside-menu__link" to="javascript:void(0);"><span>Paginas</span></Link>
                            <ul className="aside-menu__sub-list">
                                <li><Link to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                                {/* <li><Link to="typography.html"> <span>Typography</span></Link></li> */}
                                <li><Link to="donors.html"><span>Donantes y Colaboradores</span></Link></li>
                                <li><Link to="volunteer.html"><span>Volvete un voluntario</span></Link></li>
                                {/* <li><Link to="events.html"><span>Eventos</span></Link></li> */}
                                {/* <li><Link to="event-details.html"><span>Event Details</span></Link></li> */}
                                <li><Link to="stories.html"><span>Historias de vida</span></Link></li>
                                {/* <li><Link to="story-details.html"><span>Story Details</span></Link></li> */}
                                <li><Link to="blog.html"><span>Blog</span></Link></li>
                                {/* <li><Link to="blog-post.html"><span>Blog Post</span></Link></li> */}
                                <li><Link to="gallery.html"><span>Galería</span></Link></li>
                                {/* <li><Link to="pricing.html"><span>Pricing Plans</span></Link></li> */}
                                <li><Link to="faq.html"><span>FAQ</span></Link></li>
                                {/* <li><Link to=""><span>404 Page</span></Link></li> */}
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
                                <li><Link to="shop.html"><span>Catalog Page</span></Link></li>
                                <li><Link to="shop-product.html"><span>Shop Product</span></Link></li>
                                <li><Link to="shop-cart.html"><span>Shop Cart</span></Link></li>
                                <li><Link to="shop-checkout.html"><span>Shop Checkout</span></Link></li>
                                <li><Link to="shop-account.html"><span>Shop Account</span></Link></li>
                            </ul>
                        </li>
                        <li className="aside-menu__item"><Link className="aside-menu__link" to="contacts.html"><span>Contacts</span></Link></li>
                        {/* <li className="aside-menu__item aside-menu__item--has-child"><Link className="aside-menu__link" to="javascript:void(0);"><span>Elements</span></Link>
                            <ul className="aside-menu__sub-list">
                                <li><Link to="alerts.html"><span>Alerts</span></Link></li>
                                <li><Link to="team.html"><span>Team</span></Link></li>
                                <li><Link to="testimonials.html"><span>Testimonials</span></Link></li>
                                <li><Link to="accordion.html"><span>Accordion</span></Link></li>
                                <li><Link to="tabs.html"><span>Tabs</span></Link></li>
                                <li><Link to="pricing-plan.html"><span>Pricing Plan</span></Link></li>
                                <li><Link to="counters.html"><span>Counters</span></Link></li>
                                <li><Link to="icons.html"><span>Icons</span></Link></li>
                            </ul>
                        </li> */}
                    </ul>
                </div>
                <div className="aside-dropdown__item">
                    <ul className="aside-menu">
                        <li className="aside-menu__item"><Link className="aside-menu__link" to="/docs">Documentos</Link></li>
                        <li className="aside-menu__item"><Link className="aside-menu__link" to="/info">Información</Link></li>
                        {/* <li className="aside-menu__item"><Link className="aside-menu__link" to="#">Additional Pages</Link></li> */}
                        {/* <li className="aside-menu__item"><Link className="aside-menu__link" to="#">Elements</Link></li> */}
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
                                    {/* <ul className="main-menu__sub-list">
                                        <li className="item--active"><Link to="index.html"><span>01 Home Color Style</span></Link></li>
                                        <li><Link to="front_2.html"> <span>02 Home Color Style</span></Link></li>
                                        <li><Link to="front_3.html"><span>03 Home Color Style</span></Link></li>
                                        <li><Link to="mono/index.html"><span>04 Home Monochrome</span></Link></li>
                                        <li><Link to="mono/front_2.html"><span>05 Home Monochrome</span></Link></li>
                                        <li><Link to="mono/front_3.html"><span>06 Home Monochrome</span></Link></li>
                                    </ul> */}
                                </li>
                                <li className="main-menu__item main-menu__item--has-child"><Link className="main-menu__link" to="javascript:void(0);"><span>Acerca de</span></Link>
                                    <ul className="main-menu__sub-list sub-list--style-2">
                                        <li><Link to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                                        {/* <li><Link to="typography.html"> <span>Typography</span></Link></li> */}
                                        <li><Link to="donors.html"><span>Donantes y Colaboradores</span></Link></li>
                                        <li><Link to="volunteer.html"><span>Volvete un voluntario</span></Link></li>
                                        {/* <li><Link to="events.html"><span>Eventos</span></Link></li> */}
                                        {/* <li><Link to="event-details.html"><span>Event Details</span></Link></li> */}
                                        <li><Link to="stories.html"><span>Historias de vida</span></Link></li>
                                        {/* <li><Link to="story-details.html"><span>Story Details</span></Link></li> */}
                                        <li><Link to="blog.html"><span>Blog</span></Link></li>
                                        {/* <li><Link to="blog-post.html"><span>Blog Post</span></Link></li> */}
                                        <li><Link to="gallery.html"><span>Galería</span></Link></li>
                                        {/* <li><Link to="pricing.html"><span>Pricing Plans</span></Link></li> */}
                                        <li><Link to="faq.html"><span>FAQ</span></Link></li>
                                        {/* <li><Link to=""><span>404 Page</span></Link></li> */}
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
                                {/* <li className="main-menu__item main-menu__item--has-child"><Link className="main-menu__link" to="javascript:void(0);"><span>Elements</span></Link>
                                    <ul className="main-menu__sub-list">
                                        <li><Link to="alerts.html"><span>Alerts</span></Link></li>
                                        <li><Link to="team.html"><span>Team</span></Link></li>
                                        <li><Link to="testimonials.html"><span>Testimonials</span></Link></li>
                                        <li><Link to="accordion.html"><span>Accordion</span></Link></li>
                                        <li><Link to="tabs.html"><span>Tabs</span></Link></li>
                                        <li><Link to="pricing-plan.html"><span>Pricing Plan</span></Link></li>
                                        <li><Link to="counters.html"><span>Counters</span></Link></li>
                                        <li><Link to="icons.html"><span>Icons</span></Link></li>
                                    </ul>
                                </li> */}
                            </ul>
                        </nav>
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        {/* <ul className="lang-select">
                            <li className="lang-select__item lang-select__item--active"><span>En</span>
                                <ul className="lang-select__sub-list">
                                    <li><Link to="#">French</Link></li>
                                    <li><Link to="#">Spanish</Link></li>
                                    <li><Link to="#">Deutsch</Link></li>
                                    <li><Link to="#">Russian</Link></li>
                                </ul>
                            </li>
                        </ul> */}
                        <div className="dropdown-trigger d-block d-sm-none">
                            <div className="dropdown-trigger__item"></div>
                        </div><Link className="button button--squared" to="#"><span>Donate</span></Link>
                    </div>
                </div>
            </div>
        </header>

    </>)
}
