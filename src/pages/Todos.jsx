import { Link } from "react-router-dom";
import TodoTile from "../components/TodoTile";
import { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
    // 1. Declare state to store todos

    const [todos, setTodos] = useState([]);

    // 2. Define a function to get todos
    const getTodos = async () => {
        // use axios to get todos
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/todos`);
        console.table(response.data);
        // Update todos state
        setTodos(response.data);
    }

    // 3. call function with useEfeect
    useEffect(() => {
        getTodos();
    });

    return (
        <div>
            <h1>all Todos</h1>
            <div>


                {todos.map((todo) => {
                    return <TodoTile title={todos.title} key={todo.id} />
                })}
            </div>
            <Link to={'/add'}>Add Todo</Link>
        </div>
    );

}
export default Todos;