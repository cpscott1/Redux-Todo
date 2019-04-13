import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addNewTodo, toggleTodo } from '../actions';

class TodoList extends Component {
  state = {
    newTodo: ''
  }
}

changeHandler = event => {
  this.setState({
    newTodo: event.target.value
  })
}

addTodo = event => {
  event.preventDefault();
  this.props.addNewTodo(this.state.newTodo)
};

toggleTodo = (event, index) => {
  event.preventDefault();
  this.props.toggleTodo(index);
}

render() {
  return (
    <>
      <div className='todo-list'>
        {this.props.todos.map((todo, index) => (
          <h4 onClick={event => this.toggleTodo(event, index)} key={index}>
            {todo.value}
            {todo.completed}
          </h4>
        )}
      </div>
      <input
        type='text'
        value={this.state.newTodo}
        onChange={this.changeHandler}
        placeholder="Add new todo"
      />
      <button onClick={this.addTodo}>Add Todo</button>
    </>
  )
}

const mapStateToProps = state => ({
  todos: state.todosReducer.todos
})

export default connect(
  mapStateToProps,
  { addNewTodo, toggleTodo }
)(TodoList);
