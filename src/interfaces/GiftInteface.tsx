import { Comment } from "./CommentInterface";

export interface Gift {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  product_link?: string;
  created_at?: string;
  user_id?: number; // 👈 Adicione isto
  comments?: Comment[];
  onDelete?: () => void;
}

