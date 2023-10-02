import { useUnit } from "effector-react";
import { createPortal } from "react-dom";
import { $isModalShow } from "src/models/App";

export const Modal = ({ children }) => {
  const isModalShow = useUnit($isModalShow);
  return isModalShow ? createPortal(children, document.body) : null;
};
