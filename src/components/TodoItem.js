import "./TodoItem.css";

const TodoItem = ({ title, description, stillTodo, id, handleDelete }) => {
  return (
    <>
      <div>
        <input type="checkbox" id={stillTodo} name={description}></input>
        <label> {`Title: ${title} `} </label>
        <div> {`Description: ${description}`} </div>
        <button onClick={() => handleDelete(id)}>Delete?</button>
        <br />
        <br />
      </div>
    </>
  );
};

export default TodoItem;
