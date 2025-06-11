function TaskItem({task,deleteTask,toggleComplete,setEditingTask}){ //displays task text with buttons to complete or delete it.
    return(
        //shows the task with a line-through if completed.
        <li style={{textDecoration:task.completed?'line-through':'none'}}> 
            {task.text}
            {/* //calls toggleComplete on button click. */}
            <button onClick={()=>toggleComplete(task.id)}>✅</button>

            {/* //calls deleteTask on button click. */}
            <button onClick={()=>deleteTask(task.id)}>🚮</button>  

               {/* Add an Edit button */}
               <button onClick={()=>setEditingTask(task)}>✏️</button>
        </li>
    );
}

export default TaskItem;