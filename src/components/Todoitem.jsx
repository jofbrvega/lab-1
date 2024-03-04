function TodoItem({ task, deleteTask, toggleCompleted }) {
    function handleChange() {
        toggleCompleted(task.id);
    }
    return (
        <form className="flex rounded-md border text-black items-center bg-white justify-between p-5"> 
            <input 
            type="checkbox"
            checked={task.completed}
            onChange={handleChange} />
            <p>{task.text}</p>
            <button className="btn-primary"
            onClick={() => deleteTask(task.id)} 
             > Delete </button>
        </form>
    )
}

export default TodoItem;