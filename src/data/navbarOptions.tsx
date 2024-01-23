import { useContext } from "react";
import { NavbarContext, Option } from "../context/NavbarContext";
import { PathName } from "../router/types";

type OptionType = {
    name: Option;
    description: string;
    href: PathName;
    icon?: any;
    active?: boolean;
    hasChildren?: boolean;
    children?: any;

}

type MobileOptionType = {
    name: Option;
    description: string;
    href?: PathName;
    icon?: any;
    active?: boolean;
    hasChildren?: boolean;
    children?: any;
    handleOption?: () => void;
}

export const NavOptions = () => {

    const { currentOption } = useContext(NavbarContext);

    const navbarOptions: OptionType[] = [
        {
            name: "Inicio",
            description: "",
            href: "/",
            icon: "",
            active: (currentOption === "Inicio") ? true : false
        },
        {
            name: "Acerca De",
            description: "",
            href: "/sobre-nosotros",
            icon: "",
            active: (currentOption === "Acerca De") ? true : false,
            hasChildren: true
        },
        {
            name: "Nuestras Causas",
            description: "",
            href: "/nuestras-causas",
            icon: "",
            active: (currentOption === "Nuestras Causas") ? true : false
        },
        {
            name: "Shop Solidario",
            description: "",
            href: "/shop-solidario",
            icon: "",
            active: (currentOption === "Shop Solidario") ? true : false,
            hasChildren: true
        },
        {
            name: "Contactanos",
            description: "",
            href: "/contacto",
            icon: "",
            active: (currentOption === "Contactanos") ? true : false
        },

    ]
    return navbarOptions;
}

export const MobileNavOptions = () => {
    const { currentOption } = useContext(NavbarContext);

    const mobileNavOptions: MobileOptionType[] = [
        {
            name: "Inicio",
            description: "",
            href: "/",
            icon: "",
            active: (currentOption === "Inicio") ? true : false
        },
        {
            name: "Acerca De",
            description: "",
            handleOption: () => { },
            icon: "",
            active: (currentOption === "Acerca De") ? true : false,
            hasChildren: true
        },
        {
            name: "Nuestras Causas",
            description: "",
            href: "/nuestras-causas",
            icon: "",
            active: (currentOption === "Nuestras Causas") ? true : false
        },
        {
            name: "Shop Solidario",
            description: "",
            handleOption: () => { },
            icon: "",
            active: (currentOption === "Shop Solidario") ? true : false,
            hasChildren: true
        },
        {
            name: "Contactanos",
            description: "",
            href: "/contacto",
            icon: "",
            active: (currentOption === "Contactanos") ? true : false
        },

    ]
    return mobileNavOptions;

}


// const aboutPages: NavbarPagesOptionType[] = [
//     {
//         name: "Sobre Nosotros",
//         href: "/sobre-nosotros",
//     },
//     {
//         name: "Volvete Voluntario",
//         href: "/voluntarios",
//     },
//     {
//         name: "Historias",
//         href: "/historias-de-vida",
//     },
//     {
//         name: "Galería",
//         href: "/galeria",
//     },
//     {
//         name: "Donantes y Colaboradores",
//         href: "/donantes-y-colaboradores",
//     },
//     {
//         name: "Eventos",
//         href: "/eventos",
//     },
//     {
//         name: "Blog",
//         href: "/blog",
//     },
//     {
//         name: "Preguntas Frecuentes",
//         href: "/preguntas-frecuentes",
//     },
// ]

// const shopPages: NavbarPagesOptionType[] = [
//     {
//         name: "Catálogo",
//         href: "/shop-solidario",
//     },
//     {
//         name: "Carrito",
//         href: "/carrito",
//     },

// ]