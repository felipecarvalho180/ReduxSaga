import { takeLatest, put, all, call, select } from 'redux-saga/effects';

function apiGet(text, length) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text + ' do Felipe: ' + length);
    }, 2000);
  });
}

function apiGet2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          text: 'Fazer café do Felipe.'
        }, {
          id: 2,
          text: 'Fazer café do Felipe 2.'
        }, {
          id: 3,
          text: 'Fazer café do Felipe 3.'
        }, {
          id: 4,
          text: 'Fazer café do Felipe 4.'
        },
      ]);
    }, 2000);
  });
}

function* asyncAddTodo(action) {
  try {
    const todos = yield select(state => state.todos)

    const result = yield call(apiGet, action.payload.text, todos.length);
  
    yield put({
      type: 'ADD_TODO',
      payload: { text: result },
    });
  } catch (error) {
    yield put({
      type: 'ERROR'
    });
  }
}

function* getTodoList() {
  try {
    const result = yield call(apiGet2);
  
    yield put({
      type: 'SUCCESS_TODO_LIST',
      payload: { data: result },
    });
  } catch (error) {
    yield put({
      type: 'FAILURE_TODO_LIST',
    });
  }
}

export default function* root() {
  yield all([
    takeLatest('ASYNC_ADD_TODO', asyncAddTodo),
    takeLatest('REQUEST_TODO_LIST', getTodoList),
  ]);
};