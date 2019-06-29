import React from 'react';
import Todos from './components/Todos';

class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Clean workspace',
        completed: true
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

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
