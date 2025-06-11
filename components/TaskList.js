import TaskItem from './TaskItem';

function TaskList({tasks,deleteTask,toggleComplete,setEditingTask}){ //receives the tasks array and functions as props.

    //Maps over tasks and renders each one.
    return(
        <ul>   
            {tasks.map(task=>( //Iterates over the task list and  renders each task.
                <TaskItem 
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                    setEditingTask={setEditingTask}
                />
            ))}
        </ul>
    );
}
export default TaskList;