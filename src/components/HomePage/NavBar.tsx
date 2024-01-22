import { logo } from '../../assets/img';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { DonationModal } from '../DonationModal';
import { NavOptions } from '../../data/navbarOptions';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNavBarHome } from './MobileNavBarHome';

type NavBarType = {
    whiteNavBar: boolean;
    setWhiteNavBar: (val: boolean) => void
}

export const NavBar = ({ whiteNavBar, setWhiteNavBar }: NavBarType) => {

    const { openModal, activeModal, closeModal } = useModal();

    const [asideMenuOpen, setAsideMenuOpen] = useState(false);

    const handleAsideMenu = () => {
        setAsideMenuOpen(open => !open);
    }



    window.onscroll = function () {
        var y = window.scrollY;
        if (y === 0) {
            setWhiteNavBar(false);
        }
        else {
            setWhiteNavBar(true);
        }
    };

    return (
        <div>
            <header className={`${(whiteNavBar) ? "header header--front header--fixed" : "header"}`}>
                <div className="container-fluid">
                    <div className="row no-gutters justify-content-between">
                        <div className="col-auto d-flex  align-items-center">

                            <div className="dropdown-trigger d-none d-sm-block" >

                                <button onClick={handleAsideMenu} className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
                                    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation">
                                    <GiHamburgerMenu size={30} />
                                </button>

                                <div className={`aside-dropdown ${asideMenuOpen ? "aside-dropdown--active" : ""}`}>
                                    <div className="aside-dropdown__inner">
                                        <button className="aside-dropdown__close" onClick={handleAsideMenu} style={{ border: "none" }}>
                                            <svg className="icon">
                                                <use xlinkHref="#close"></use>
                                            </svg>
                                        </button>

                                        <div className="aside-dropdown__item d-lg-none d-block">
                                            <ul className="aside-menu">
                                                <li className="aside-menu__item aside-menu__item--has-child aside-menu__item--active"><a className="aside-menu__link" href="javascript:void(0);"><span>Home</span></a>
                                                    <ul className="aside-menu__sub-list">
                                                        <li className="item--active"><a href="index.html"><span>01 Home Color Style</span></a></li>
                                                        <li><a href="front_2.html"> <span>02 Home Color Style</span></a></li>
                                                        <li><a href="front_3.html"><span>03 Home Color Style</span></a></li>
                                                        <li><a href="mono/index.html"><span>04 Home Monochrome</span></a></li>
                                                        <li><a href="mono/front_2.html"><span>05 Home Monochrome</span></a></li>
                                                        <li><a href="mono/front_3.html"><span>06 Home Monochrome</span></a></li>
                                                    </ul>
                                                </li>
                                                <li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Pages</span></a>
                                                    <ul className="aside-menu__sub-list">
                                                        <li><a href="about.html"><span>About</span></a></li>
                                                        <li><a href="typography.html"> <span>Typography</span></a></li>
                                                        <li><a href="donors.html"><span>Donors &amp; Partners</span></a></li>
                                                        <li><a href="volunteer.html"><span>Become a Volunteer</span></a></li>
                                                        <li><a href="events.html"><span>Events</span></a></li>
                                                        <li><a href="event-details.html"><span>Event Details</span></a></li>
                                                        <li><a href="stories.html"><span>Stories</span></a></li>
                                                        <li><a href="story-details.html"><span>Story Details</span></a></li>
                                                        <li><a href="blog.html"><span>Blog</span></a></li>
                                                        <li><a href="blog-post.html"><span>Blog Post</span></a></li>
                                                        <li><a href="gallery.html"><span>Gallery</span></a></li>
                                                        <li><a href="pricing.html"><span>Pricing Plans</span></a></li>
                                                        <li><a href="faq.html"><span>FAQ</span></a></li>
                                                        <li><a href="404.html"><span>404 Page</span></a></li>
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
                                            <button
                                                className="aside-dropdown__item button button--squared border border-0"
                                                onClick={openModal}
                                            >
                                                <span>Donar</span>
                                            </button>
                                        </div>
                                        {/* <div className="aside-dropdown__item"><a className="button button--squared" href="#"><span>Donate</span></a></div> */}
                                    </div>
                                </div>
                            </div>

                            <div className="header-logo">
                                <Link className="header-logo__link" to="/">
                                    {
                                        (whiteNavBar)
                                            ?
                                            <img className="header-logo__img logo--dark" src={logo} alt="logo" />
                                            :
                                            <img className="header-logo__img logo--light" src={logo} alt="logo" />

                                    }
                                </Link>
                            </div>
                        </div>

                        <div className="col-auto">
                            <nav>
                                <ul className="main-menu">
                                    {
                                        NavOptions().map((option, index) => (
                                            <li key={index} className='main-menu__item'>
                                                <Link
                                                    to={option.href}
                                                    className={`main-menu__item main-menu__link ${(option.hasChildren) ? "main-menu__item--has-child" : ""}`}
                                                >
                                                    <span>

                                                        {option.name}
                                                    </span>
                                                    {
                                                        (option.hasChildren && option.name == "Acerca De")
                                                        &&
                                                        <ul className="main-menu__sub-list sub-list--style-2">
                                                            <li><Link to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                                                            <li><Link to="/donantes-y-colaboradores"><span>Donantes y Colaboradores</span></Link></li>
                                                            <li><Link to="/voluntarios"><span>Volvete Voluntario</span></Link></li>
                                                            <li><Link to="/eventos"><span>Eventos</span></Link></li>
                                                            <li><Link to="/historias-de-vida"><span>Historias</span></Link></li>
                                                            <li><Link to="/blog"><span>Blog</span></Link></li>
                                                            <li><Link to="/galeria"><span>Galería</span></Link></li>
                                                            <li><Link to="/preguntas-frecuentes"><span>Preguntas Frecuentes</span></Link></li>
                                                        </ul>}
                                                    {
                                                        (option.hasChildren && option.name === "Shop Solidario") &&
                                                        <ul className="main-menu__sub-list">
                                                            <li><Link to="/shop-solidario"><span>Catálogo</span></Link></li>
                                                            <li><Link to="/shop-solidario/carrito"><span>Carrito</span></Link></li>
                                                        </ul>
                                                    }
                                                </Link>
                                            </li>
                                        ))

                                    }
                                </ul>
                            </nav>
                        </div>

                        <div className="col-auto d-flex align-items-center d-md-block">
                            <div className='d-md-none'>

                                <MobileNavBarHome asideMenuOpen={asideMenuOpen} handleAsideMenu={handleAsideMenu} />
                            </div>
                            <button
                                className="button button--squared border border-0"
                                onClick={openModal}
                            >
                                <span>Donar</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <DonationModal showModal={activeModal} onHideModal={closeModal} />
        </div>
    )
}
