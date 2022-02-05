//JASIEN VERSION
import {useState} from "react";

const t = {
    id: "1ab",
    editing: false,
    title: "do dishes",
};

export const Task = (props) => {
    const {task, onDelete, onUpdate} = props;

    const [localTitle, setLocalTitle] = useState(task.title);

    function onClickDelete() {
        onDelete(task.id);
    }

    function onToggleEdit() {
        onUpdate(task.id, {...task, editing: !task.editing});
    }

    function onTitleEdit() {
        onUpdate(task.id, {...task, title: newTitle});
    }

    return (
        <>
            {editing ? <input value={localTitle} /> : <span>{task.title}</span>}
            <button onClick={onClickUpdate}>Edit</button>
            <button onClick={onClickDelete}>Delete</button>
        </>
    );
};
