import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

export const setStateSideBarFn = createEvent();

export const openModalFn = createEvent();
export const closeModalFn = createEvent();

export const setDropDownStateFn = createEvent();

export const setCurrentWindowWidthFn = createEvent();

export const $isOpenedSideBar = createStore(false);
persist({ store: $isOpenedSideBar, key: "isOpenedSideBar" });

export const $isModalShow = createStore(false);

export const $isDropDownShow = createStore(false);

export const $currentWindowWidth = createStore("1000");

// $xxx -> store
// xxxFn -> event
