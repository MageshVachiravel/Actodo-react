function TodoForm(){
    return(
        <div>
                <h1 className="text-2xl font-medium mb-3">Manage activities</h1>
                <input type="text" className="px-2 py-1 border border-black outline-none" />
                <button className="bg-black text-white py-1 border border-black px-2">Add</button>
        </div>
    )
}

export default TodoForm