import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
function TodoContainer(){
    return(
        <div className="flex gap-5 flex-wrap">
            <TodoForm/>
            <TodoList/>
        </div>
    )
}

export default TodoContainer