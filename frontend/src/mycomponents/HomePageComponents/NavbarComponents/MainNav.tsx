import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const navigate = useNavigate();
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <a
        className="text-sm font-medium transition-colors hover:cursor-pointer bg-gradient-to-r  from-emerald-500 to-lime-600 text-transparent bg-clip-text  duration-300 hover:from-lime-700 hover:to-emerald-600  hover:bg-clip-text"
        onClick={() => {
          navigate("/");
        }}
      >
        Annotate Everything
      </a>
      <a
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:cursor-pointer"
        onClick={() => {
          navigate("/tasks");
        }}
      >
        Tasks
      </a>

      <a
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary hover:cursor-pointer"
        onClick={() => {
          navigate("/blog");
        }}
      >
        Blog
      </a>
    </nav>
  );
}
