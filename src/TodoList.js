import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActions from './store/actions';

const TodoList = ({
  // todos,
  data,
  loading,
  error,
  addTodo,
  requestTodoList,
}) => {
  return (
    <ul>
      {/* { todos.map(todo => (
        <li key={ todo.id }>
          { todo.text }
        </li>
      )) } */}
      {/* <button onClick={ () => addTodo('Fazer café') }>
        Novo todo
      </button> */}
      { loading && <li>Carregando...</li> }
      { !loading && !error && (
        data.map(todo => (
          <li key={ todo.id }>
            { todo.text }
          </li>
        ))
      ) }
      <button onClick={ () => requestTodoList() }>
        Carregar todos
      </button>
    </ul>
  );
};

const mapStateToProps = state => ({
  // todos: state.todos,
  data: state.todos.data,
  loading: state.todos.loading,
  error: state.todos.error,
});

const mapDispatchToProps = dispatch => 
  bindActionCreators(TodoActions, dispatch);

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(TodoList);