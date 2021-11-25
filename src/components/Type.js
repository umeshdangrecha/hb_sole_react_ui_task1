import classes from "./TypeNumber.module.css";
import Item from "./Item";

const Type = (props) => {
  const addNewItem = () => {
    props.onAddNewItem(props.type, { ...props.defaultObj, key: Math.random() });
  };

  const removeDataHandler = (id) => {
    props.onRemoveItem(props.type, id);
  };

  return (
    <div>
      {props.datas.map((data, index) => {
        return (
          <Item
            type={props.type}
            key={data.key}
            count={index + 1}
            data={data}
            onUpdateData={props.onUpdateData.bind(this, props.type, data.key)}
            removeDataHandler={removeDataHandler.bind(this, data.key)}
          />
        );
      })}
      <div className={classes.button}>
        <span onClick={addNewItem} style={{ cursor: "pointer" }}>
          <svg
            fill="#008000"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35px"
            height="35px"
          >
            <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 11 7 L 11 11 L 7 11 L 7 13 L 11 13 L 11 17 L 13 17 L 13 13 L 17 13 L 17 11 L 13 11 L 13 7 L 11 7 z" />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default Type;
