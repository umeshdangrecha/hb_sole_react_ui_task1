import list, { defaultState, defaultData } from "../constants/list";
import React, { useState } from "react";
import classes from "./AddQuestion.module.css";
import Type from "./Type";
// import TypeNumber from "./Types/TypeNumber/NumberItem";

const AddQuestion = (props) => {
  const [optionValue, setOptionValue] = useState("none");
  const [datas, setDatas] = useState(defaultState);

  const setOptionValueHandler = (event) => {
    setOptionValue(event.target.value);
  };

  const onAddNewItem = (type, obj) => {
    setDatas((prev) => {
      return { ...prev, [type]: [...prev[type], obj] };
    });
  };

  const onRemoveItem = (type, id) => {
    setDatas((prev) => {
      const arr = prev[type].filter((data) => data.key !== id);
      return { ...prev, [type]: [...arr] };
    });
  };
  const onUpdateData = (type, id, key, value) => {
    setDatas((prev) => {
      const arr = [];
      const temp = [...prev[type]];
      for (const index in temp) {
        if (temp[index].key === id) {
          arr.push({ ...temp[index], [key]: value });
        } else {
          arr.push({ ...temp[index] });
        }
      }
      return { ...prev, [type]: [...arr] };
    });
  };

  const onSubmitHandler = () => {
    console.log(datas[optionValue]);
  };

  let content = null;
  if (optionValue !== "none") {
    content = (
      <Type
        type={optionValue}
        datas={datas[optionValue]}
        onAddNewItem={onAddNewItem}
        onRemoveItem={onRemoveItem}
        onUpdateData={onUpdateData}
        defaultObj={defaultData[optionValue]}
      />
    );
  }

  return (
    <div className={classes.addQuestion}>
      <div className={classes.header}>
        <span>←</span>
        <span>Add Question</span>
      </div>
      <div className={classes.main}>
        <input
          type="text"
          placeholder="Question Title"
          className={classes.input_question}
        />
        <select value={optionValue} onChange={setOptionValueHandler}>
          {Object.keys(list).map((key, index) => (
            <option key={key} value={key}>
              {list[key].placeholder}
            </option>
          ))}
        </select>
        {content}
        <button className={classes.submit} onClick={onSubmitHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddQuestion;
