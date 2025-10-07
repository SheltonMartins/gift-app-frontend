import { Comment } from "./CommentInterface";

export interface Gift {
  id: number;
  title: string;
  description?: string;
  image_url?: string;
  product_link?: string;
  created_at?: string;
  userId?: number; 
  comments?: Comment[];
  onDelete?: () => void;
}

