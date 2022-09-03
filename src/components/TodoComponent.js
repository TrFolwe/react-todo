import {useState} from 'react';

function Todo() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  return (
    <>
    <input onChange={(e) => setTodoValue(e.target.value)} value={todoValue} type={'text'} placeholder='Todo giriniz...'></input>
    <button type={'submit'}  onClick={() => setTodo([...todo, todoValue])}>Ekle</button>
    <ul>
      {todo.map(td => (
        <li>{td}</li>
      ))}
    </ul>
    </>
  );
}

export default Todo;