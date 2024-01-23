import { useState } from "react";
import AddTaskModel from "./AddTaskModel";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";

const TaskBoard = () => {

    const defaultTask = {
        'id': crypto.randomUUID(),
        'title': 'Learn React By RWS',
        'description': 'লার্ন উইথ সুমিত একটি বাংলা প্রোগ্রামিং প্লাটফর্ম যেখানে প্রোগ্রামিং শুধু শেখানো নয়, বুঝানো হয়.',
        'tags': ["Web", "React", 'Redux'],
        'isFavorite': true
    }
    const [task, setTask] = useState([defaultTask])
    const [showAddModal, setShowAddModal] = useState(false)
    const [taskToupdte, setTaskToupdte] = useState(null)
    function handleAddTask(e, newTask, isAdd) {
        e.preventDefault()
        if (isAdd) {
            setTask([...task, newTask])
        }
        else {
            setTask(
                task.map(task => {
                    if (task.id === newTask.id) {
                        return newTask
                    }
                    return task
                })
            )
        }
        setShowAddModal(false)
    }
    function handleEditTask(task) {
        setTaskToupdte(task)
        setShowAddModal(true)
    }
    function handleCloseClick() {
        setShowAddModal(false)
        setTaskToupdte(null)
    }
    function handleDeletedTask(taskId) {
        const taskAfterDeleted = task.filter(task => task.id !== taskId)
        setTask(taskAfterDeleted)
    }
    return (
        <section className="mb-20" id="tasks">
            {showAddModal && <AddTaskModel
                onSave={handleAddTask}
                taskToupdte={taskToupdte}
                onCloseClick={handleCloseClick}
            />}
            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask></SearchTask>
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction onAddClick={() => setShowAddModal(true)}></TaskAction>
                    <TaskList OnDeleted={handleDeletedTask} task={task} onEdit={handleEditTask}></TaskList>
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;