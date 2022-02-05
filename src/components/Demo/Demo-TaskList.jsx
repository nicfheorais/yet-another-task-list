//JASIEN VERSION
import {useState} from "react";

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    function addTask(newTask) {
        setTasks([...tasks, newTask]);
    }

    function updateTask(id, updatedTask) {
        setTasks(
            tasks.filter((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        ...updateTask,
                    };
                }
                return task;
            })
        );
    }

    function deleteTask(id) {}

    return (
        <>
            <form onSubmit={addTask}>
                {/* check state - and either print a Task compoenent in Edit OR Input mode at the top */}
                <input />
                <button>Add Task</button>
            </form>
            {tasks.map((task) => (
                // we print a load of Task compoenents all in View mode
                <Task task={task} onDelete={deleteTask} onUpdate={updateTask} />
            ))}
        </>
    );
};
