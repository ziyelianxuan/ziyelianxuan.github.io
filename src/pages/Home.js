import React from 'react';
import { connect } from 'react-redux';
import { clearTodos } from '../actions'

function Home({todos, onTodoClick}) {
    console.log(111111111, arguments)
return <h2 onClick={() => onTodoClick(0)}>Home{todos[0]?.text}</h2>;
}
const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_COMPLETED':
        return todos.filter(t => t.completed)
      case 'SHOW_ACTIVE':
        return todos.filter(t => !t.completed)
      case 'SHOW_ALL':
      default:
        return todos
    }
}
const mapStateToProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onTodoClick: _ => {
            dispatch(clearTodos())
          }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);