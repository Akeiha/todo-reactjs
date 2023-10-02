import { sample } from "effector";
import {
  $todoName,
  $todos,
  setNewTodosFn,
  resetTodoNameFn,
  addTodoFn,
  resetStateEditedTodoNameFn,
  triggerTodoAddingFn,
  updateDoneTodoFn,
  $todosFilter,
  updateTodosFilterFn,
  deleteTodoFn,
  $isEditedTodoNameOpen,
  setStateEditedTodoNameFn,
  saveEditedTodoNameFn,
  updateTodoNameFn,
  $searchString,
  setSearchStringFn,
  resetSearchStringFn,
  $filteredBySearchTodos,
  $todosSort,
  updateTodosSortFn,
} from ".";
import { v4 as uuidv4 } from "uuid";

$searchString
  .reset(resetSearchStringFn)
  .on(setSearchStringFn, (_, string) => string.target.value);

$isEditedTodoNameOpen
  .reset(resetStateEditedTodoNameFn)
  .on(setStateEditedTodoNameFn, (_, id) => id);

$todosFilter.on(updateTodosFilterFn, (_, filter) => filter);

$todosSort.on(updateTodosSortFn, (_, sort) => sort);

$todoName
  .reset(resetTodoNameFn)
  .on(setNewTodosFn, (_, todo) => todo.target.value);

$todos
  .on(addTodoFn, (todos, newTodo) => [...todos, newTodo])
  .on(updateDoneTodoFn, (todos, { id, done }) => {
    const todo = todos.findIndex((todo) => todo.id === id);
    todos[todo].done = done;
    return [...todos];
  })
  .on(updateTodoNameFn, (todos, { id, name }) => {
    const todo = todos.findIndex((todo) => todo.id === id);
    todos[todo].name = name;
    return [...todos];
  })
  .on(deleteTodoFn, (todos, id) => [...todos.filter((todo) => todo.id !== id)]);

sample({
  clock: triggerTodoAddingFn,
  source: $todoName,
  fn: (name) => ({
    name,
    date: new Date().toISOString(),
    done: false,
    id: uuidv4(),
  }),
  target: [addTodoFn, resetTodoNameFn],
});

sample({
  clock: saveEditedTodoNameFn,
  target: [updateTodoNameFn, resetStateEditedTodoNameFn],
});

sample({
  clock: $searchString,
  source: $todos,
  fn: (todos, searchString) => {
    return [
      ...todos.filter((todo) => {
        const currentTodo = todo.name.toLowerCase().trim();
        return currentTodo.includes(searchString.toLowerCase().trim());
      }),
    ];
  },
  target: $filteredBySearchTodos,
});
