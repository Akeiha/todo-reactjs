import {
  $isOpenedSideBar,
  $isDropDownShow,
  setStateSideBarFn,
  setDropDownStateFn,
  $isModalShow,
  openModalFn,
  closeModalFn,
  $currentWindowWidth,
  setCurrentWindowWidthFn,
} from "./index";

// $store.on(event, (storeValue, eventValue) => { ... });

$isOpenedSideBar.on(setStateSideBarFn, (value) => !value);

$isDropDownShow.on(setDropDownStateFn, (_, value) => value);

$isModalShow.on(openModalFn, () => true).on(closeModalFn, () => false);

$currentWindowWidth.on(setCurrentWindowWidthFn, (_, width) => width);
