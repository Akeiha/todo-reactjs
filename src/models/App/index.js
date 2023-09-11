import { createEvent, createStore } from "effector";

export const setStateSideBarFn = createEvent();

export const $isOpenedSideBar = createStore(false);

$isOpenedSideBar.watch(console.log);

// $xxx -> store
// xxxFn -> event
