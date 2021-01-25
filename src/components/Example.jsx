import React, { useState, useEffect } from "react";


import ButtonChild from "./Button";
import Todo from './Todo';

function Example(props) {

  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [numbers, setNumbers] = useState([]);
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'name 1'
    },
    {
      id: 2,
      name: 'name 2'
    },
    {
      id: 3,
      name: 'name 3'
    },
    {
      id: 4,
      name: 'name 4'
    },
    {
      id: 5,
      name: 'name 5'
    },
  ])

  useEffect(() => {
    // event render
    document.title = `You clicked ${count} times`;
    setText('count: ' + count);
    setNumbers(numbers);


    // event enmount
    // return () => console.log('unmount');

  }, [count, text, numbers]);


  const handleClick = () => {
    setCount(count + 1);
  }

  const handleButton = (number) => {
    let temp = [...numbers];
    temp.push(number);
    setNumbers(temp);
  }

  const handleDeleteTodo = (todo) => {
    console.log(todo);
    let listTodos = [...todos];
    let result = listTodos.filter(x => x.id !== todo.id);
    setTodos(result);
  }

  // const renderTodos = todos.map((item, index) => <li key={index}>{item.name}</li>);

  return (

    <div className="container">
      Example - <span className="badge">{count}</span>
      <div className="row">
        <div className="col-1">
          <button className="btn btn-primary" onClick={handleClick} >Count</button>
        </div>
        <div className="col-1">
          <span className="badge">{text}</span>
        </div>
      </div>
      <div className="row">
        <ButtonChild number="1" getNumber={handleButton} />
        <ButtonChild number="2" getNumber={handleButton} />
        <ButtonChild number="3" getNumber={handleButton} />
      </div>
      <div className="row pt-1">
        <ButtonChild number="4" getNumber={handleButton} />
        <ButtonChild number="5" getNumber={handleButton} />
        <ButtonChild number="6" getNumber={handleButton} />
      </div>
      <div className="row">
        <div className="col">{numbers.toString()}</div>
      </div>
      <div className="row">
        <div className="col">
          {/* <ul>{renderTodos}</ul> */}
          <ul>
            {todos.map((item, index) => <Todo item={item} key={index} deleteTodo={handleDeleteTodo}></Todo>)}
          </ul>
        </div>
      </div>
    </div>


  );
}

export default Example;