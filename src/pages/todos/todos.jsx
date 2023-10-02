import { useUnit } from "effector-react";
import {
  $todoName,
  $todosFilter,
  $todosSort,
  setNewTodosFn,
  triggerTodoAddingFn,
  updateTodosFilterFn,
} from "src/models/Todos";
import { Button, Input, SearchBox, SortByButton } from "src/ui/components";

import "src/ui/styles/pages/todos.scss";
import { Todos } from "./children/todos-list";
import { $currentWindowWidth } from "src/models/App";

export function TodosPage() {
  const [todoName, todosFilter, currentWindowWidth, todosSort] = useUnit([
    $todoName,
    $todosFilter,
    $currentWindowWidth,
    $todosSort,
  ]);

  return (
    <div className="todos">
      <div className="todos__container">
        <div className="todos__header">
          <SearchBox />
        </div>
        <div className="todos__line"></div>

        <div className="todos__body">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="todos__title" style={{ color: "var(--secondary)" }}>
              Todos
            </p>

            <div>{currentWindowWidth < 661 && <SortByButton />}</div>
          </div>

          <div className="todos__add">
            <div style={{ width: "300px" }}>
              <Input
                value={todoName}
                type="text"
                onChange={setNewTodosFn}
                placeholder="Add a todo"
              />
            </div>
            <Button
              disabled={todoName.length < 1}
              onClick={triggerTodoAddingFn}
            >
              Add
            </Button>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingRight: "4px",
            }}
          >
            <div className="todos__tabs subtitle3">
              <button
                onClick={() => {
                  updateTodosFilterFn("all");
                }}
              >
                <p className={todosFilter === "all" ? "tab-active" : ""}>All</p>
              </button>
              <button
                onClick={() => {
                  updateTodosFilterFn("active");
                }}
              >
                <p className={todosFilter === "active" ? "tab-active" : ""}>
                  Active
                </p>
              </button>
              <button
                onClick={() => {
                  updateTodosFilterFn("completed");
                }}
              >
                <p className={todosFilter === "completed" ? "tab-active" : ""}>
                  Completed
                </p>
              </button>
            </div>

            <div>{currentWindowWidth > 660 && <SortByButton />}</div>
          </div>

          <div className="todos__area">
            <Todos filter={todosFilter} sort={todosSort} />
          </div>
        </div>
      </div>
    </div>
  );
}
