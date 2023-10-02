import { createEvent, createStore } from "effector";
import { persist } from "effector-storage/local";

export const setNewTodosFn = createEvent();
export const resetTodoNameFn = createEvent();

export const triggerTodoAddingFn = createEvent();
export const addTodoFn = createEvent();
export const deleteTodoFn = createEvent();

export const updateDoneTodoFn = createEvent();
export const updateTodoNameFn = createEvent();

export const setStateEditedTodoNameFn = createEvent();
export const resetStateEditedTodoNameFn = createEvent();

export const saveEditedTodoNameFn = createEvent();

export const $isEditedTodoNameOpen = createStore("");

export const $todoName = createStore("");

export const updateTodosFilterFn = createEvent();

export const $todosFilter = createStore("");
persist({ store: $todosFilter, key: "todosFilter" });

export const updateTodosSortFn = createEvent();

export const $todosSort = createStore("");

export const $filteredBySearchTodos = createStore([]);

export const $todos = createStore([]);
persist({ store: $todos, key: "todos" });

export const setSearchStringFn = createEvent();
export const resetSearchStringFn = createEvent();

export const $searchString = createStore("");
