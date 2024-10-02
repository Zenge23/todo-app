const TodoTile =({title})=>{
    return(
        <div className="flex border-[10px]">
            <input type="checkbox" />
            <p>{title}</p>flex
        </div>
    );
}
export default TodoTile;