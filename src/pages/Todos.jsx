import { Link } from "react-router-dom";
import TodoTile from "../components/TodoTile";

const Todos= ()=>{
    return(
        <div>
            <h1>all Todos</h1>
            <div>
                <TodoTile title={'Creating a react app'}/>
                <TodoTile title={'Install Tailwind CSS'}/>
                <TodoTile title={'Commit code to github'}/>
                <TodoTile title={'Host it on notify'}/>
            </div>
        <Link to={'/add'}>Add Todo</Link>
        </div>
    )

}
export default Todos;