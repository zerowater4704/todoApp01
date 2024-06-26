import { useState } from "react";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editText, setEditText] = useState(null);
  const [saveEdit, setSaveEdit] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (addTodo.trim() === "") return;
    const newTodo = {
      title: addTodo,
      id: Math.random(),
      isChecked: false,
    };
    setTodoList((prevState) => [...prevState, newTodo]);
    setAddTodo("");
  }

  function handleDelete(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  function handleChecked(id) {
    setTodoList((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo,
      ),
    );
  }

  function handleEdit(id, currentTitle) {
    setEditText(id);
    setSaveEdit(currentTitle);
  }

  function handleEditSave(id) {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, title: saveEdit } : item,
      ),
    );
    setEditText(null);
    setSaveEdit("");
  }

  return (
    <>
      <main className="bg-slate-300 h-screen flex justify-center items-center ">
        <div className="bg-white border-4 border-cyan-500  w-[500px] h-[600px] rounded-xl text-center  overflow-auto hidden-scrollbar">
          <Header />
          <div className=" border-4 border-sky-300 m-4 py-2 rounded-md h-auto">
            <InputForm
              addTodo={addTodo}
              setAddTodo={setAddTodo}
              onAdd={handleSubmit}
            />
            <TodoList
              todoList={todoList}
              onDelete={handleDelete}
              onCheck={handleChecked}
              handleEdit={handleEdit}
              handleEditSave={handleEditSave}
              editText={editText}
              saveEdit={saveEdit}
              setSaveEdit={setSaveEdit}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
