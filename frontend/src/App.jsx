import { useEffect, useState } from "react"
import axios from "axios";
function App() {
  const [selectId, setSelectI] = useState([1]);
  return <div>
    <button onClick={function(){
      setSelectI(1);
    }}>1</button>
    <button onClick={function(){
      setSelectI(2);
    }}>2</button>
    <button onClick={function(){
      setSelectI(3);
    }}>3</button>
    <button onClick={function(){
      setSelectI(4);
    }}>4</button>
    <Todo id={selectId}/>
  </div>
}

function Todo({id}){
  const [todo, setTodo] = useState({});

  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(response => {
      setTodo(response.data.todo)
    }) 
  }, [id])

  return <div>
    Id:{id}
    <h1>{todo.title}</h1>
    <h5>{todo.description}</h5>
</div>
}


export default App
