import { logo } from '../../assets/img';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { DonationModal } from '../DonationModal';
import { NavOptions } from '../../data/navbarOptions';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileNavBarHome } from './MobileNavBarHome';
import { contactEmail, phoneNumber } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';
import { navbarSelector } from '../../modules/navbar/selectors';
import { closeNavbar, openNavbar } from '../../modules/navbar/actions';

type NavBarType = {
    whiteNavBar: boolean;
    setWhiteNavBar: (val: boolean) => void
}

export const NavBar = ({ whiteNavBar, setWhiteNavBar }: NavBarType) => {

    const { openModal, activeModal, closeModal } = useModal();
    // const {} = useSelector((state:RootState)=>state.navbar);
    // const [asideMenuOpen, setAsideMenuOpen] = useState(false);

    const asideMenuOpen = useSelector(navbarSelector);
    const dispatch = useDispatch();

    const handleAsideMenu = () => {

        dispatch(asideMenuOpen ? closeNavbar() : openNavbar());
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

                                        <div className="aside-dropdown__item">
                                            <ul className="aside-menu">
                                                <li className="aside-menu__item"><a className="aside-menu__link" href="#">Documentos</a></li>
                                                <li className="aside-menu__item"><a className="aside-menu__link" href="#">Información</a></li>
                                                <li className="aside-menu__item"><a className="aside-menu__link" href="#">Additional Pages</a></li>
                                                <li className="aside-menu__item"><a className="aside-menu__link" href="#">Elementos</a></li>
                                                <li className="aside-menu__item"><a className="aside-menu__link" href="#">Contacto</a></li>
                                            </ul>
                                            <div className="aside-inner"><span className="aside-inner__title">Email</span><a className="aside-inner__link" href={`mailto:${contactEmail}`}>{contactEmail}</a></div>
                                            <div className="aside-inner"><span className="aside-inner__title">Números de Contacto</span>
                                                <a className="aside-inner__link" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                                            </div>
                                            <ul className="aside-socials">
                                                <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                                <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                            </ul>
                                            <div className="aside-dropdown__item d-flex" >
                                                <a className="button button--squared" onClick={openModal}><span>Donar</span></a>
                                            </div>
                                        </div>
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
