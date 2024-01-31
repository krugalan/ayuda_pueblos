import { createReducer } from "@reduxjs/toolkit";
import { closeNavbar, openNavbar } from "./actions";
import { AsideMenuType } from "./typings";

const initialState: AsideMenuType = {
    asideMenuOpen: false,
}



export const navbarReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(openNavbar, (state) => {
            state.asideMenuOpen = true;
        })
        .addCase(closeNavbar, (state) => {
            state.asideMenuOpen = false;
        })
})