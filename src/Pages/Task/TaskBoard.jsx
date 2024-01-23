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
        'tags': ["web", "react", 'next'],
        'priority': "High",
        'isFavorite': true
    }
    const [task, setTask] = useState([defaultTask])
    const [showAddModal, setShowAddModal] = useState(false)
    function handleAddTask(e, task) {
        e.preventDefault()
        console.log('adding a task', task);
    }
    return (
        <section className="mb-20" id="tasks">
            {showAddModal && <AddTaskModel onSave={handleAddTask} />}
            <div className="container">
                <div className="p-2 flex justify-end">
                    <SearchTask></SearchTask>
                </div>
                <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
                    <TaskAction onAddClick={() => setShowAddModal(true)}></TaskAction>
                    <TaskList task={task}></TaskList>
                </div>
            </div>
        </section>
    );
};

export default TaskBoard;