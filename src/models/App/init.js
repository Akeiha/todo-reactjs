import { $isOpenedSideBar, setStateSideBarFn } from "./index";

// $store.on(event, (storeValue, eventValue) => { ... });

$isOpenedSideBar.on(setStateSideBarFn, (value) => !value);
