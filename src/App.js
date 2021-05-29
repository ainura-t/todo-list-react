import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputVal: "",
      todos: [],
      id: 0,
      editItem: ""
    };
  }

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  };

  onAdd = () => {
    const { inputVal, todos, id } = this.state;
    const add = this.state.todos;
    if (inputVal) {
      let cId = 0;
      if (id === 0) {
        cId = Math.floor(Math.random() * 100);
      } else {
        cId = id;
      }

      const newTodos = { name: inputVal, isDone: false, id: cId };
      add.push(newTodos);
      this.setState({ todos: add, inputVal: "", id: 0 });
    } else {
      alert("invalid input");
    }
  };

  onEdit = (id) => {
    const edited = this.state.todos.filter((d) => d.id !== id);
    const selectedItem = this.state.todos.find((el) => el.id === id);
    this.setState({ todos: edited, inputVal: selectedItem.name, id: id });
    console.log(edited);
  };
  onDel = (todo) => {
    const deleted = this.state.todos.filter((d) => d.name !== todo);
    this.setState({ todos: deleted });
  };

  render() {
    const { inputVal, todos } = this.state;

    return (
      <div className="App">
        <input type="text" value={inputVal} onChange={this.handleChange} />
        <button type="submit" onClick={this.onAdd}>
          Add
        </button>
        <ul>
          {todos.map((todo) => {
            return (
              <li>
                <div className="item">
                  <div>
                    <input type="checkbox" />
                    <span>{todo.name}</span>
                  </div>
                  <div className="btn">
                    <button
                      className="del"
                      onClick={() => this.onDel(todo.name)}
                    >
                      Delete
                    </button>
                    <button className="ed" onClick={() => this.onEdit(todo.id)}>
                      Edit
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default App;
