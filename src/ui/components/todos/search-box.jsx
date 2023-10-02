import { useUnit } from "effector-react";
import {
  $searchString,
  resetSearchStringFn,
  setSearchStringFn,
} from "src/models/Todos";
import { ResetSearchSVG, SearchIconSVG } from "src/ui/images/svg";
import "src/ui/styles/components/todos/search-box.scss";

export function SearchBox() {
  const [searchString] = useUnit([$searchString]);

  return (
    <div className="search-box">
      <div className="search-box__search-icon">
        <SearchIconSVG />
      </div>

      <input
        value={searchString}
        type="text"
        onChange={setSearchStringFn}
        className="search-box__input"
        placeholder="Search some todo..."
      ></input>

      {searchString.length >= 1 ? (
        <button onClick={resetSearchStringFn}>
          <ResetSearchSVG />
        </button>
      ) : null}
    </div>
  );
}
