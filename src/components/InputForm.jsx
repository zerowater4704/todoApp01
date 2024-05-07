export default function InputForm({ addTodo, setAddTodo, onAdd }) {
  return (
    <>
      <form onSubmit={onAdd}>
        <input
          className="rounded-md text-slate-700 mt-1 w-1/2  px-3 py-2 bg-white border border-slate-300 text-sm shadow-sm placeholder-slate-400
            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500  "
          type="text"
          value={addTodo}
          onChange={(event) => setAddTodo(event.target.value)}
          placeholder="今日は何をしますか？"
        />
        <button className="bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded-md mx-2 font-mono">
          Add
        </button>
      </form>
    </>
  );
}
