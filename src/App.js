import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css';
import { Actions } from './Actions';
import { TodoList } from './TodoList';
import { Dialog } from './Dialog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { key: uuidv4(), title: "This is the first task", desc: "Task description", complete: false, textIsEditable: false }
        // { key: uuidv4(), title: "This is the second task", desc: "Task description", complete: true, textIsEditable: false },
        // { key: uuidv4(), title: "This is the third task", desc: "Task description", complete: true, textIsEditable: false },
        // { key: uuidv4(), title: "This is the fourth task", desc: "Task description", complete: false, textIsEditable: false },
        // { key: uuidv4(), title: "This is the fifth task", desc: "Task description", complete: true, textIsEditable: false },
        // { key: uuidv4(), title: "This is the sixth task", desc: "Task description", complete: false, textIsEditable: false },
      ],
      dialogVisible: false,
      dialogText: ""
    };
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleAddTask(newTitle, newDesc) {
    if (newTitle) {
      this.setState({
        tasks: [...this.state.tasks, {
          key: uuidv4(),
          title: newTitle,
          desc: newDesc,
          complete: false
        }]
      });
      this.setState({ dialogVisible: false, dialogText: "" });
    } else {
      this.setState({ dialogVisible: true, dialogText: "Please enter a title for the new task." });
    }
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputDesc").value = "";
  }

  handleCompleteTask(uuid) {
    var modifiedTasks = this.state.tasks;
    modifiedTasks.find(element => element.key === uuid).complete = !modifiedTasks.find(element => element.key === uuid).complete;
    this.setState({ tasks: modifiedTasks });
  }

  handleDeleteTask(uuid) {
    var modifiedTasks = this.state.tasks;
    modifiedTasks.splice(modifiedTasks.findIndex(element => element.key === uuid), 1);
    this.setState({ tasks: modifiedTasks });
  }

  handleCloseDialog() {
    this.setState({ dialogVisible: false, dialogText: "" });
  }

  handleEditTask(uuid, newTitle, newDesc) {
    var modifiedTasks = this.state.tasks;
    var selectedElement = modifiedTasks.find(element => element.key === uuid);
    if (selectedElement.textIsEditable) {
      selectedElement.title = newTitle;
      selectedElement.desc  = newDesc;
    }
    console.log(selectedElement);
    console.log("title" + uuid);
    console.log(newTitle);
    console.log(newDesc);
    modifiedTasks.find(element => element.key === uuid).textIsEditable = !selectedElement.textIsEditable;
    this.setState({ tasks: modifiedTasks });
  }

  render() {
    return (
      <React.Fragment>
        <Dialog visible={this.state.dialogVisible} text={this.state.dialogText} closeDialog={this.handleCloseDialog} />
        <div className="content">
          <h1>React Todo</h1>
          <Actions addTask={(title, desc) => this.handleAddTask(title, desc)} />
          <TodoList
            tasks={this.state.tasks}
            completeTask={(uuid) => this.handleCompleteTask(uuid)}
            deleteTask={(uuid) => this.handleDeleteTask(uuid)}
            editTask={(uuid, newTitle, newDesc) => this.handleEditTask(uuid, newTitle, newDesc)}
          />
        </div>
      </React.Fragment>
    );
  }
}
export default App;