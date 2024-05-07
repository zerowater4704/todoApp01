export default function InputForm({ addTodo, setAddTodo, onAdd }) {
  return (
    <>
      <div>
        <form onSubmit={onAdd}>
          <input
            type="text"
            value={addTodo}
            onChange={(event) => setAddTodo(event.target.value)}
            placeholder="今日は何をしますか？"
          />
          <button>Add</button>
        </form>
      </div>
    </>
  );
}
