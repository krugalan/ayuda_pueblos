import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { NavOptions } from "../../data/navbarOptions";
import { contactEmail, phoneNumber } from "../../constants";
import { useModal } from "../../hooks/useModal";


type MobileNavBarHomeType = {
    asideMenuOpen: boolean;
    handleAsideMenu: () => void
}

export const MobileNavBarHome = ({ asideMenuOpen, handleAsideMenu }: MobileNavBarHomeType) => {
    const { openModal } = useModal();

    return (
        <>
            <button onClick={handleAsideMenu}
                style={{ marginRight: 20 }}
                className="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
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
                        {
                            NavOptions().map((option, index) => (
                                <li key={index} className='main-menu__item'>
                                    <Link
                                        to={option.href}
                                        className={`main-menu__item main-menu__link ${(option.hasChildren) ? "main-menu__item--has-child" : ""}`}
                                        style={{ margin: 0 }}
                                    >
                                        <span>
                                            {option.name}
                                        </span>
                                        {
                                            (option.hasChildren && option.name == "Acerca De")
                                            &&
                                            <ul className="main-menu__sub-list sub-list--style-2" style={{ display: "block" }}>
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




                        <li className="aside-menu__item aside-menu__item--has-child">
                            <a className="aside-menu__link" href="javascript:void(0);"><span>Pages</span></a>
                            <ul className="aside-menu__sub-list" style={{ display: "block" }}>
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
                    </div>

                    <div className="aside-dropdown__item">
                        <ul className="aside-menu">
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Documentos</a></li>
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Información</a></li>
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Additional Pages</a></li>
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Elements</a></li>
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Contacto</a></li>
                        </ul>
                        <div className="aside-inner"><span className="aside-inner__title">Email</span><a className="aside-inner__link" href={`mailto:${contactEmail}`}>{contactEmail}</a></div>
                        <div className="aside-inner"><span className="aside-inner__title">Phone numbers</span>
                            <a className="aside-inner__link" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                            <a className="aside-inner__link" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </div>
                        <ul className="aside-socials">
                            <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                            <li className="aside-socials__item"><a className="aside-socials__link aside-socials__link--active" href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                            <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        </ul>

                    </div>

                    <div className="aside-dropdown__item">
                        <a className="button button--squared" onClick={openModal}><span>Donar</span></a>
                    </div>
                </div>
            </div>


        </>
    )
}
