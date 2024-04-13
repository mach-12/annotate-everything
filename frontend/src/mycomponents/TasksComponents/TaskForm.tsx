import React, { useState } from "react";
import api from "../../api/api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

function TaskForm() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  // Request to create Task
  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    api
      .post("/api/tasks/", { content, title })
      .then((res) => {
        if (res.status === 201) {
          alert("Task created!");
          setContent("");
          setTitle("");
        } else {
          alert("Failed to make Task.");
        }
      })
      .catch((err) => alert(err));

    navigate("/tasks");
  };

  return (
    <div className="w-full lg:min-h-[600px] xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create a Task</h1>
            <p className="text-balance text-muted-foreground">
              Upload image and give a prompt to Annotate
            </p>
          </div>
          <form className="grid gap-4" onSubmit={createTask}>
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                type="text"
                id="title"
                name="title"
                required
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Content</Label>
              </div>
              <Input
                id="content"
                name="content"
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

            <Button type="submit" value="Submit">
              Annotate
            </Button>
            <Button variant="destructive" onClick={() => navigate("/tasks")}>
              Cancel
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TaskForm;
