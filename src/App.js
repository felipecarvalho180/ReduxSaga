import React from 'react';
import { Provider } from 'react-redux';
import store from './store/index';

import TodoList from './TodoList';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <h1>App</h1>
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
