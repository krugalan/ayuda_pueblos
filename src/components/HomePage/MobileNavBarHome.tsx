import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MobileNavOptions } from "../../data/navbarOptions";
import { contactEmail, phoneNumber } from "../../constants";
import { useModal } from "../../hooks/useModal";
import { useState } from "react";
import { DonationModal } from "../DonationModal";
import { useDispatch } from "react-redux";
import { closeNavbar } from "../../modules/navbar/actions";


type MobileNavBarHomeType = {
    asideMenuOpen: boolean;
    handleAsideMenu: () => void
}

export const MobileNavBarHome = ({ asideMenuOpen, handleAsideMenu }: MobileNavBarHomeType) => {
    const { openModal, activeModal, closeModal } = useModal();

    const [aboutPagesOpen, setAboutPagesOpen] = useState(false);
    const [shopPagesOpen, setShopPagesOpen] = useState(false);


    const dispatch = useDispatch();

    const handleAboutPages = () => {
        setAboutPagesOpen(!aboutPagesOpen);
    }

    const handleShopPages = () => {
        setShopPagesOpen(!shopPagesOpen);
    }

    const closeAsideMenu = () => {
        dispatch(closeNavbar());
    }

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



                    <div className="aside-dropdown__item ">
                        {
                            MobileNavOptions().map((option, index) => (

                                <li key={index} className="aside-menu__item"  >

                                    <Link
                                        to={option.href!}
                                        className={`aside-menu__item aside-menu__link ${(option.hasChildren) ? "aside-menu__item--has-child" : ""}`}
                                        style={{ margin: 0 }}
                                        onClick={(option.hasChildren && option.name === "Acerca De")
                                            ?
                                            () => { handleAboutPages(); }
                                            :
                                            (option.hasChildren && option.name === "Shop Solidario")
                                                ?
                                                () => { handleShopPages() } : closeAsideMenu
                                        }


                                    >
                                        <span className="aside-menu__link">{option.name}</span>
                                        {
                                            (option.hasChildren && option.name === "Acerca De")
                                            &&
                                            <ul className="aside-menu__sub-list" style={{ display: aboutPagesOpen ? "block" : "none" }}>
                                                <li><Link onClick={closeAsideMenu} to="/sobre-nosotros"><span>Sobre Nosotros</span></Link></li>
                                                <li><Link onClick={closeAsideMenu} to="/donantes-y-colaboradores"><span>Donantes y Colaboradores</span></Link></li>
                                                <li><Link onClick={closeAsideMenu} to="/voluntarios"><span>Volvete Voluntario</span></Link></li>
                                                <li><Link onClick={closeAsideMenu} to="/eventos"><span>Eventos</span></Link></li>
                                                <li><Link onClick={closeAsideMenu} to="/historias-de-vida"><span>Historias</span></Link></li>
                                                <li><Link onClick={closeAsideMenu} to="/blog"><span>Blog</span></Link></li>
                                                <li><Link onClick={closeAsideMenu} to="/galeria"><span>Galería</span></Link></li>
                                                <li><Link onClick={closeAsideMenu} to="/preguntas-frecuentes"><span>Preguntas Frecuentes</span></Link></li>
                                            </ul>
                                        }
                                        {
                                            (option.hasChildren && option.name === "Shop Solidario") &&
                                            <ul className="aside-menu__sub-list" style={{ display: shopPagesOpen ? "block" : "none" }}>
                                                <li><Link onClick={closeAsideMenu} to="/shop-solidario"><span>Catálogo</span></Link></li>
                                                <li><Link onClick={closeAsideMenu} to="/shop-solidario/carrito"><span>Carrito</span></Link></li>
                                            </ul>
                                        }
                                    </Link>
                                </li>

                            ))}

                    </div>

                    <div className="aside-dropdown__item">
                        <ul className="aside-menu">
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Documentos</a></li>
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Información</a></li>
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Páginas Adicionales</a></li>
                            <li className="aside-menu__item"><a className="aside-menu__link" href="#">Elementos</a></li>
                            {/* <li className="aside-menu__item"><Link className="aside-menu__link" to="/contacto">Contacto</Link></li> */}
                        </ul>
                        <div className="aside-inner"><span className="aside-inner__title">Email</span><a className="aside-inner__link" href={`mailto:${contactEmail}`}>{contactEmail}</a></div>
                        <div className="aside-inner"><span className="aside-inner__title">Número de Contacto</span>
                            <a className="aside-inner__link" href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                        </div>
                        <ul className="aside-socials">
                            <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li className="aside-socials__item"><a className="aside-socials__link" href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        </ul>

                        <div className="aside-dropdown__item d-flex" style={{ height: 50, fontWeight: "bold" }}>
                            <a className="button--squared" onClick={openModal}><span>DONAR</span></a>
                        </div>
                    </div>

                </div>
                <DonationModal showModal={activeModal} onHideModal={closeModal} />
            </div>


        </>
    )
}
