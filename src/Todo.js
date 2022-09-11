import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiEditAlt } from 'react-icons/bi';
import { FiSave } from 'react-icons/fi';

export function Todo(props) {
  const completeClass = props.complete ? "task-complete" : "";
  const completeButtonText = props.complete ? <FaCheck /> : " ";
  const editButtonText = props.textIsEditable ? <FiSave /> : <BiEditAlt />;
  const editClass = props.textIsEditable ? "task-editable" : "";

  return (<li className="todo">
    <button id="complete" onClick={() => props.completeTask(props.uuid)}>{completeButtonText}</button>
    <div className="task-text">
      <input
        type="text"
        id={"title" + props.uuid}
        className={"title " + completeClass + " " + editClass}
        defaultValue={props.title}
        disabled={!props.textIsEditable} />
      <input
        type="text"
        id={"desc" + props.uuid}
        className={"desc " + completeClass +  " " + editClass}
        defaultValue={props.desc}
        disabled={!props.textIsEditable} />
    </div>
    <div className="task-actions">
      <button
        id="edit"
        onClick={() => props.editTask(
          props.uuid,
          document.getElementById("title" + props.uuid).value,
          document.getElementById("desc" + props.uuid).value
        )}
      >{editButtonText}</button>
      <button id="delete" onClick={() => props.deleteTask(props.uuid)}><RiDeleteBin5Line /></button>
    </div>
  </li>);
}

export default Todo;