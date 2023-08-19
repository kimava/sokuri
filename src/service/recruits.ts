import { readFile } from 'fs/promises';
import path from 'path';

export type Recruit = {
  title: string;
  createdAt: Date;
  location: string;
  thumbnail: string;
  headCount: string;
};

export async function getAllRecruitPosts(): Promise<Recruit[]> {
  const filePath = path.join(process.cwd(), 'data', 'recruits.json');
  return readFile(filePath, 'utf-8')
    .then<Recruit[]>(JSON.parse)
    .then((events) =>
      events.sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
    )
    .then((events) => events.slice(0, 10));
}
