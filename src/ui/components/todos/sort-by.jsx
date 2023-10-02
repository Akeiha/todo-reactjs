import { SortIconSVG } from "src/ui/images/svg";
import React, { useEffect } from "react";
import { useUnit } from "effector-react";
import { $isDropDownShow, setDropDownStateFn } from "src/models/App";

import "src/ui/styles/components/todos/sort-by.scss";
import { $todos, updateTodosSortFn } from "src/models/Todos";

const onWindowClickDropdownListener = (event) => {
  const checked = $isDropDownShow.getState();
  const profileDropdown = document.getElementsByClassName("sort-button")[0];

  if (
    event.target !== profileDropdown &&
    !profileDropdown.contains(event.target) &&
    checked
  ) {
    setDropDownStateFn(false);
  }
};

export function SortByButton() {
  const [isDropDownShow, todos] = useUnit([$isDropDownShow, $todos]);

  const classNameContainer = ["drop-down-container", "caption2"];
  classNameContainer.push(
    isDropDownShow ? "drop-down-container_open" : "drop-down-container_closed"
  );

  useEffect(() => {
    window.addEventListener("click", onWindowClickDropdownListener);
    window.addEventListener("touchstart", onWindowClickDropdownListener);

    return () => {
      window.removeEventListener("click", onWindowClickDropdownListener);
      window.removeEventListener("touchstart", onWindowClickDropdownListener);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <button
        className="sort-button"
        onClick={() => setDropDownStateFn(!isDropDownShow)}
      >
        <SortIconSVG />
        Sort by
      </button>

      <div className={classNameContainer.join(" ")}>
        <button
          onClick={() => {
            updateTodosSortFn("alphabetical");
          }}
        >
          Alphabetical
        </button>
        <button
          onClick={() => {
            updateTodosSortFn("date");
          }}
        >
          Date
        </button>
      </div>
    </div>
  );
}
