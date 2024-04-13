import { useEffect, useState } from "react";
import api from "../api/api";
import { Button } from "@/components/ui/button";
import Task from "../mycomponents/TasksComponents/Task";
import { useNavigate } from "react-router-dom";
import { TaskResponse } from "@/types/types";

function TaskPage() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  // Get all tasks on changes
  useEffect(() => {
    getTasks();
  }, []);

  // Request to fetch all tasks
  const getTasks = () => {
    api
      .get("api/tasks/")
      .then((res) => res.data)
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => alert(err));
  };

  // Request to delete tasks
  const deleteTask = (id: number) => {
    api
      .delete(`/api/tasks/delete/${id}/`)
      .then((res) => {
        if (res.status === 204) alert("Task deleted");
        else alert("Failed to delete task");
        getTasks();
      })
      .catch((error) => alert(error));
  };

  return (
    <div className="p-10">
      <div className="flex flex-col gap-2 p-4 pt-0">
        <h1 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          Tasks
        </h1>

        {/* Displaying all tasks */}
        {tasks.map((task: TaskResponse) => (
          <Task task={task} onDelete={deleteTask} key={task.id} />
        ))}

        {/* Buttons */}
        <div className="flex space-x-5">
          <Button onClick={() => navigate("/tasks/create")}>Create Task</Button>
          <Button>Export Annotations </Button>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
