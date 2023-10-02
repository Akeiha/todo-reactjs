import {
  $isEditedTodoNameOpen,
  $todos,
  deleteTodoFn,
  setStateEditedTodoNameFn,
  updateDoneTodoFn,
  resetStateEditedTodoNameFn,
  saveEditedTodoNameFn,
  $searchString,
  $filteredBySearchTodos,
} from "src/models/Todos";
import { Checkbox } from "src/ui/components";
import { format } from "date-fns";
import { isEmpty } from "src/dict/lodash";
import {
  DeleteTodoSVG,
  EditTodoSVG,
  NoTodosSVG,
  SaveChangesSVG,
  ResetChangesSVG,
} from "src/ui/images/svg";
import { useState } from "react";
import "src/ui/styles/pages/todos.scss";
import { useUnit } from "effector-react";

export const Todos = ({ filter, sort }) => {
  const [todos, isEditedTodoNameOpen, filteredBySearchTodos, searchString] =
    useUnit([
      $todos,
      $isEditedTodoNameOpen,
      $filteredBySearchTodos,
      $searchString,
    ]);

  const [newTodoName, setNewTodoName] = useState("");

  const allTodos = [
    ...(searchString.length > 0 ? filteredBySearchTodos : todos),
  ]
    .filter((todo) => {
      if (filter === "active") {
        return todo.done === false;
      }

      if (filter === "completed") {
        return todo.done === true;
      }

      if (filter === "all") {
        return true;
      }

      return false;
    })
    .sort((a, b) => {
      var nameA = a.name;
      var nameB = b.name;

      var dataA = a.data;
      var dataB = b.data;

      if (sort === "alphabetical") {
        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        } else {
          return a.name !== "" ? -1 : 1;
        }
      }

      if (sort === "date") {
        if (dataA < dataB) {
          return -1;
        } else if (dataA > dataB) {
          return 1;
        } else {
          return a.data !== "" ? -1 : 1;
        }
      }

      return true;
    });

  return !isEmpty(allTodos) ? (
    allTodos.map((todo, i) => {
      return (
        <div className="todo caption1" key={i}>
          <Checkbox
            type="checkbox"
            onChange={() => {
              isEditedTodoNameOpen
                ? null
                : updateDoneTodoFn({ id: todo.id, done: !todo.done });
            }}
            value={todo.done}
          >
            {isEditedTodoNameOpen === todo.id ? (
              <input
                className="todo__input caption1"
                value={newTodoName}
                onChange={(e) => setNewTodoName(e.target.value)}
              />
            ) : (
              <p style={{ marginLeft: "5px" }}>{todo.name}</p>
            )}
          </Checkbox>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <p className="todo__date caption2 ">
              {format(new Date(todo.date), "MMMM dd, yyyy, EEEE")}
            </p>

            <div className="todo__buttons">
              {todo.done ? (
                ""
              ) : isEditedTodoNameOpen === todo.id ? (
                <button
                  type="button"
                  onClick={() => {
                    saveEditedTodoNameFn({ id: todo.id, name: newTodoName });
                  }}
                >
                  <SaveChangesSVG />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setStateEditedTodoNameFn(todo.id);
                    setNewTodoName(todo.name);
                  }}
                >
                  <EditTodoSVG />
                </button>
              )}

              {isEditedTodoNameOpen === todo.id ? (
                <button
                  type="button"
                  onClick={() => {
                    resetStateEditedTodoNameFn();
                  }}
                >
                  <ResetChangesSVG />
                </button>
              ) : (
                <button type="button" onClick={() => deleteTodoFn(todo.id)}>
                  <DeleteTodoSVG />
                </button>
              )}
            </div>
          </div>
        </div>
      );
    })
  ) : (
    <div className="no-todos caption1">
      <NoTodosSVG />
      No todos yet
    </div>
  );
};
