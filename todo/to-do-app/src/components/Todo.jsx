function Todo({todo, index,delTodo}){
    return(
        <>
        <div className="todo">
          <p>{todo}</p>
        </div>

        <div  className="actions">
          <input type="checkbox"/>
          <button onClick={()=>delTodo(index)}>Delete</button>
        </div>
        </>
    )
}

export default Todo;