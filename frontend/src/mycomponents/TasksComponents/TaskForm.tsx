import React, { useState } from "react";
import api from "../../api/api";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import FileUploadComponent from "./FileUploadComponent";

function TaskForm() {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [annotatedImage, setAnnotatedImage] = useState<File | null>(null);
  const [annotatedData, setAnnotatedData] = useState("");

  const navigate = useNavigate();

  // Request to create Task
  const createTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Use FormData to send images and text data
    const formData = new FormData();
    formData.append("description", description);
    formData.append("title", title);
    formData.append("prompt", prompt);

    // Only append the image if it exists
    if (image) {
      formData.append("image", image);
    }

    // Only append the annotated image if it exists
    if (annotatedImage) {
      formData.append("annotated_image", annotatedImage);
    }

    formData.append("annotated_data", annotatedData);

    api
      .post("/api/tasks/", formData)
      .then((res) => {
        if (res.status === 201) {
          alert("Task created!");
          setDescription("");
          setTitle("");
          setPrompt("");
          setAnnotatedData("");
          setImage(null);
          setAnnotatedImage(null);
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
          <form
            className="grid gap-4"
            onSubmit={createTask}
            encType="multipart/form-data"
          >
            <div className="grid gap-2">
              {/* Title */}
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

            {/* Image */}
            <FileUploadComponent
              image={image}
              setImage={setImage}
              setAnnotatedImage={setAnnotatedImage}
            />

            {/* Prompt */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="prompt">Prompt</Label>
              </div>
              <Input
                id="prompt"
                name="prompt"
                required
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
              />
            </div>

            {/* Description */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="description">Description</Label>
              </div>
              <Input
                id="description"
                name="description"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Annotated Data */}
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="annotatedData">Annotated Data</Label>
              </div>
              <Input
                id="annotatedData"
                name="annotated_data"
                required
                value={annotatedData}
                onChange={(e) => setAnnotatedData(e.target.value)}
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              value="Submit"
              disabled={image === null ? true : false}
            >
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
