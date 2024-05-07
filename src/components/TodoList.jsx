import DeleteIcon from "@mui/icons-material/Delete";

export default function TodoList({ todoList, onDelete, onCheck }) {
  return (
    <>
      <div>
        <ul className=" px-3">
          {todoList.map((todo) => (
            <li
              key={todo.id}
              className="flex grow items-center gap-3 rounded bg-white p-2 my-2 text-xl font-bold"
            >
              <div>
                <input
                  className="flex justify-center "
                  type="checkbox"
                  onClick={() => onCheck(todo.id)}
                />
              </div>
              <span
                className={todo.isChecked ? "text-gray-600 line-through" : ""}
              >
                {todo.title}
              </span>
              <button
                className="flex grow justify-end"
                type="button"
                onClick={() => onDelete(todo.id)}
              >
                <DeleteIcon color="action" />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
