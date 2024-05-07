export default function TodoList({ todoList, onDelete, onCheck }) {
  return (
    <>
      <div>
        <div>
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>
                <input type="checkbox" onClick={() => onCheck(todo.id)} />
                {todo.title}
                <button onClick={() => onDelete(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
