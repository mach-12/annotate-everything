import api from "@/api/api";
import { Button } from "@/components/ui/button";
import { TaskResponse } from "@/types/types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function SelectedTask() {
  const [task, setTask] = useState<TaskResponse | null>(null);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Get all tasks
  useEffect(() => {
    getTask();
  }, []);

  // Get correct task
  const getTask = () => {
    api
      .get("api/tasks/")
      .then((res) => res.data)
      .then((data) => {
        const selectedTask = data.find(
          (task: TaskResponse) => task.id === parseInt(id!)
        );
        setTask(selectedTask);
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="p-10">
      <div className="flex flex-col gap-2 p-4 pt-0">
        <h1 className=" scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          {task?.title}
        </h1>
        <h1 className=" scroll-m-20 pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
          Content
        </h1>
        <div className="space-y-1">{task?.content}</div>

        <Button onClick={() => navigate("/tasks")}>Back</Button>
      </div>
    </div>
  );
}
