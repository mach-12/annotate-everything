import { CircleIcon, StarIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { TaskResponse } from "@/types/types";
import { useNavigate } from "react-router-dom";

// type Annotation = {
//   confidence: string;
//   label: string;
//   points: [number, number, number, number]; // Tuple representing [x1, y1, x2, y2]
//   type: "rectangle";
// };

// type AnnotationList = Annotation[];

interface TaskProps {
  task: TaskResponse;
  onDelete: (id: number) => void;
}
function Task({ task, onDelete }: TaskProps) {
  const formattedDate = new Date(task["created_at"]).toLocaleDateString(
    "en-US"
  );
  const navigate = useNavigate();

  return (
    <Card className="flex p-4 transition-all hover:bg-accent">
      <img
        alt="Cover image"
        className="aspect-square rounded-lg object-cover"
        height="100"
        src={task.image}
        width="100"
      />
      <div className="flex-1">
        <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
          <div className="space-y-1">
            <CardTitle>{task.title}</CardTitle>
            <CardDescription>{task.description}</CardDescription>
          </div>

          <div className="flex gap-4">
            <Button
              className="h-12"
              onClick={() => navigate(`/tasks/${task.id}`)}
            >
              Open
            </Button>
            <Button
              variant="destructive"
              className="w-12 h-12"
              onClick={() => onDelete(task.id)}
            >
              <TrashIcon />
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CircleIcon className="mr-1 h-3 w-3 fill-sky-400 text-sky-400" />
              GroundedSAM
            </div>
            <div className="flex items-center">
              <StarIcon className="mr-1 h-3 w-3" />
              20k
            </div>
            <div>{formattedDate}</div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
export default Task;
