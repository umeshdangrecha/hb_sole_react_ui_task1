const list = {
  none: {
    value: "none",
    placeholder: "None",
  },
  text: {
    value: "text",
    placeholder: "Text",
  },
  number: {
    value: "number",
    placeholder: "Number",
  },
  select: {
    value: "select",
    placeholder: "Select",
  },
  text_area: {
    value: "text_area",
    placeholder: "Text Area",
  },
  radio: {
    value: "radio",
    placeholder: "Radio",
  },
  check_box: {
    value: "check_box",
    placeholder: "Check box",
  },
  slider: {
    value: "slider",
    placeholder: "Slider",
  },
};

export default list;

export const defaultData = {
  text: {
    placeholder: "",
    min: "",
    max: "",
    key: Math.random(),
  },
  number: {
    placeholder: "",
    min: "",
    max: "",
    key: Math.random(),
  },
  select: {
    placeholder: "",
    min: "",
    max: "",
    key: Math.random(),
  },
  text_area: {
    placeholder: "",
    min: "",
    max: "",
    row: "",
    key: Math.random(),
  },
  radio: {
    placeholder: "",
    min: "",
    max: "",
    key: Math.random(),
  },
  check_box: {
    placeholder: "",
    min: "",
    max: "",
    key: Math.random(),
  },
  slider: {
    placeholder: "",
    min: "",
    max: "",
    key: Math.random(),
  },
};

export const defaultState = {
  none: [],
  text: [defaultData.number],
  number: [defaultData.number],
  select: [defaultData.number],
  text_area: [defaultData.text_area],
  radio: [defaultData.number],
  check_box: [defaultData.number],
  slider: [defaultData.number],
};
