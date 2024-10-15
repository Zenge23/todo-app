import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddTodo =()=>{
    const  navigate =useNavigate();

const saveTodo=async (event)=>{
    event.preventDefault();
    // collect from input

    const formData = new FormData(event.target);
    // Post data to todo api

    await axios.post(`${import.meta.env.VITE_BASE_URL}/todos`,formData); 
        title:formData.get('todo')

    
    // Goto the homepage
    navigate('/');
}
    return(
        <div>
            <h1> Add A New Todo</h1>
        <form onSubmit={saveTodo}>
            <input type="text" placeholder="enter your todo" required name="title"/>
            <input type="file" required name="icon"/>
            <button type="submit">Submit</button>
        
        </form>
        </div>
    );
}
export default AddTodo; 