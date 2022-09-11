import React from 'react';
import { IconContext } from 'react-icons';
import { IoMdCloseCircleOutline } from 'react-icons/io';

export function Dialog(props) {
  return (
    <div className={"dialog " + (props.visible ? "dialog-visible" : "")}>
      <p className="title">{props.text}</p>
      <button onClick={props.closeDialog}>
        <IconContext.Provider value={{style: {color: "#eeeeee", fontSize: "1.2rem"}}}>
          <IoMdCloseCircleOutline />
        </IconContext.Provider>
      </button>
    </div>
  );
}
