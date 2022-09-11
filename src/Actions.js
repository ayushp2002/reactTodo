export function Actions(props) {
  return (
    <div className="actions">
      <div className="inputs">
        <div className="input">
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="inputTitle" />
        </div>
        <div className="input">
          <label htmlFor="description">Description</label>
          <input type="text" name="description" id="inputDesc" />
        </div>
      </div>
      <button id="add-task" onClick={
        () => props.addTask(
          document.getElementById("inputTitle").value,
          document.getElementById("inputDesc").value
        )}
        >Add Task</button>
    </div>
  );
}

export default Actions;