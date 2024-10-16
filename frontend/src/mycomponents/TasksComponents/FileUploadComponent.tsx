import React, { ChangeEvent, Dispatch, useState } from "react";
import { Button } from "@/components/ui/button";
import { CircleX } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

interface FileUploadProps {
  image: File | null;
  setImage: Dispatch<React.SetStateAction<File | null>>;
}
const FileUploadComponent: React.FC<FileUploadProps> = ({
  image,
  setImage,
}) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [imageURL, setImageURL] = useState("");

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (image) {
      event.preventDefault();
      return;
    }
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files[0];
      if (validateFile(selectedFile)) {
        setImage(selectedFile);
        setImageURL(URL.createObjectURL(selectedFile));
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(false);

    if (image) {
      // Prevent file drop if one is already loaded
      return;
    }

    const droppedFiles = event.dataTransfer.files;

    if (droppedFiles && droppedFiles.length > 0) {
      const droppedFile = droppedFiles[0];
      if (validateFile(droppedFile)) {
        setImage(droppedFile);
      }
    }
  };

  const validateFile = (file: File) => {
    const supportedFormats = ["jpg", "jpeg", "png"];
    const fileType = file.type.split("/")[1];
    const fileSizeMB = file.size / (1024 * 1024);
    if (!supportedFormats.includes(fileType)) {
      setErrorMessage(
        "Unsupported file format. Please select a file with one of the supported formats: .JPG, .JPEG, .PNG"
      );
      return false;
    }
    if (fileSizeMB > 5) {
      setErrorMessage(
        "File size is larger than 5 MB. Please select a smaller file."
      );
      return false;
    }
    return true;
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX;
    const y = event.clientY;

    if (x < rect.left || x > rect.right || y < rect.top || y > rect.bottom) {
      setIsDraggingOver(false);
    }
  };

  const handleRemoveFile = () => {
    setImage(null);
    setErrorMessage("");
  };

  return (
    <div>
      <Label htmlFor="fileInput">Image</Label>

      <div
        className={`flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-600 rounded-lg ${
          isDraggingOver ? "bg-gray-100" : ""
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <input
          id="fileInput"
          type="file"
          onChange={handleFileInputChange}
          className="hidden"
        />

        {image ? (
          <div className="flex items-center justify-between gap-5">
            <div className="flex items-center">
              <Avatar>
                <AvatarImage src={imageURL} />
              </Avatar>
            </div>
            <button
              onClick={handleRemoveFile}
              className="p-1 bg-muted rounded-lg"
            >
              <CircleX />
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <Button
              className="mb-2"
              onClick={() => document.getElementById("fileInput")?.click()}
            >
              Add File
            </Button>
            <span className="text-sm text-gray-500">or</span>
            <span className="text-sm text-gray-500">drag your file here</span>
          </div>
        )}
      </div>

      <p className="text-sm mt-1 text-gray-500">
        Supported file formats include JPGs, JPEGs, PNGs.
      </p>

      {errorMessage && (
        <p className="text-sm mt-1 text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default FileUploadComponent;
