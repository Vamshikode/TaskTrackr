import { useEffect, useState } from "react";

function TaskForm({saveTask,editingTask}){
    const [input,setInput] = useState('');  //loacl state to track the input value.

    useEffect(()=>{
        if(editingTask){
            setInput(editingTask.text);
        }
    },[editingTask]);

    const handleSubmit = (e) => {
        e.preventDefault();  //prevents empty submissions.
        if(!input.trim()) return;
        saveTask(input); //calls addTask from props on form submission.
        setInput('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={input} 
                onChange={(e)=>setInput(e.target.value)} //controlled input field.
                placeholder="Add or edit a task"
            />
            <button type="submit">{editingTask ? 'Update' 
                : 'Add' }</button>
        </form>
    );
}
export default TaskForm;