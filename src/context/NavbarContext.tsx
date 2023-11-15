import { createContext, useState } from "react";

export type optionsType = ['Inicio', 'Acerca De', 'Nuestras Causas', 'Shop Solidario', "Contactanos", undefined, '']
const availableOptions: optionsType = ['Inicio', 'Acerca De', 'Nuestras Causas', 'Shop Solidario', "Contactanos", undefined, '']
type TupleToUnion<T extends any[]> = T[number]
export type Option = TupleToUnion<typeof availableOptions>;

type NavbarContextType = {
    currentOption: Option
    setCurrentNavbarOption: (option: Option) => void

}

type NavbarProviderType = {
    children: JSX.Element;
}

const defaultValue: NavbarContextType = {
    currentOption: undefined,
    setCurrentNavbarOption: () => { }
}

export const NavbarContext = createContext(defaultValue);

export const NavbarProvider = ({ children }: NavbarProviderType) => {
    const [currentNavbarOption, setCurrentNavbarOption] = useState<Option>();

    const value: NavbarContextType = {
        currentOption: currentNavbarOption,
        setCurrentNavbarOption
    }
    return <NavbarContext.Provider value={value}>
        {children}
    </NavbarContext.Provider>
}