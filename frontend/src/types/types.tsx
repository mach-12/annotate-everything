export interface TaskResponse {
  id: number;
  author: number;
  title: string;
  description: string;
  prompt: string;
  image: string;
  annotated_image: string;
  annotated_data: string;
  created_at: string;
}
