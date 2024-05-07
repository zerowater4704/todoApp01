import { useState } from "react";

import Header from "./components/Header";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [addTodo, setAddTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

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

  return (
    <>
      <Header />
      <InputForm
        addTodo={addTodo}
        setAddTodo={setAddTodo}
        onAdd={handleSubmit}
      />
      <TodoList
        todoList={todoList}
        onDelete={handleDelete}
        onCheck={handleChecked}
      />
    </>
  );
}

export default App;
