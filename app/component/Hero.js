'use client'
import React , {FormEvent, useState}from 'react'

const Hero = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('')

     async function onSubmit(event) {
        event.preventDefault();

        setTodos([...todos, inputValue]);
        setInputValue('')
        //const formData = new FormData(event.currentTarget)
        //const response = await fetch('/api/submit', { method: 'POST', body: formData, })
 
        // Handle response if necessary
       // const data = await response.json()
        // ...
    };

    const onDelete = (index) => {
          const newTodos = [...todos]
          newTodos.splice(index, 1);
          setTodos(newTodos);
    }
  

  return (<>
  <div className=" flex flex-col justify-center items-center mt-11 p-11 border border-black w-96">
   
    <h1>Form</h1>
    
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder='your list todo' value={inputValue} onChange={(e)=> setInputValue(e.target.value)}/>
      <button type="submit">Submit</button>
    </form>
   

    </div>
    
    <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}
             <button onClick={(index) =>onDelete(index)} className='border border-black rounded-lg bg-blue-300'>Delete</button>
          </li>
        ))}
      </ul>
      </>
  )
}

export default Hero;