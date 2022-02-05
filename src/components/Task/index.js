import {useState} from "react";
import "./Task.css";

export const PRINT_INPUT_TASK = "z - can be anything rememeber";
export const PRINT_EDIT_TASK = "y";
export const PRINT_VIEW_TASK = "x";

export const Task = (props) => {
    //we need local state for the individual Task
    //const [newTask, ]
    const [taskDescription, setTaskDescription] = useState(""); //TODO: change for edit as wellas add

    //we need to destruct the props
    const {renderType, currentTask, addNewTask} = props; // TODO: add more props

    function onSubmitAdd() {
        //use all the individual field states to construct a new newTask object, and pass that into addNewTask() function.
        console.log(`taskdesc = ${taskDescription}`);
        let newTaskObj = {};
        console.log({newTaskObj});

        newTaskObj["details"] = taskDescription;

        addNewTask(newTaskObj);
    }

    function handleTaskDescChange(e) {
        console.log(e.target.value);
        setTaskDescription(e.target.value);
    }

    //RETURN THE RENDERING
    switch (renderType) {
        case PRINT_INPUT_TASK:
            return (
                <>
                    {/* <p>Task Component: printing an INPUT version of a task</p>; */}
                    {/* <form className="add-task-input-form"> */}
                    <input
                        className="add-task-input-description"
                        onChange={handleTaskDescChange}
                    />
                    {/* antDesign button */}
                    <button onClick={onSubmitAdd}> Add Task </button>
                    {/* </form> */}
                </>
            );

        case PRINT_EDIT_TASK:
            return <p>Task Component: printing an EDIT version of a task</p>;

        case PRINT_VIEW_TASK:
            return (
                <div className="task">
                    {/* <p>Task Component: printing an VIEW version of a task</p> */}
                    <span className="task-id">{currentTask.taskId}</span>
                    <span className="task-category">
                        {currentTask.category}
                    </span>
                    <span className="task-title">{currentTask.title}</span>
                    <span className="task-details">{currentTask.details}</span>
                    <span className="task-createDate">
                        {currentTask.createDate}
                    </span>
                    <span className="task-dueDate">{currentTask.dueDate}</span>
                    <span className="task-author">{currentTask.author}</span>
                </div>
            );

        //and if parameter value is unrecognised
        default:
            return <p>Error - missing what format of task to print</p>;
    }
    // if asked to render a (single) Task in Input form then
    // - (props: none?)
    // - render an input field for task description - blank
    // - (later - add a dropdown for category, a radiobutton x 3 for prioritiy, a calender for due date etc)
    // - render one button - saying 'add task' TODO: will we need the onclick event passed in?
    // if asked to render a (single) Task in Edit form then
    // - (props: needs the task id as a prop, nd all the task attributes)
    // - render an input field - PREFILLED with the description of task being edited
    // if asked to render a (single) Task in View form then
    // - (props: the task  id, and all the task attributes)
    // - render the task id as txt
    // - render the task description as txt
    // - (later - render other task attributes, categroy, priority etc as text)
    // - render an edit button - TODO: will we need the onclick event passed in? yes
    // - render a delete button TODO: will we need the onclick event passed in? yes
};
export default Task;
