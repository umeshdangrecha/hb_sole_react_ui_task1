import React from "react";
import classes from "./TypeNumber.module.css";

const Item = (props) => {
  const onUpdateData = (event) => {
    props.onUpdateData(event.target.id, event.target.value);
  };
  // console.log("Item", props.data);
  return (
    <div className={classes.wrapper}>
      <p>Option {props.count}</p>
      <div className={classes.inputContainer}>
        <input
          type="text"
          className={classes.input}
          placeholder="Placeholder"
          id="placeholder"
          value={props.data["placeholder"]}
          onChange={onUpdateData}
        />
        <input
          type="number"
          className={classes.input + " " + classes.input_sm}
          id="min"
          value={props.data["min"]}
          onChange={onUpdateData}
          placeholder="Min"
        />
        <input
          type="number"
          className={classes.input + " " + classes.input_sm}
          placeholder="Max"
          id="max"
          value={props.data["max"]}
          onChange={onUpdateData}
        />
        {props.type === "text_area" && (
          <input
            type="number"
            className={classes.input + " " + classes.input_sm}
            placeholder="Row"
            value={props.data["row"]}
            id="row"
            onChange={onUpdateData}
          />
        )}
        {props.count > 1 && (
          <span
            onClick={props.removeDataHandler}
            style={{
              marginLeft: "10px",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#f00"
              viewBox="0 0 24 24"
              width="35px"
              height="35px"
            >
              <path
                d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,2a8,8,0,1,1-8,8A8,8,0,0,1,12,4Zm-1,7H7v2H17V11H11Z"
                transform="translate(-2 -2)"
              />
            </svg>
          </span>
        )}
      </div>
    </div>
  );
};
export default Item;
