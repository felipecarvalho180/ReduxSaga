export function addTodo(text) {
  return {
    type: 'ASYNC_ADD_TODO',
    payload: { text },
  }
}

export function requestTodoList() {
  return {
    type: 'REQUEST_TODO_LIST',
  }
}