import { logo } from '../../assets/img';
import { MobileNavBarHome } from './MobileNavBarHome'
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/useModal';
import { DonationModal } from '../DonationModal';
import { NavOptions } from '../../data/navbarOptions';


export const NavBar = () => {

    const { openModal, activeModal, closeModal } = useModal();
    return (
        <div>
            <header className="header header--front">
                <div className="container-fluid">
                    <div className="row no-gutters justify-content-between">
                        <div className="col-auto d-flex align-items-center">

                            <div className="dropdown-trigger d-none d-sm-block">
                                <div className="dropdown-trigger__item">
                                    <MobileNavBarHome />

                                </div>
                            </div>
                            <div className="header-logo">
                                <Link className="header-logo__link" to="/">
                                    <img className="header-logo__img logo--light" src={logo} alt="logo" />
                                    <img className="header-logo__img logo--dark" src={logo} alt="logo" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-auto">
                            <nav>
                                <ul className="main-menu">
                                    {/* <li className="main-menu__item main-menu__item main-menu__item--active">
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
                                    <li className="main-menu__item main-menu__item--has-child">
                                        <Link className="main-menu__link" to="/nuestras-causas">
                                            <span>Nuestras Causas</span>
                                        </Link>
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
                                    </li> */}
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
                                                            {/* {option.children} */}
                                                        </ul>}
                                                    {
                                                        (option.hasChildren && option.name == "Shop Solidario") &&
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
                        <div className="col-auto d-flex align-items-center">
                            <div className="dropdown-trigger d-block d-sm-none">
                                <div className="dropdown-trigger__item"></div>
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
