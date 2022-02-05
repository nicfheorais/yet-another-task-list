import {useState} from "react";

// * Import sample data - to use as seed data for the TaskList state until we implement a database
import sampleTasks from "../../libs/data";

// * Import custom components
import Header, {MAIN_HEADER, SUB_HEADER} from "../Header";

import Task, {
    PRINT_VIEW_TASK,
    PRINT_EDIT_TASK,
    PRINT_INPUT_TASK,
} from "../Task";

// export const INPUT_MODE = "this could be anything any value at all";
// export const EDIT_MODE = "edit a task";

export const TaskList = () => {
    const [taskList, setTaskList] = useState(sampleTasks);

    //need state to say if we're in input or edit mode.
    // const [ActionModeState, setActionModeState] = useState(INPUT_MODE);
    //TODO: refactor to maybe use two states, editMode and InputMode, both booleans
    const [isEditMode, setIsEditMode] = useState(false);

    // need state for
    //render an INPUT or EDIT TASK heading
    //render a single Task Component in either INPUT or EDIT mode - depending on state variable
    // render a VIEW TASKS heading
    // render a series (list) of Task Components in VIEW mode  - using the task list state array of objects

    //add task on click
    function addTaskToList(newTask) {
        setTaskList([...taskList, newTask]);
    }

    return (
        <>
            {/*  If NOT Edit Mode, then display INPUT Header and Fields */}
            {!isEditMode && (
                <Header headerText="ADD Task" headerType={SUB_HEADER} />
            )}
            {!isEditMode && (
                <Task
                    renderType={PRINT_INPUT_TASK}
                    addNewTask={addTaskToList}
                />
            )}

            {/*  If IS Edit Mode, then display EDIT Header and Fields */}
            {isEditMode && (
                <Header headerText="EDIT Task" headerType={SUB_HEADER} />
            )}
            {isEditMode && <Task renderType={PRINT_EDIT_TASK} />}

            {/* Either way, then also display the list of existing Tasks in VIEW mode */}
            <Header headerText="View All Tasks" headerType={SUB_HEADER} />
            <p>Task List Component - VIEW LIST (under INPUT)</p>
            {taskListState.map((currentTask) => {
                return (
                    <Task
                        key={currentTask.taskId}
                        renderType={PRINT_VIEW_TASK}
                        currentTask={currentTask}
                    />
                );
            })}
        </>
    );
};
