import { readFile } from 'fs/promises';
import path from 'path';

export type PloggingPost = {
  thumbnail: string;
  createdAt: string;
  user: {
    name: string;
    avatar: string;
  };
};

export async function getAllPloggingPosts(): Promise<PloggingPost[]> {
  const filePath = path.join(process.cwd(), 'data', 'ploggingposts.json');
  return readFile(filePath, 'utf-8').then<PloggingPost[]>(JSON.parse);
}
