import React from 'react';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean workspace',
        completed: false
      },
      {
        id: 2,
        title: 'Work on Coding projects on react',
        completed: false
      },
      {
        id: 3,
        title: 'Built a business empire',
        completed: false
      }
    ]
  }

  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Delete Todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
