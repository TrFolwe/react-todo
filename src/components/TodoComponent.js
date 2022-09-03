import {useState} from 'react';

function Todo() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");
  return (
    <>
    <input onChange={(e) => setTodoValue(e.target.value)} value={todoValue} type={'text'} placeholder='Enter todo...'></input>
    <button type={'submit'}  onClick={() => setTodo([...todo, todoValue])}>Add new todo</button>
    <ul>
      {todo.map(td => (
        <li>{td}<br></br><button type={'submit'}>Delete</button></li>
      ))}
    </ul>
    </>
  );
}

export default Todo;