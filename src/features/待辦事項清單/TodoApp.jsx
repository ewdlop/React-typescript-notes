import * as React from 'react'
import * as ReactDOM from 'react-dom'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: "Learn JavaScript", done: false },
        { id: 2, text: "Learn React", done: false },
        { id: 3, text: "Play around in JSFiddle", done: true },
        { id: 4, text: "Build something awesome", done: true }
      ]
    };
  }

  render() {
    return (
      <div>
        <h2>Todos:</h2>
        <ol>
          {this.state.items.map(item => (
            <li key={item.id}> {/* Key prop is essential */}
              <label>
                <input 
                  type="checkbox" 
                  checked={item.done} 
                  onChange={() => this.handleCheckboxChange(item.id)} // Add onChange handler
                />
                <span className={item.done ? "done" : ""}>{item.text}</span>
              </label>
            </li>
          ))}
        </ol>
      </div>
    );
  }

  handleCheckboxChange(id) {
    this.setState(prevState => ({
      items: prevState.items.map(item =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    }));
  }
}
