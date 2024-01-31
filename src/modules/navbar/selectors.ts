import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";


const navbarState = (state: RootState) => state.navbar;

export const navbarSelector = createSelector(navbarState, (navbarMain) => navbarMain.asideMenuOpen)