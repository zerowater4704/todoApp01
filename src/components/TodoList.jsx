import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoList({
  todoList,
  onDelete,
  onCheck,
  handleEdit,
  handleEditSave,
  editText,
  saveEdit,
  setSaveEdit,
}) {
  return (
    <>
      <div>
        <ul className=" px-3 ">
          {todoList.map((todo) => (
            <li
              key={todo.id}
              className="flex grow border-4 border-sky-300 items-center gap-3 rounded bg-white p-2 my-2 text-xl font-bold"
            >
              {editText === todo.id ? (
                <div>
                  <div>
                    <input
                      className="flex justify-center "
                      type="checkbox"
                      onClick={() => onCheck(todo.id)}
                    />
                  </div>
                  <span
                    className={
                      todo.isChecked ? "text-gray-600 line-through" : ""
                    }
                  >
                    <input
                      type="text"
                      value={saveEdit}
                      onChange={(event) => setSaveEdit(event.target.value)}
                    />
                  </span>
                  <div className="flex grow justify-end">
                    <button onClick={() => handleEditSave(todo.id)}>
                      Save
                    </button>
                    <button type="button" onClick={() => onDelete(todo.id)}>
                      <DeleteIcon color="action" />
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div>
                    <input
                      className="flex justify-center "
                      type="checkbox"
                      onClick={() => onCheck(todo.id)}
                    />
                  </div>
                  <span
                    className={
                      todo.isChecked ? "text-gray-600 line-through" : ""
                    }
                  >
                    {todo.title}
                  </span>
                  <div className="flex grow justify-end">
                    <button onClick={() => handleEdit(todo.id, todo.title)}>
                      Edit
                    </button>
                    <button type="button" onClick={() => onDelete(todo.id)}>
                      <DeleteIcon color="action" />
                    </button>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
